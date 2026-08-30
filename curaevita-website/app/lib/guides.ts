export type GuideSection = {
  title: string;
  paragraphs: string[];
  points?: string[];
};

export type GuideSource = {
  name: string;
  url: string;
  note: string;
};

export type Guide = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  eyebrow: string;
  readingTime: string;
  reviewed: string;
  sections: GuideSection[];
  sources: GuideSource[];
  relatedApps: string[];
};

export const guides: Guide[] = [
  {
    slug: 'symptom-diary-for-an-appointment',
    title: 'How to prepare a symptom diary for a healthcare appointment',
    seoTitle: 'How to Prepare a Symptom Diary for an Appointment',
    description: 'A practical, non-diagnostic guide to recording symptom timing, changes, medicines and questions before a healthcare appointment.',
    excerpt: 'Turn scattered day-to-day observations into a short, accurate record you can review before an appointment.',
    eyebrow: 'Appointment preparation guide',
    readingTime: '6 minute read',
    reviewed: '30 August 2026',
    sections: [
      {
        title: 'Start with the purpose of the diary',
        paragraphs: [
          'A symptom diary is most useful when it helps you remember what happened and explain your own experience. It is not a diagnosis and it does not need to prove that one event caused another.',
          'Choose a realistic period to review. A short, consistently recorded window is often easier to discuss than months of incomplete notes.',
        ],
      },
      {
        title: 'Record observations in a repeatable way',
        paragraphs: [
          'Use the same small set of fields each time so entries are easier to compare. Write what you noticed, not what you think the diagnosis must be.',
        ],
        points: [
          'Date and approximate time',
          'What you noticed and where it occurred',
          'Severity in your own consistent scale',
          'How long it lasted',
          'What you were doing beforehand',
          'Anything that seemed to make it better or worse',
          'A short note about the effect on sleep, work or normal activities',
        ],
      },
      {
        title: 'Keep medicines factual',
        paragraphs: [
          'List medicines exactly as prescribed, including the name, dose and timing you were instructed to use. Record what you actually took, but do not change a medicine or dose because of a pattern in a tracking app.',
          'The NHS recommends taking a list of medicines and writing down symptom details before an appointment. Include vitamins and supplements if they are part of the list you plan to discuss.',
        ],
      },
      {
        title: 'Prepare a short appointment summary',
        paragraphs: [
          'Before the appointment, review the diary for obvious mistakes and select the two or three questions that matter most to you. A useful summary can be much shorter than the complete diary.',
        ],
        points: [
          'The period covered by the record',
          'The most frequent or disruptive observations',
          'Any clear changes you noticed over time',
          'Your current medicine list',
          'Two or three questions you want to ask',
        ],
      },
      {
        title: 'Share only what you choose',
        paragraphs: [
          'Read an exported report before sharing it. Check the recipient, remove anything you do not want to include and remember that copies saved to email, cloud storage or another device are then controlled by those services.',
          'CuraeVita reports are personal records. A healthcare professional decides what information is clinically relevant and how it should be interpreted.',
        ],
      },
    ],
    sources: [
      {
        name: 'NHS: What to ask your doctor or other healthcare professional',
        url: 'https://www.nhs.uk/nhs-services/gps/what-to-ask-your-doctor/',
        note: 'NHS appointment-preparation advice, including medicine lists, symptom details and priority questions.',
      },
      {
        name: 'University Hospitals Birmingham: Before your appointment',
        url: 'https://www.uhb.nhs.uk/patients/outpatients/before-your-appointment/',
        note: 'NHS hospital guidance on preparing medical history and bringing an accurate medicine list.',
      },
    ],
    relatedApps: ['glp1-companion', 'menopause-companion', 'gut-companion'],
  },
  {
    slug: 'medication-tracking-report',
    title: 'What to include in a medication and symptom tracking report',
    seoTitle: 'What to Include in a Medication Tracking Report',
    description: 'A clear checklist for turning medication times, symptom observations and questions into an appointment-ready personal report.',
    excerpt: 'Build a concise report that separates what you recorded from questions that need professional interpretation.',
    eyebrow: 'Personal health record guide',
    readingTime: '5 minute read',
    reviewed: '30 August 2026',
    sections: [
      {
        title: 'State what the report covers',
        paragraphs: [
          'Put the reporting period near the top. This helps the reader understand whether a count represents one week, one month or a longer period.',
          'If the record is incomplete, say so. A gap in tracking should not be presented as proof that nothing happened.',
        ],
      },
      {
        title: 'Use the medicine name and instructions you were given',
        paragraphs: [
          'For each medicine, record the name, prescribed dose, form and intended timing. Then keep the event log separate so it shows what you actually recorded taking and when.',
          'Do not use a report to calculate a new dose, estimate medicine concentration or recommend a treatment change.',
        ],
        points: [
          'Medicine name and form',
          'Prescribed dose as written on your instructions',
          'Usual timing or schedule',
          'Recorded doses and missed entries',
          'Relevant notes in your own words',
        ],
      },
      {
        title: 'Summarise observations without claiming a cause',
        paragraphs: [
          'A report can show that two events occurred near each other. That does not establish that one caused the other. Use neutral labels such as “recorded after” or “observed during the same period”.',
          'Keep severity scales consistent and include the scale definition when possible. A value of seven is only useful if the reader knows what the scale means.',
        ],
      },
      {
        title: 'Make the first page useful',
        paragraphs: [
          'Put the essentials first: date range, current medicine list, key counts or trends and the questions you want to discuss. Keep detailed entries after the summary so they are available without overwhelming the opening page.',
        ],
        points: [
          'Reporting period and number of recorded days',
          'Current medicine list',
          'A small number of clearly labelled trends',
          'Important dates or changes',
          'Questions for the appointment',
        ],
      },
      {
        title: 'Check the report before using it',
        paragraphs: [
          'Look for duplicated entries, incorrect dates and old medicines that should be marked inactive. Make sure personal notes are suitable for the person you intend to show.',
          'A tracking report supports a conversation. It is not part of the official clinical record unless the healthcare service decides to add information from it.',
        ],
      },
    ],
    sources: [
      {
        name: 'NHS: What to ask your doctor or other healthcare professional',
        url: 'https://www.nhs.uk/nhs-services/gps/what-to-ask-your-doctor/',
        note: 'NHS advice on medicine lists, symptom details and preparing questions.',
      },
      {
        name: 'University Hospitals Birmingham: Before your appointment',
        url: 'https://www.uhb.nhs.uk/patients/outpatients/before-your-appointment/',
        note: 'NHS hospital guidance on bringing medicine information and preparing medical history.',
      },
    ],
    relatedApps: ['adhd-companion', 'menopause-companion', 'migraine-companion'],
  },
  {
    slug: 'protect-health-notes-on-android',
    title: 'How to keep private health notes safer on Android',
    seoTitle: 'How to Keep Private Health Notes Safer on Android',
    description: 'Practical Android privacy steps for device locks, app access, exported reports, software updates and sensitive notifications.',
    excerpt: 'Use simple device and sharing controls to reduce who can see personal health notes and exported reports.',
    eyebrow: 'Android privacy guide',
    readingTime: '6 minute read',
    reviewed: '30 August 2026',
    sections: [
      {
        title: 'Protect the device first',
        paragraphs: [
          'An in-app lock is an extra access gate, but the phone screen lock remains the first line of protection. Use a strong PIN or password and biometrics where they are appropriate for you.',
          'Google places device lock, app security, system updates and privacy permissions together in Android’s Security and privacy settings. Review warnings shown there rather than assuming every protection is active.',
        ],
      },
      {
        title: 'Keep Android and apps updated',
        paragraphs: [
          'Install operating-system, Google Play system and app updates when they are available for your supported device. Updates commonly include security and reliability fixes.',
          'A very old or unsupported device may no longer receive the protections provided to current versions.',
        ],
      },
      {
        title: 'Review lock-screen information',
        paragraphs: [
          'Notification text can reveal sensitive details while the phone is locked. Android allows you to control which notification content appears on the lock screen.',
          'CuraeVita reminders are designed to use restrained wording, but you should still choose notification settings that fit who can see your device.',
        ],
      },
      {
        title: 'Treat exported reports as separate copies',
        paragraphs: [
          'Once you export a PDF or backup, it exists outside the app. Check where it is saved, who can open it and whether a copy remains in email, downloads, cloud storage or a messaging service.',
        ],
        points: [
          'Verify the recipient before sharing',
          'Use a trusted sharing method',
          'Remove old exported copies you no longer need',
          'Avoid leaving reports in a shared downloads folder',
          'Remember that deleting an app entry does not delete copies already exported',
        ],
      },
      {
        title: 'Use optional protections with clear expectations',
        paragraphs: [
          'Features such as biometric access, Android Private Space and theft protection may provide additional layers on supported devices. Availability differs by Android version and manufacturer.',
          'No single setting removes every risk. The most useful approach is to combine a device lock, current software, careful sharing and regular review of saved copies.',
        ],
      },
    ],
    sources: [
      {
        name: 'Android Help: Security and privacy settings',
        url: 'https://support.google.com/android/answer/13985942',
        note: 'Google’s overview of device lock, app security, updates and privacy settings on Android.',
      },
      {
        name: 'Android Help: Protect personal data against theft',
        url: 'https://support.google.com/android/answer/15146908',
        note: 'Google’s guidance on screen locks, strong PINs, biometrics, app protections and notification privacy.',
      },
    ],
    relatedApps: ['glp1-companion', 'adhd-companion', 'migraine-companion'],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
