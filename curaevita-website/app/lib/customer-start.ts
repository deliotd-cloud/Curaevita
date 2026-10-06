export const firstEntries: Record<string, { title: string; steps: string[] }> = {
  'glp1-companion': { title: 'Your first injection record', steps: ['Use the dose log to record the date, medicine, dose and site from your prescribed routine.', 'Add a short observation only if useful. Do not change a dose because of a diary or reminder.', 'Revisit the record before your next appointment. Weight and photos are optional.'] },
  'menopause-companion': { title: 'Your first symptom check-in', steps: ['Record only the symptoms that stood out, rather than completing every field.', 'If you use prescribed HRT, add your own treatment record. Weight tracking is optional.', 'Keep questions for your clinician separate from any treatment decisions.'] },
  'adhd-companion': { title: 'Your first daily check-in', steps: ['Add a prescribed medication if relevant, or choose that you do not take medication during setup.', 'Record focus, mood or energy and the time of your observation.', 'The pattern view shows your entries, not a calculated medication level or dose recommendation.'] },
  'gut-companion': { title: 'Your first meal or digestive entry', steps: ['Record a meal or a digestive check-in with its date and time.', 'Add only details you want to revisit. You do not need to log everything you eat.', 'Meals and symptoms appearing together do not prove a food caused a symptom. Do not start an elimination diet on the basis of the app.'] },
  'migraine-companion': { title: 'Your first attack record', steps: ['When practical, record an attack and the details you remember. A diary must not delay care.', 'Record medicines only according to your own treatment plan, with your observations of response.', 'Weather lookup is optional. You can keep a record without sharing location.'] },
};

export const youtubeIntroductions: Record<string, string> = {
  'glp1-companion': 'https://www.youtube.com/shorts/GKmCQV8iJ2Q',
  'menopause-companion': 'https://www.youtube.com/shorts/0FT9NFHZ9Jk',
  'adhd-companion': 'https://www.youtube.com/shorts/WDYxt4c8Ed4',
  'gut-companion': 'https://www.youtube.com/shorts/le_HsU2FDjU',
  'migraine-companion': 'https://www.youtube.com/shorts/H9vBrFbduZU',
};

// Public campaign labels only. No cookies, device identifiers or health entries.
export function campaignPlayUrl(storeUrl: string, source: 'youtube' | 'resource_partner', slug: string) {
  const url = new URL(storeUrl);
  if (url.origin !== 'https://play.google.com' || url.pathname !== '/store/apps/details') throw new Error('Expected an official app listing');
  url.searchParams.set('utm_source', source);
  url.searchParams.set('utm_medium', source === 'youtube' ? 'organic_video' : 'referral');
  url.searchParams.set('utm_campaign', `${slug.replaceAll('-', '_')}_organic`);
  url.searchParams.set('utm_content', source === 'youtube' ? 'youtube_app_selection' : 'blank_diary_resource');
  return url.toString();
}
