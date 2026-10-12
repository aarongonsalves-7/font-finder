import type { FontMatch, FreeFontRef, IdentifyError, IdentifyResponse } from '../lib/types';

type View = 'upload' | 'crop' | 'loading' | 'results';
type Filter = 'all' | 'free' | 'paid';

interface HistoryEntry {
  at: number;
  thumb: string;
  response: IdentifyResponse;
}

const MAX_SIDE = 1600;
const MAX_FILE_BYTES = 15 * 1024 * 1024;
const HISTORY_KEY = 'fft:history';
const HISTORY_SIZE = 6;
const DEFAULT_PREVIEW = 'The quick brown fox jumps';

const LOADING_STEPS = ['Reading the letters…', 'Comparing letterforms…', 'Checking free and paid catalogs…', 'Ranking the closest matches…'];

const BADGE_CLASSES: Record<FontMatch['kind'], string> = {
  free: 'bg-link-soft text-link-deep',
  paid: 'bg-warning-soft text-warning-deep'
};

const ENGINE_LABEL: Record<IdentifyResponse['engine'], string> = {
  whatfontis: 'Matched against 990K+ fonts by WhatFontIs',
  gemini: 'Matched by AI typeface analysis',
  demo: 'Demo results (no API keys configured)'
};

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

/** Crop (natural pixels) and downscale to a JPEG data URL on a white background. */
function renderCrop(img: HTMLImageElement, crop: Rect | null, maxSide: number, quality = 0.92): string {
  const src = crop ?? { x: 0, y: 0, w: img.naturalWidth, h: img.naturalHeight };
  const scale = Math.min(1, maxSide / Math.max(src.w, src.h));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(src.w * scale));
  canvas.height = Math.max(1, Math.round(src.h * scale));
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, src.x, src.y, src.w, src.h, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/jpeg', quality);
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
  const resultsList = $('[data-results]');
  const emptyMsg = $('[data-empty]');
  const previewInput = $<HTMLInputElement>('[data-preview-input]');
  const template = $<HTMLTemplateElement>('[data-card-template]');
  const historyBox = $('[data-history]');
  const historyList = $('[data-history-list]');

  let image: HTMLImageElement | null = null;
  let objectUrl: string | null = null;
  let crop: Rect | null = null; // natural pixels
  let current: IdentifyResponse | null = null;
  let filter = (root.dataset.defaultFilter as Filter) || 'all';
  let previewText = DEFAULT_PREVIEW;
  let loadingTimer: number | undefined;

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

  function startLoading() {
    show('loading');
    let step = 0;
    loadingText.textContent = LOADING_STEPS[0];
    loadingTimer = window.setInterval(() => {
      step = Math.min(step + 1, LOADING_STEPS.length - 1);
      loadingText.textContent = LOADING_STEPS[step];
    }, 2200);
  }

  scanBtn.addEventListener('click', async () => {
    if (!image) return;
    showError(null);
    const dataUrl = renderCrop(image, crop, MAX_SIDE);
    const thumb = renderCrop(image, crop, 240, 0.7);
    startLoading();

    try {
      const res = await fetch('/api/identify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: dataUrl.split(',')[1], mimeType: 'image/jpeg' })
      });
      const body = (await res.json().catch(() => null)) as IdentifyResponse | IdentifyError | null;
      if (!res.ok || !body || 'error' in body) {
        throw new Error(body && 'error' in body ? body.error : 'Something went wrong. Please try again.');
      }

      writeHistory([{ at: Date.now(), thumb, response: body }, ...readHistory()]);
      renderHistory();
      showResults(body, thumb);
    } catch (err) {
      show('crop');
      showError((err as Error).message);
    } finally {
      clearInterval(loadingTimer);
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

  function showResults(response: IdentifyResponse, thumb: string) {
    current = response;
    previewText = response.text || previewInput.value.trim() || DEFAULT_PREVIEW;
    previewInput.value = previewText === DEFAULT_PREVIEW ? '' : previewText;
    $<HTMLImageElement>('[data-result-thumb]').src = thumb;

    const free = response.results.filter((r) => r.kind === 'free').length;
    const counts = { all: response.results.length, free, paid: response.results.length - free };
    for (const key of Object.keys(counts) as Filter[]) $(`[data-count="${key}"]`).textContent = String(counts[key]);

    $('[data-result-title]').textContent = `${counts.all} font ${counts.all === 1 ? 'match' : 'matches'}`;
    const remaining = response.remaining === null ? '' : ` · ${response.remaining} free scans left today`;
    $('[data-result-meta]').textContent = `${counts.free} free · ${counts.paid} paid${remaining}`;

    const attribution = $('[data-attribution]');
    attribution.hidden = false;
    attribution.innerHTML = '';
    attribution.append(ENGINE_LABEL[response.engine] + '. ');
    if (response.engine === 'whatfontis') {
      const a = Object.assign(document.createElement('a'), {
        href: 'https://www.whatfontis.com',
        textContent: 'WhatFontIs.com',
        rel: 'noopener',
        className: 'underline underline-offset-2 hover:text-ink'
      });
      attribution.append('Font data by ');
      attribution.appendChild(a);
      attribution.append('. ');
    }
    attribution.append('Always confirm the license before commercial use.');

    renderList();
    show('results');
    $('[data-result-title]').focus({ preventScroll: true });
    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderList() {
    if (!current) return;
    for (const btn of $$('[data-filter]')) btn.setAttribute('aria-checked', String(btn.dataset.filter === filter));

    const items = current.results.filter((r) => filter === 'all' || r.kind === filter);
    resultsList.replaceChildren(...items.map((r) => renderCard(r, current!.results.indexOf(r) + 1)));

    emptyMsg.hidden = items.length > 0;
    if (!items.length) {
      emptyMsg.textContent =
        filter === 'free'
          ? 'No exact free match — switch to Paid to see the free lookalikes listed under each paid font.'
          : 'No paid fonts in these results. Every match is free to use.';
    }
  }

  function renderCard(r: FontMatch, rank: number): HTMLElement {
    const li = template.content.firstElementChild!.cloneNode(true) as HTMLElement;
    const q = <T extends Element = HTMLElement>(sel: string) => li.querySelector<T>(sel)!;

    q('[data-rank]').textContent = `#${String(rank).padStart(2, '0')}`;
    q('[data-name]').textContent = r.name;
    q('[data-name]').title = r.name;
    q('[data-meta]').textContent = [r.source, r.category, r.confidence !== null ? `${r.confidence}% match` : null]
      .filter(Boolean)
      .join(' · ');

    const badge = q('[data-badge]');
    badge.textContent = r.kind === 'free' ? 'Free' : 'Paid';
    badge.className += ` ${BADGE_CLASSES[r.kind]}`;

    const preview = q('[data-preview]');
    const sample = q<HTMLImageElement>('[data-sample]');
    if (r.previewUrl) {
      preview.textContent = previewText;
      preview.dataset.previewText = '';
      previewFont(preview, r.previewUrl);
    } else if (r.sampleImage) {
      preview.hidden = true;
      sample.hidden = false;
      sample.src = r.sampleImage;
      sample.alt = `${r.name} sample`;
    } else {
      preview.textContent = 'Commercial font · compare with the free lookalikes below';
      preview.className = 'w-full text-sm text-mute';
    }

    q('[data-license]').textContent = r.license;

    if (r.alternatives.length) {
      q('[data-alts]').hidden = false;
      const altsList = q('[data-alts-list]');
      for (const alt of r.alternatives) altsList.appendChild(renderAlternative(alt));
    }

    const link = q<HTMLAnchorElement>('[data-link]');
    link.href = r.url;
    link.textContent = r.urlLabel;

    const copy = q<HTMLButtonElement>('[data-copy]');
    copy.addEventListener('click', () => copyText(r.name, copy));
    return li;
  }

  function renderAlternative(alt: FreeFontRef) {
    const li = document.createElement('li');
    const a = Object.assign(document.createElement('a'), {
      href: alt.url,
      target: '_blank',
      rel: 'noopener',
      textContent: alt.name,
      title: `${alt.name} — free download`,
      className: 'inline-flex h-8 items-center rounded-pill border border-hairline bg-elevated px-3 text-sm text-ink transition-colors hover:border-faint'
    });
    previewFont(a, alt.previewUrl);
    li.appendChild(a);
    return li;
  }

  for (const btn of $$('[data-filter]')) {
    btn.addEventListener('click', () => {
      filter = btn.dataset.filter as Filter;
      renderList();
    });
  }

  previewInput.addEventListener('input', () => {
    previewText = previewInput.value.trim() || current?.text || DEFAULT_PREVIEW;
    for (const el of $$('[data-preview-text]')) el.textContent = previewText;
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
    const lines = current.results.map(
      (r, i) => `${i + 1}. ${r.name} (${r.kind === 'free' ? 'Free' : 'Paid'}) — ${r.url}`
    );
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
        label.textContent = entry.response.results[0]?.name ?? 'Scan';
        btn.appendChild(img);
        btn.appendChild(label);
        btn.addEventListener('click', () => showResults(entry.response, entry.thumb));
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
