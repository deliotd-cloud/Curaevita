const GLP1_PLAY_STORE_BASE_URL = 'https://play.google.com/store/apps/details?id=com.curaevita.glp1companion';

export function getGlp1PlayStoreUrl(placement: string) {
  const params = new URLSearchParams({
    id: 'com.curaevita.glp1companion',
    utm_source: 'curaevita.com',
    utm_medium: 'website',
    utm_campaign: 'glp1_companion_organic',
    utm_content: placement,
  });

  return `https://play.google.com/store/apps/details?${params.toString()}`;
}

export function getPlayStoreUrl(storeUrl: string, placement: string) {
  if (storeUrl === GLP1_PLAY_STORE_BASE_URL) return getGlp1PlayStoreUrl(placement);

  const url = new URL(storeUrl);
  url.searchParams.set('utm_source', 'curaevita.com');
  url.searchParams.set('utm_medium', 'website');
  url.searchParams.set('utm_campaign', 'curaevita_organic');
  url.searchParams.set('utm_content', placement);
  return url.toString();
}
