export type CompanionFeature = {
  title: string;
  text: string;
};

export type CompanionFaq = {
  question: string;
  answer: string;
};

export type Companion = {
  slug: string;
  name: string;
  image: string;
  iconAlt: string;
  status: string;
  phase: 'testing' | 'next' | 'development';
  accent: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: string;
  intro: string;
  audience: string;
  packageName: string;
  features: CompanionFeature[];
  reportItems: string[];
  privacyItems: string[];
  faqs: CompanionFaq[];
  subscription?: {
    price: string;
    trial: string;
  };
};

export const companions: Companion[] = [
  {
    slug: 'glp1-companion',
    name: 'GLP-1 Companion',
    image: '/apps/glp1.webp',
    iconAlt: 'Green GLP-1 Companion app icon from the CuraeVita family',
    status: 'Closed testing',
    phase: 'testing',
    accent: '#8ee84b',
    description: 'Dose, side-effect, weight and progress tracking with reports made for appointments.',
    seoTitle: 'GLP-1 Medication Tracker for Android',
    seoDescription: 'Track prescribed GLP-1 doses, injection sites, weight, measurements, side effects and progress in a private Android app with PDF reports.',
    eyebrow: 'Private GLP-1 tracking for Android',
    headline: 'Keep doses, progress and side effects in one clear health record.',
    intro: 'GLP-1 Companion is a personal tracker for people prescribed semaglutide or tirzepatide. It organises what you record between appointments without suggesting a dose or replacing advice from your prescriber.',
    audience: 'Designed for adults who have already been prescribed a GLP-1 medicine and want a consistent way to record their own injections, measurements, symptoms and questions for appointments.',
    packageName: 'com.curaevita.glp1companion',
    features: [
      { title: 'Dose and injection log', text: 'Record the medicine, prescribed dose, date, injection site and an optional note, with a next-dose countdown and site-rotation suggestion.' },
      { title: 'Weight and measurements', text: 'Follow weight, optional body-fat percentage, BMI, waist and hip measurements with unit controls and 30-day, 90-day or full-history views.' },
      { title: 'Side effects and supply', text: 'Attach symptom and severity observations to an injection, keep a simple stock count and see a low-supply reminder without receiving medical interpretation.' },
      { title: 'Adherence and reminders', text: 'Use optional local reminders, a weekly streak and a 12-week consistency view to help keep your own record complete.' },
      { title: 'Private progress photos', text: 'Choose optional photos for an on-device comparison gallery. Photos are excluded from CuraeVita backups and PDF reports by design.' },
      { title: 'Optional health-platform write', text: 'After permission is granted, new weight and body-fat entries can be written to Health Connect. The app does not read your wider health record.' },
    ],
    reportItems: [
      'Summary tiles for the selected reporting period',
      'Weight, body-fat and waist trend charts where enabled',
      'Dose and titration history alongside recorded measurements',
      'Injection, side-effect and weigh-in logs',
      'A choice of 30 days, 90 days or all recorded history',
    ],
    privacyItems: [
      'Health entries are stored locally on the device.',
      'Optional photos remain on the device and are excluded from app exports.',
      'Health Connect is write-only and used only after explicit permission.',
      'Google Play and RevenueCat process purchase status, not medication or symptom entries.',
    ],
    faqs: [
      { question: 'Does GLP-1 Companion recommend a dose?', answer: 'No. Dose choices exist only to make logging convenient. Record only what you have been prescribed and follow your prescriber’s instructions.' },
      { question: 'Can I share my progress at an appointment?', answer: 'Yes. You can create a PDF covering 30 days, 90 days or your full recorded history and decide when and how to share it.' },
      { question: 'Are progress photos included in reports?', answer: 'No. Optional progress photos stay in the local gallery and are excluded from CuraeVita backups and reports.' },
      { question: 'Does the app read everything in Health Connect?', answer: 'No. If you enable the feature, the app can write new weight and body-fat entries; it does not read your wider Health Connect record.' },
    ],
    subscription: {
      price: '£0.99 per month',
      trial: 'Eligible new Google Play subscribers are shown a seven-day free trial before they confirm. Google Play displays the binding price, eligibility and renewal terms.',
    },
  },
  {
    slug: 'menopause-companion',
    name: 'Menopause Companion',
    image: '/apps/menopause.webp',
    iconAlt: 'Coral Menopause Companion app icon from the CuraeVita family',
    status: 'Closed testing',
    phase: 'testing',
    accent: '#ff896f',
    description: 'Symptoms, HRT, cycles and trends brought together in one calm daily check-in.',
    seoTitle: 'Menopause and HRT Symptom Tracker',
    seoDescription: 'Track perimenopause and menopause symptoms, HRT doses, spotting, bloodwork and optional weight in a private Android app with PDF reports.',
    eyebrow: 'Menopause and HRT tracking for Android',
    headline: 'Bring symptoms, HRT and appointment notes into one calm timeline.',
    intro: 'Menopause Companion helps you record your own perimenopause, menopause or post-menopause experience. It brings symptom check-ins, HRT history and reports together without trying to predict, diagnose or direct treatment.',
    audience: 'Designed for adults who want to organise symptoms, HRT records, spotting, bloodwork and optional weight in preparation for their own reviews and appointments.',
    packageName: 'com.curaevita.menopausecompanion',
    features: [
      { title: 'Flexible symptom check-ins', text: 'Log only what stood out, including hot flashes, night sweats, sleep, mood, brain fog, joint aches, vaginal dryness, libido change, anxiety and irritability.' },
      { title: 'HRT dose history', text: 'Record HRT type, dose, application site, side-effect observations and notes, with a history that makes changes easier to revisit.' },
      { title: 'Bloodwork as reported', text: 'Store a result and reference range exactly as your clinic reports it. The app does not interpret the result or apply a universal range.' },
      { title: 'Spotting and period log', text: 'Keep a lightweight timeline of period or spotting entries during an irregular transition. It is a record, not a cycle predictor.' },
      { title: 'Optional weight tracking', text: 'Weight tracking is off by default and can be enabled only if it is useful to you.' },
      { title: 'Local reminders and lock', text: 'Choose optional symptom and HRT reminders and protect screen access with a device-supported biometric or passcode gate.' },
    ],
    reportItems: [
      'Symptom frequency and recorded trends',
      'Hot-flash frequency for the selected period',
      'HRT dose and change history',
      'Bloodwork recorded exactly as entered',
      'Period and spotting entries for 30 days, 90 days or all history',
    ],
    privacyItems: [
      'Symptom, HRT, bloodwork and spotting entries are stored locally.',
      'Android backup is disabled for the app’s sensitive local data.',
      'The optional app lock controls screen access but is not described as encryption.',
      'Google Play and RevenueCat process subscription status, not health entries.',
    ],
    faqs: [
      { question: 'Does Menopause Companion predict cycles?', answer: 'No. The period and spotting feature is a lightweight record intended to help you revisit irregularity over time.' },
      { question: 'Does the app interpret hormone blood tests?', answer: 'No. Results and reference ranges are stored as entered because laboratories can use different units, assays and ranges.' },
      { question: 'Is weight tracking required?', answer: 'No. It is disabled by default and can be turned on only if you want to include it in your own record.' },
      { question: 'Can I create a report for an appointment?', answer: 'Yes. You can create a PDF for 30 days, 90 days or all recorded history and choose whether to share it.' },
    ],
    subscription: {
      price: '£0.99 per month',
      trial: 'Eligible new Google Play subscribers are shown a seven-day free trial before they confirm. Google Play displays the binding price, eligibility and renewal terms.',
    },
  },
  {
    slug: 'adhd-companion',
    name: 'ADHD Companion',
    image: '/apps/adhd.webp',
    iconAlt: 'Aqua ADHD Companion app icon from the CuraeVita family',
    status: 'Coming next',
    phase: 'next',
    accent: '#4ce9c2',
    description: 'Medication, focus, routine and wear-off tracking designed for quick daily use.',
    seoTitle: 'ADHD Medication and Focus Tracker',
    seoDescription: 'Record prescribed ADHD medication timing, focus, mood, energy and side effects, then review patterns and create appointment-ready PDF reports.',
    eyebrow: 'ADHD medication and focus tracking',
    headline: 'See your own medication timing and daily check-ins more clearly.',
    intro: 'ADHD Companion is being prepared as a quick medication and daily-pattern tracker. It records what you enter without estimating medication levels, calculating doses or replacing instructions from your prescriber.',
    audience: 'Designed for adults taking prescribed ADHD medication who want a low-friction way to record dose timing, focus, mood, energy and side-effect observations.',
    packageName: 'com.curaevita.adhdcompanion',
    features: [
      { title: 'Medication list', text: 'Keep an active list of prescribed stimulant or non-stimulant medicines and the dose you have been instructed to take.' },
      { title: 'Fast daily check-ins', text: 'Record whether a dose was taken plus focus, mood, energy, side-effect observations, time and an optional note.' },
      { title: 'Wear-off pattern view', text: 'Plot same-day energy check-ins against recorded dose timing to help you revisit possible dips without claiming a pharmacological calculation.' },
      { title: 'Optional reminder', text: 'Set a local daily prompt for a check-in without creating a CuraeVita account.' },
      { title: 'App lock', text: 'Use a device-supported biometric or passcode gate to control screen access.' },
      { title: 'Backup and restore', text: 'Export a CuraeVita backup file you control and restore it later with validation.' },
    ],
    reportItems: [
      'Recorded medication and dose timing',
      'Focus, mood and energy check-in trends',
      'Side-effect observations and optional notes',
      'A 30-day, 90-day or full-history reporting period',
    ],
    privacyItems: [
      'Medication and check-in entries are stored locally.',
      'Android backup is disabled for the app’s local health data.',
      'The app does not calculate a dose or medication concentration.',
      'Any future purchase service will receive purchase status, not health entries.',
    ],
    faqs: [
      { question: 'Does ADHD Companion tell me when medication will wear off?', answer: 'No. It plots your own energy check-ins against the dose time you recorded so you can revisit your observations.' },
      { question: 'Does it recommend medication or dosage changes?', answer: 'No. It is a personal record only. Follow your prescriber’s instructions and discuss any concerns with them.' },
      { question: 'Can I export my entries?', answer: 'The planned release includes a PDF summary for 30 days, 90 days or your full recorded history.' },
    ],
  },
  {
    slug: 'gut-companion',
    name: 'Gut Companion',
    image: '/apps/gut.webp',
    iconAlt: 'Green Gut Companion app icon from the CuraeVita family',
    status: 'In development',
    phase: 'development',
    accent: '#6ae28f',
    description: 'Meals, digestive symptoms and possible patterns organised into a timeline you can revisit.',
    seoTitle: 'Digestive Symptom and Food Diary',
    seoDescription: 'Record digestive symptoms, Bristol stool scale entries, meals and potential FODMAP groups in a private diary with PDF pattern reports.',
    eyebrow: 'Digestive symptom and food diary',
    headline: 'Put meals and digestive check-ins on one private timeline.',
    intro: 'Gut Companion is in development as a digestive symptom and food diary. It helps organise timing and observations without diagnosing a condition, proving a trigger or prescribing an elimination diet.',
    audience: 'Designed for adults who want a structured personal record of digestive check-ins and meals to revisit themselves or discuss with a clinician or dietitian.',
    packageName: 'com.curaevita.gutcompanion',
    features: [
      { title: 'Digestive check-ins', text: 'Record Bristol stool scale type, pain, bloating, urgency, mood, stress, other symptoms and an optional note.' },
      { title: 'Meal diary', text: 'Log a meal name, foods or ingredients and potential FODMAP groups without labelling any food as a confirmed cause.' },
      { title: 'Timing-based report', text: 'View meals alongside check-ins recorded within a 48-hour association window. The report presents timing, not causation.' },
      { title: 'Optional reminders', text: 'Choose a local prompt for a gut check-in or meal entry.' },
      { title: 'Private screen access', text: 'Use a device-supported biometric or passcode gate when available.' },
      { title: 'Backup you control', text: 'Create and restore a validated local backup file without a CuraeVita account.' },
    ],
    reportItems: [
      'Bristol stool scale and digestive check-in history',
      'Pain, bloating, urgency and other recorded symptoms',
      'Mood and stress observations where entered',
      'Meal history shown alongside later check-ins within a 48-hour window',
      'A choice of 30 days, 90 days or all recorded history',
    ],
    privacyItems: [
      'Symptoms and meal entries are stored locally.',
      'No CuraeVita account or advertising profile is required.',
      'Android backup is disabled for the app’s local health data.',
      'The app reports associations in timing and does not claim that a food caused a symptom.',
    ],
    faqs: [
      { question: 'Does Gut Companion diagnose IBS or food intolerance?', answer: 'No. It is a personal diary and reporting tool, not a diagnostic test.' },
      { question: 'Does it tell me what foods to remove?', answer: 'No. It records meals and symptoms without prescribing an elimination diet. Discuss dietary changes with an appropriate professional.' },
      { question: 'What does the 48-hour window mean?', answer: 'The report places meals next to check-ins recorded within the following 48 hours. It is a way to review timing, not evidence of cause.' },
    ],
  },
  {
    slug: 'migraine-companion',
    name: 'Migraine Companion',
    image: '/apps/migraine.webp',
    iconAlt: 'Purple Migraine Companion app icon from the CuraeVita family',
    status: 'In development',
    phase: 'development',
    accent: '#9486ff',
    description: 'Attacks, medication response, possible triggers and optional weather context in one timeline.',
    seoTitle: 'Migraine Diary and Trigger Tracker',
    seoDescription: 'Log migraine attacks, symptoms, phases, possible triggers and medication response, with optional weather context and private PDF reports.',
    eyebrow: 'Migraine diary and medication record',
    headline: 'Capture attacks, treatment response and context while details are fresh.',
    intro: 'Migraine Companion is in development as a private attack and medication diary. It records your observations and optional weather context without diagnosing migraine or proving that a factor caused an attack.',
    audience: 'Designed for adults who want to organise attack details, preventive and acute medication records, response observations and possible context for appointments.',
    packageName: 'com.curaevita.migrainecompanion',
    features: [
      { title: 'Attack capture', text: 'Record intensity, pain location, symptoms, phase, possible triggers, stress, light exposure and optional food or free-text notes.' },
      { title: 'Medication categories', text: 'Keep preventive and acute medicines separate and record what you took according to your own treatment plan.' },
      { title: 'Response observations', text: 'For an acute dose, record time-to-relief and your own relief rating without receiving treatment advice.' },
      { title: 'Optional weather context', text: 'After explicit consent, add current barometric pressure and temperature to an attack entry to review possible correlations.' },
      { title: 'Preventive reminder', text: 'Choose an optional local notification for a preventive medication record.' },
      { title: 'Private backup and lock', text: 'Use a device-supported screen lock and export a backup file you control.' },
    ],
    reportItems: [
      'Attack history, intensity, phase and recorded symptoms',
      'Possible triggers and contextual observations',
      'Preventive and acute medication records',
      'Recorded response to acute medication',
      'A 30-day, 90-day or full-history reporting period',
    ],
    privacyItems: [
      'Attack and medication entries are stored locally.',
      'Weather lookup is optional and requires explicit consent.',
      'Approximate location is sent to a third-party weather service only for the requested lookup.',
      'CuraeVita does not operate a server that stores your migraine diary.',
    ],
    faqs: [
      { question: 'Does Migraine Companion diagnose migraine?', answer: 'No. It is a diary and reporting tool. Seek professional assessment for diagnosis or treatment.' },
      { question: 'Does weather information prove a trigger?', answer: 'No. Weather is optional context that may help you revisit possible patterns. It does not prove causation.' },
      { question: 'When should I seek urgent help?', answer: 'The app cannot monitor emergencies. Seek urgent medical help for new neurological symptoms, a sudden severe headache or any situation that concerns you.' },
    ],
  },
];

export function getCompanion(slug: string) {
  return companions.find((companion) => companion.slug === slug);
}
