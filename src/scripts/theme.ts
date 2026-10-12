// Theme preference: "system" follows the OS; "light"/"dark" are saved in localStorage.
// The initial apply happens in components/ThemeScript.astro before first paint.

export type ThemePref = 'system' | 'light' | 'dark';

const KEY = 'fft:theme';
export const THEME_EVENT = 'fft:themechange';

export function getThemePref(): ThemePref {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'light' || v === 'dark' ? v : 'system';
  } catch {
    return 'system';
  }
}

export const isDark = () => document.documentElement.dataset.theme === 'dark';

export function setThemePref(pref: ThemePref) {
  try {
    if (pref === 'system') localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, pref);
  } catch {
    // Storage blocked: the choice still applies for this page view.
  }
  const dark = pref === 'dark' || (pref === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0a0a0a' : '#fafafa');
  document.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: pref }));
}
