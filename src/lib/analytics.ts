declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    dataLayer?: unknown[];
  }
}

export function gtagEvent(action: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  // Prefer gtag, fallback to dataLayer push for GTM
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', action, params);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: action, ...params });
    }
  } catch {
    // swallow errors; analytics should not break UX
  }
}

export function pageview(url: string) {
  if (typeof window === 'undefined') return;
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: url });
    }
  } catch {
    // ignore
  }
}
