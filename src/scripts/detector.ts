import type { FontMatch, ScanResult } from '../lib/types';
import { IndexError, scanCanvas, warmUp, type ClientStrings } from './scan';

type View = 'upload' | 'crop' | 'loading' | 'results';

interface HistoryEntry {
  at: number;
  thumb: string;
  result: ScanResult;
}

const MAX_FILE_BYTES = 15 * 1024 * 1024;
const HISTORY_KEY = 'fft:history:v3';
const HISTORY_SIZE = 6;
const HISTORY_CONSENT = 'fft:history-enabled';
const safeFontUrl = (value: string) => /^https:\/\/cdn\.jsdelivr\.net\/fontsource\/fonts\/[a-z0-9-]+@[^/]+\/latin-\d+-normal\.woff2$/.test(value);
const safeSpecimenUrl = (value: string) => value.startsWith('https://fonts.google.com/specimen/');

// Scans saved before the site was translated hold English labels instead of ids.
const LEGACY_MATCH: Record<string, keyof ClientStrings['match']> = {
  'Best match': 'best',
  'Very close': 'veryClose',
  Close: 'close',
  Similar: 'similar'
};

const FILTER_CLASS =
  'flex-1 rounded-pill px-3.5 py-1.5 text-sm font-medium whitespace-nowrap text-body transition-colors aria-checked:bg-ink aria-checked:text-on-ink sm:flex-none';

// ---------- font preview loading ----------

const fontCache = new Map<string, Promise<string | null>>();

function loadFont(url: string): Promise<string | null> {
  let p = fontCache.get(url);
  if (!p) {
    const family = `ffp-${fontCache.size}`;
    p = new FontFace(family, `url(${url})`)
      .load()
      .then((face) => {
        document.fonts.add(face);
        return family;
      })
      .catch(() => null);
    fontCache.set(url, p);
  }
  return p;
}

function applyFont(el: HTMLElement, url: string) {
  el.style.opacity = '0.35';
  loadFont(url).then((family) => {
    if (family) el.style.fontFamily = `"${family}", system-ui, sans-serif`;
    el.style.opacity = '';
  });
}

const fontObserver: IntersectionObserver | null =
  'IntersectionObserver' in window
    ? new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            fontObserver?.unobserve(el);
            if (el.dataset.fontUrl) applyFont(el, el.dataset.fontUrl);
          }
        },
        { rootMargin: '200px' }
      )
    : null;

function previewFont(el: HTMLElement, url: string) {
  el.dataset.fontUrl = url;
  if (fontObserver) fontObserver.observe(el);
  else applyFont(el, url);
}

// ---------- image helpers ----------

function loadImage(src: string, errorMessage: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(errorMessage));
    img.src = src;
  });
}

interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

/**
 * Crop (natural pixels) onto a white canvas. Small crops are upscaled so letters are big
 * enough for OCR; same rule as scripts/eval-matcher.mjs.
 */
function renderCrop(img: HTMLImageElement, crop: Rect | null, target: 'scan' | 'thumb'): HTMLCanvasElement {
  const src = crop ?? { x: 0, y: 0, w: img.naturalWidth, h: img.naturalHeight };
  const longest = Math.max(src.w, src.h);
  const scale = target === 'thumb' ? Math.min(1, 240 / longest) : Math.min(4, Math.max(1200 / longest, Math.min(1, 2400 / longest)));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(src.w * scale));
  canvas.height = Math.max(1, Math.round(src.h * scale));
  const ctx = canvas.getContext('2d', { willReadFrequently: target === 'scan' })!;
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, src.x, src.y, src.w, src.h, 0, 0, canvas.width, canvas.height);
  return canvas;
}

// ---------- storage (best effort) ----------

function readHistory(): HistoryEntry[] {
  try {
    if (localStorage.getItem(HISTORY_CONSENT) !== 'yes') return [];
    const entries = JSON.parse(localStorage.getItem(HISTORY_KEY) ?? '[]');
    if (!Array.isArray(entries)) return [];
    return entries.slice(0, HISTORY_SIZE).filter((e) => e && typeof e.at === 'number' && Date.now() - e.at < 30 * 86400000 && typeof e.thumb === 'string' && e.thumb.startsWith('data:image/jpeg;base64,') && e.result && Array.isArray(e.result.results) && e.result.results.every((r: FontMatch) => r && typeof r.name === 'string' && typeof r.license === 'string' && Array.isArray(r.similarTo) && safeFontUrl(r.previewUrl) && safeSpecimenUrl(r.url)));
  } catch {
    return [];
  }
}

function writeHistory(entries: HistoryEntry[]) {
  try {
    if (localStorage.getItem(HISTORY_CONSENT) !== 'yes') return;
    localStorage.setItem(HISTORY_KEY, JSON.stringify(entries.slice(0, HISTORY_SIZE)));
  } catch {
    // Storage full or blocked; history is optional.
  }
}

// ---------- detector ----------

export function initDetector(root: HTMLElement) {
  const strings: ClientStrings = JSON.parse(root.dataset.strings!);
  const DEFAULT_PREVIEW = strings.defaultPreview;
  const fill = (template: string, vars: Record<string, string | number>) =>
    template.replace(/\{(\w+)\}/g, (m, key: string) => (key in vars ? String(vars[key]) : m));
  const categoryLabel = (c: string) => strings.categories[c as keyof ClientStrings['categories']] ?? c;
  const weightLabel = (w: number) => (w >= 700 ? strings.bold : w === 400 ? strings.regular : String(w));
  const matchText = (m: string) => strings.match[(LEGACY_MATCH[m] ?? m) as keyof ClientStrings['match']] ?? m;
  const licenseText = (id: string) =>
    id.includes('·') ? id : (strings.licenses[id as keyof ClientStrings['licenses']] ?? fill(strings.licenses.other, { name: id || 'Open' }));

  const $ = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const $$ = <T extends Element = HTMLElement>(sel: string) => [...root.querySelectorAll<T>(sel)];

  const views = Object.fromEntries($$('[data-view]').map((el) => [el.dataset.view, el])) as Record<View, HTMLElement>;
  const fileInput = $<HTMLInputElement>('[data-file]');
  const dropzone = $('[data-dropzone]');
  const cropArea = $('[data-crop-area]');
  const cropImg = $<HTMLImageElement>('[data-crop-img]');
  const cropBox = $('[data-crop-box]');
  const clearCropBtn = $<HTMLButtonElement>('[data-clear-crop]');
  const scanBtn = $<HTMLButtonElement>('[data-scan]');
  const loadingText = $('[data-loading-text]');
  const errorBox = $('[data-error]');
  const filterGroup = $('[data-filters]');
  const resultsList = $('[data-results]');
  const previewInput = $<HTMLInputElement>('[data-preview-input]');
  const template = $<HTMLTemplateElement>('[data-card-template]');
  const historyBox = $('[data-history]');
  const historyList = $('[data-history-list]');

  let image: HTMLImageElement | null = null;
  let objectUrl: string | null = null;
  let crop: Rect | null = null; // natural pixels
  let current: ScanResult | null = null;
  let filter = 'all';
  let previewText = DEFAULT_PREVIEW;

  function show(view: View) {
    for (const [name, el] of Object.entries(views)) el.hidden = name !== view;
  }

  function showError(message: string | null) {
    errorBox.hidden = !message;
    errorBox.textContent = message ?? '';
  }

  // ----- file intake -----

  async function acceptFile(file: File | undefined | null) {
    if (!file) return;
    if (!['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/bmp'].includes(file.type)) return showError(strings.notImage);
    if (file.size > MAX_FILE_BYTES) return showError(strings.tooLarge);
    showError(null);
    warmUp(); // fetch the OCR engine while the user crops

    if (objectUrl) URL.revokeObjectURL(objectUrl);
    objectUrl = URL.createObjectURL(file);
    try {
      image = await loadImage(objectUrl, strings.unreadable);
    } catch (err) {
      return showError((err as Error).message);
    }
    if (image.naturalWidth * image.naturalHeight > 40_000_000) {
      image = null;
      URL.revokeObjectURL(objectUrl);
      return showError(strings.tooLarge);
    }
    cropImg.src = objectUrl;
    setCrop(null);
    show('crop');
    scanBtn.focus({ preventScroll: true });
  }

  fileInput.addEventListener('change', () => {
    acceptFile(fileInput.files?.[0]);
    fileInput.value = '';
  });

  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.dataset.drag = 'true';
  });
  dropzone.addEventListener('dragleave', () => delete dropzone.dataset.drag);
  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    delete dropzone.dataset.drag;
    acceptFile(e.dataTransfer?.files[0]);
  });

  document.addEventListener('paste', (e) => {
    const target = e.target as HTMLElement | null;
    if (target?.closest('input, textarea, [contenteditable]')) return;
    const file = [...(e.clipboardData?.items ?? [])].find((i) => i.type.startsWith('image/'))?.getAsFile();
    if (file) {
      e.preventDefault();
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
      acceptFile(file);
    }
  });

  // ----- crop selection -----

  function setCrop(rect: Rect | null) {
    crop = rect;
    clearCropBtn.classList.toggle('invisible', !rect);
    cropBox.hidden = !rect;
    if (!rect || !image) return;
    const k = cropImg.clientWidth / image.naturalWidth;
    Object.assign(cropBox.style, {
      left: `${rect.x * k}px`,
      top: `${rect.y * k}px`,
      width: `${rect.w * k}px`,
      height: `${rect.h * k}px`
    });
  }

  let dragStart: { x: number; y: number } | null = null;

  const pointInImage = (e: PointerEvent) => {
    const box = cropImg.getBoundingClientRect();
    const k = image!.naturalWidth / box.width;
    return {
      x: Math.max(0, Math.min(box.width, e.clientX - box.left)) * k,
      y: Math.max(0, Math.min(box.height, e.clientY - box.top)) * k
    };
  };

  cropArea.addEventListener('pointerdown', (e) => {
    if (!image) return;
    cropArea.setPointerCapture(e.pointerId);
    dragStart = pointInImage(e);
  });
  cropArea.addEventListener('pointermove', (e) => {
    if (!dragStart) return;
    const p = pointInImage(e);
    setCrop({
      x: Math.min(dragStart.x, p.x),
      y: Math.min(dragStart.y, p.y),
      w: Math.abs(p.x - dragStart.x),
      h: Math.abs(p.y - dragStart.y)
    });
  });
  const endDrag = () => {
    dragStart = null;
    // Treat tiny drags as clicks, not selections.
    if (crop && image && (crop.w < image.naturalWidth * 0.02 || crop.h < image.naturalHeight * 0.02)) setCrop(null);
  };
  cropArea.addEventListener('pointerup', endDrag);
  cropArea.addEventListener('pointercancel', endDrag);
  cropArea.addEventListener('keydown', (e) => {
    if (!image || !['Enter', 'Escape', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) return;
    e.preventDefault();
    if (e.key === 'Escape') return setCrop(null);
    const w = image.naturalWidth, h = image.naturalHeight;
    const next = { ...(crop ?? { x: w / 4, y: h / 4, w: w / 2, h: h / 2 }) };
    const dx = e.key === 'ArrowLeft' ? -w / 50 : e.key === 'ArrowRight' ? w / 50 : 0;
    const dy = e.key === 'ArrowUp' ? -h / 50 : e.key === 'ArrowDown' ? h / 50 : 0;
    if (e.shiftKey) { next.w = Math.max(1, Math.min(w - next.x, next.w + dx)); next.h = Math.max(1, Math.min(h - next.y, next.h + dy)); }
    else { next.x = Math.max(0, Math.min(w - next.w, next.x + dx)); next.y = Math.max(0, Math.min(h - next.h, next.y + dy)); }
    setCrop(next);
  });
  clearCropBtn.addEventListener('click', () => setCrop(null));
  window.addEventListener('resize', () => setCrop(crop));

  // ----- scan -----

  scanBtn.addEventListener('click', async () => {
    if (!image) return;
    showError(null);
    const canvas = renderCrop(image, crop, 'scan');
    const thumb = renderCrop(image, crop, 'thumb').toDataURL('image/jpeg', 0.7);
    show('loading');

    try {
      const result = await scanCanvas(canvas, strings, (message) => (loadingText.textContent = message));
      writeHistory([{ at: Date.now(), thumb, result }, ...readHistory()]);
      renderHistory();
      showResults(result, thumb);
    } catch (err) {
      console.error(err);
      show('crop');
      showError(err instanceof IndexError ? strings.indexError : (err as Error).message || strings.generic);
    }
  });

  function reset() {
    image = null;
    current = null;
    setCrop(null);
    showError(null);
    show('upload');
    fileInput.focus();
  }
  $$('[data-reset]').forEach((b) => b.addEventListener('click', reset));

  // ----- results -----

  function showResults(result: ScanResult, thumb: string) {
    current = result;
    filter = 'all';
    previewText = result.text || previewInput.value.trim() || DEFAULT_PREVIEW;
    previewInput.value = previewText === DEFAULT_PREVIEW ? '' : previewText;
    $<HTMLImageElement>('[data-result-thumb]').src = thumb;

    const n = result.results.length;
    $('[data-result-title]').textContent = fill(n === 1 ? strings.resultsOne : strings.resultsMany, { n });
    $('[data-result-meta]').textContent = [
      fill(strings.lettersCompared, { n: result.letters }),
      ...(result.text ? [fill(strings.readText, { text: result.text })] : [])
    ].join(' · ');

    renderFilters();
    renderList();
    show('results');
    $('[data-result-title]').focus({ preventScroll: true });
    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  filterGroup.addEventListener('keydown', (e) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
    const buttons = $$<HTMLButtonElement>('[data-filter]');
    const index = buttons.indexOf(document.activeElement as HTMLButtonElement);
    if (index < 0) return;
    e.preventDefault();
    const next = e.key === 'Home' ? 0 : e.key === 'End' ? buttons.length - 1 : (index + (e.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length;
    buttons[next].click(); buttons[next].focus();
  });
  function renderFilters() {
    if (!current) return;
    const counts = new Map<string, number>();
    for (const r of current.results) counts.set(r.category, (counts.get(r.category) ?? 0) + 1);
    const options = [['all', strings.all, current.results.length] as const, ...[...counts].map(([c, n]) => [c, categoryLabel(c), n] as const)];

    filterGroup.replaceChildren(
      ...options.map(([value, label, count]) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('role', 'radio');
        btn.dataset.filter = value;
        btn.className = FILTER_CLASS;
        btn.append(`${label} `);
        const c = document.createElement('span');
        c.className = 'tabular-nums';
        c.textContent = String(count);
        btn.appendChild(c);
        btn.addEventListener('click', () => {
          filter = value;
          renderList();
        });
        return btn;
      })
    );
    // Hide the bar when every match is the same style.
    filterGroup.hidden = options.length <= 2;
  }

  function renderList() {
    if (!current) return;
    for (const btn of $$('[data-filter]')) {
      btn.setAttribute('aria-checked', String(btn.dataset.filter === filter));
      btn.tabIndex = btn.dataset.filter === filter ? 0 : -1;
    }
    const items = current.results.filter((r) => filter === 'all' || r.category === filter);
    resultsList.replaceChildren(...items.map((r) => renderCard(r, current!.results.indexOf(r) + 1)));
  }

  function renderCard(r: FontMatch, rank: number): HTMLElement {
    const li = template.content.firstElementChild!.cloneNode(true) as HTMLElement;
    const q = <T extends Element = HTMLElement>(sel: string) => li.querySelector<T>(sel)!;

    q('[data-rank]').textContent = `#${String(rank).padStart(2, '0')}`;
    q('[data-name]').textContent = r.name;
    q('[data-name]').title = r.name;
    q('[data-meta]').textContent = [categoryLabel(r.category), weightLabel(r.weight), matchText(r.match)].join(' · ');

    const preview = q('[data-preview]');
    preview.textContent = previewText;
    if (safeFontUrl(r.previewUrl)) previewFont(preview, r.previewUrl);

    q('[data-license]').textContent = licenseText(r.license);

    if (r.similarTo.length) {
      q('[data-similar]').hidden = false;
      const list = q('[data-similar-list]');
      for (const name of r.similarTo) {
        const chip = document.createElement('li');
        chip.className = 'rounded-pill bg-warning-soft px-2.5 py-1 text-xs font-medium text-warning-deep';
        chip.textContent = name;
        list.appendChild(chip);
      }
    }

    q<HTMLAnchorElement>('[data-link]').href = safeSpecimenUrl(r.url) ? r.url : 'https://fonts.google.com/';
    const copy = q<HTMLButtonElement>('[data-copy]');
    copy.addEventListener('click', () => copyText(r.name, copy));
    return li;
  }

  previewInput.addEventListener('input', () => {
    previewText = previewInput.value.trim() || current?.text || DEFAULT_PREVIEW;
    for (const el of $$('[data-preview]')) el.textContent = previewText;
  });

  async function copyText(text: string, button: HTMLButtonElement) {
    const label = button.textContent;
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = strings.copied;
    } catch {
      button.textContent = strings.copyFailed;
    }
    setTimeout(() => (button.textContent = label), 1500);
  }

  $<HTMLButtonElement>('[data-copy-all]').addEventListener('click', (e) => {
    if (!current) return;
    const lines = current.results.map((r, i) => `${i + 1}. ${r.name}: ${r.url}`);
    copyText(`${strings.copyAllHeader}\n${lines.join('\n')}`, e.currentTarget as HTMLButtonElement);
  });

  // ----- history -----

  function renderHistory() {
    const entries = readHistory();
    historyBox.hidden = !entries.length;
    historyList.replaceChildren(
      ...entries.map((entry) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'card flex w-44 shrink-0 flex-col gap-2 p-2 text-left transition-colors hover:border-faint';
        const img = Object.assign(document.createElement('img'), {
          src: entry.thumb,
          alt: '',
          className: 'h-16 w-full rounded-sm bg-canvas object-contain'
        });
        const label = document.createElement('span');
        label.className = 'truncate px-1 text-xs text-body';
        label.textContent = entry.result.results[0]?.name ?? strings.scan;
        btn.appendChild(img);
        btn.appendChild(label);
        btn.addEventListener('click', () => showResults(entry.result, entry.thumb));
        li.appendChild(btn);
        return li;
      })
    );
  }

  $('[data-history-clear]').addEventListener('click', () => {
    writeHistory([]);
    renderHistory();
  });

  const saveHistory = $<HTMLInputElement>('[data-save-history]');
  try {
    saveHistory.checked = localStorage.getItem(HISTORY_CONSENT) === 'yes';
    if (!saveHistory.checked) localStorage.removeItem(HISTORY_KEY);
  } catch {}
  saveHistory.addEventListener('change', () => {
    try {
      if (saveHistory.checked) localStorage.setItem(HISTORY_CONSENT, 'yes');
      else { localStorage.removeItem(HISTORY_CONSENT); localStorage.removeItem(HISTORY_KEY); }
    } catch {}
    renderHistory();
  });
  renderHistory();
  show('upload');
}
