export function gtagEvent(action: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;
  // Prefer gtag, fallback to dataLayer push for GTM
  try {
    // @ts-ignore
    if (typeof window.gtag === 'function') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.gtag('event', action, params);
    } else if (Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push({ event: action, ...params });
    }
  } catch (e) {
    // swallow errors; analytics should not break UX
    // console.warn('Analytics error', e);
  }
}

export function pageview(url: string) {
  if (typeof window === 'undefined') return;
  try {
    // @ts-ignore
    if (typeof window.gtag === 'function') {
      // @ts-ignore
      window.gtag('event', 'page_view', { page_path: url });
    }
  } catch (e) {
    // ignore
  }
}
