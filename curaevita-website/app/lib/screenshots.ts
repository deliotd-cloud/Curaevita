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
  'adhd-companion': [
    { src: '/screens/adhd-2.jpg', title: 'A quick daily check-in', description: 'Record prescribed medication, focus, mood and energy in your own diary.' },
    { src: '/screens/adhd-1.jpg', title: 'Your prescribed routine', description: 'Keep a list of the medicines and doses prescribed to you.' },
    { src: '/screens/adhd-3.jpg', title: 'Revisit your observations', description: 'Look back at the energy check-ins you recorded during your day.' },
  ],
  'gut-companion': [
    { src: '/screens/gut-3.jpg', title: 'Give your symptoms context', description: 'Record stool type, abdominal pain, bloating and your own notes.' },
    { src: '/screens/gut-2.jpg', title: 'Keep meal details together', description: 'A personal record of foods, ingredients and meal timing.' },
    { src: '/screens/gut-1.jpg', title: 'Your diary, on your device', description: 'Organise observations for discussion, without diagnosing a condition or identifying a food trigger.' },
  ],
  'migraine-companion': [
    { src: '/screens/migraine-3.jpg', title: 'Record an attack quickly', description: 'Keep symptoms, intensity, location and context in one entry.' },
    { src: '/screens/migraine-2.jpg', title: 'Your recorded attack history', description: 'Review a summary of the attacks and intensity you have logged.' },
    { src: '/screens/migraine-1.jpg', title: 'Keep medication records distinct', description: 'Organise prescribed preventive and acute medication records.' },
  ],
};
