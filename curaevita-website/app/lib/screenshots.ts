export type AppScreenshot = { src: string; title: string; description: string };

// Existing app captures use illustrative records, not customer health data.
export const appScreenshots: Record<string, AppScreenshot[]> = {
  'glp1-companion': [
    { src: '/screens/glp1-overview.png', title: 'Your week, at a glance', description: 'A next-injection reminder and recorded weight trends.' },
    { src: '/screens/glp1-doses.png', title: 'The details of each dose', description: 'A personal log of prescribed doses and injection sites.' },
    { src: '/screens/glp1-progress.png', title: 'A record of your progress', description: 'Weight and measurements together in your personal history.' },
  ],
  'menopause-companion': [
    { src: '/screens/menopause-today.png', title: 'Start with how you feel', description: 'Daily check-ins for hot flashes, mood and symptoms.' },
    { src: '/screens/menopause-symptoms.png', title: 'Make room for the details', description: 'Record symptoms and their severity in your own diary.' },
    { src: '/screens/menopause-hrt.png', title: 'Keep your HRT history', description: 'Organise records of the treatment prescribed to you.' },
  ],
};
