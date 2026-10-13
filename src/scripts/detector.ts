import { CATEGORY_LABELS, weightLabel } from '../lib/fonts';
import type { FontMatch, ScanResult } from '../lib/types';
import { scanCanvas, warmUp } from './scan';

type View = 'upload' | 'crop' | 'loading' | 'results';

interface HistoryEntry {
  at: number;
  thumb: string;
  result: ScanResult;
}

const MAX_FILE_BYTES = 15 * 1024 * 1024;
const HISTORY_KEY = 'fft:history:v3';
const HISTORY_SIZE = 6;
const DEFAULT_PREVIEW = 'The quick brown fox jumps';

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

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Could not read that image.'));
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
    return JSON.parse(localStorage.getItem(HISTORY_KEY) ?? '[]');
  } catch {
    return [];
  }
}

function writeHistory(entries: HistoryEntry[]) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(entries.slice(0, HISTORY_SIZE)));
  } catch {
    // Storage full or blocked; history is optional.
  }
}

// ---------- detector ----------

export function initDetector(root: HTMLElement) {
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
    if (!file.type.startsWith('image/')) return showError('That file is not an image. Try a PNG, JPG or WebP.');
    if (file.size > MAX_FILE_BYTES) return showError('That image is over 15 MB. Try a screenshot or a smaller export.');
    showError(null);
    warmUp(); // fetch the OCR engine while the user crops

    if (objectUrl) URL.revokeObjectURL(objectUrl);
    objectUrl = URL.createObjectURL(file);
    try {
      image = await loadImage(objectUrl);
    } catch (err) {
      return showError((err as Error).message);
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
      const result = await scanCanvas(canvas, (message) => (loadingText.textContent = message));
      writeHistory([{ at: Date.now(), thumb, result }, ...readHistory()]);
      renderHistory();
      showResults(result, thumb);
    } catch (err) {
      console.error(err);
      show('crop');
      showError((err as Error).message || 'Something went wrong. Please try again.');
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
    $('[data-result-title]').textContent = `${n} free font ${n === 1 ? 'match' : 'matches'}`;
    $('[data-result-meta]').textContent = `${result.letters} letters compared${result.text ? ` · read “${result.text}”` : ''}`;

    renderFilters();
    renderList();
    show('results');
    $('[data-result-title]').focus({ preventScroll: true });
    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderFilters() {
    if (!current) return;
    const counts = new Map<string, number>();
    for (const r of current.results) counts.set(r.category, (counts.get(r.category) ?? 0) + 1);
    const options = [['all', 'All', current.results.length] as const, ...[...counts].map(([c, n]) => [c, CATEGORY_LABELS[c] ?? c, n] as const)];

    filterGroup.replaceChildren(
      ...options.map(([value, label, count]) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('role', 'radio');
        btn.dataset.filter = value;
        btn.className = FILTER_CLASS;
        btn.append(`${label} `);
        const c = document.createElement('span');
        c.className = 'tabular-nums opacity-60';
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
    for (const btn of $$('[data-filter]')) btn.setAttribute('aria-checked', String(btn.dataset.filter === filter));
    const items = current.results.filter((r) => filter === 'all' || r.category === filter);
    resultsList.replaceChildren(...items.map((r) => renderCard(r, current!.results.indexOf(r) + 1)));
  }

  function renderCard(r: FontMatch, rank: number): HTMLElement {
    const li = template.content.firstElementChild!.cloneNode(true) as HTMLElement;
    const q = <T extends Element = HTMLElement>(sel: string) => li.querySelector<T>(sel)!;

    q('[data-rank]').textContent = `#${String(rank).padStart(2, '0')}`;
    q('[data-name]').textContent = r.name;
    q('[data-name]').title = r.name;
    q('[data-meta]').textContent = [CATEGORY_LABELS[r.category] ?? r.category, weightLabel(r.weight), r.match].join(' · ');

    const preview = q('[data-preview]');
    preview.textContent = previewText;
    previewFont(preview, r.previewUrl);

    q('[data-license]').textContent = r.license;

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

    q<HTMLAnchorElement>('[data-link]').href = r.url;
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
      button.textContent = 'Copied';
    } catch {
      button.textContent = 'Copy failed';
    }
    setTimeout(() => (button.textContent = label), 1500);
  }

  $<HTMLButtonElement>('[data-copy-all]').addEventListener('click', (e) => {
    if (!current) return;
    const lines = current.results.map((r, i) => `${i + 1}. ${r.name} — ${r.url}`);
    copyText(`Font matches from fontfindertool.com\n${lines.join('\n')}`, e.currentTarget as HTMLButtonElement);
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
        label.textContent = entry.result.results[0]?.name ?? 'Scan';
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

  renderHistory();
  show('upload');
}
