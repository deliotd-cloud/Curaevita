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
  publishedDate: string;
  modifiedDate: string;
  sections: GuideSection[];
  sources: GuideSource[];
  relatedApps: string[];
};

export const guides: Guide[] = [
  {
    slug: 'glp1-injection-log-what-to-record',
    title: 'GLP-1 injection log: what to record each week',
    seoTitle: 'GLP-1 Injection Log: What to Record Each Week',
    description: 'A practical checklist for recording prescribed GLP-1 injections, dose details, injection sites, observations and questions without calculating treatment advice.',
    excerpt: 'Keep a consistent weekly record of the facts you may want to revisit with your prescriber.',
    eyebrow: 'GLP-1 tracking guide',
    readingTime: '6 minute read',
    reviewed: '4 September 2026',
    publishedDate: '2026-09-04',
    modifiedDate: '2026-09-04',
    sections: [
      {
        title: 'Use the instructions supplied with your medicine',
        paragraphs: [
          'A tracking log should reflect the medicine and dose you have been prescribed. It should not calculate a dose, decide when you should change it or replace the patient information leaflet and instructions from your healthcare professional.',
          'Write the medicine name and form exactly as shown on your prescription or packaging. This matters because GLP-1 medicines can have different active ingredients, brand names and licensed uses.',
        ],
      },
      {
        title: 'Record the same core facts for each injection',
        paragraphs: [
          'A short set of repeatable fields makes a weekly log easier to scan. If you are unsure what a field means, leave it blank and check the official instructions rather than guessing.',
        ],
        points: [
          'Date and approximate time',
          'Medicine name and prescribed dose',
          'Injection area or site you used',
          'Whether the entry was made at the time or added later',
          'An optional factual note about the injection',
          'Your next planned date based on the instructions you were given',
        ],
      },
      {
        title: 'Keep measurements and observations separate',
        paragraphs: [
          'Weight, measurements and side-effect observations are different kinds of information. Recording them in separate fields helps you see what was entered without implying that the injection caused a particular change.',
          'Use the same unit and a reasonably consistent time or context when that is practical for you. A tracker can organise the entries, but a healthcare professional decides whether any pattern is clinically meaningful.',
        ],
      },
      {
        title: 'Add questions while they are fresh',
        paragraphs: [
          'If something is unclear, write a short question for your next contact with your prescriber or pharmacist. Do not wait for a routine appointment if the official leaflet or your healthcare professional tells you to seek help sooner.',
        ],
        points: [
          'A question about the instructions you were given',
          'A change or observation you want to describe accurately',
          'A date you want to check against your prescription history',
          'A supply or storage question for a pharmacist',
        ],
      },
      {
        title: 'Review the log before sharing it',
        paragraphs: [
          'Check dates, medicine names and duplicate entries before exporting a report. Choose only the period that is useful for the conversation you are preparing for.',
          'An exported PDF becomes a separate copy outside the app. Check where it is saved and who can access it before sharing.',
        ],
      },
    ],
    sources: [
      {
        name: 'NHS: Semaglutide',
        url: 'https://www.nhs.uk/medicines/semaglutide/',
        note: 'NHS medicine information covering prescribed use, supplied instructions and injection guidance for semaglutide.',
      },
      {
        name: 'MHRA: GLP-1 medicines for weight loss and diabetes',
        url: 'https://www.gov.uk/government/publications/glp-1-medicines-for-weight-loss-and-diabetes-what-you-need-to-know/glp-1-medicines-for-weight-loss-and-diabetes-what-you-need-to-know',
        note: 'Current UK regulator information on prescribed GLP-1 medicines, patient leaflets and safety communications.',
      },
    ],
    relatedApps: ['glp1-companion'],
  },
  {
    slug: 'glp1-side-effect-diary',
    title: 'How to keep a GLP-1 side-effect diary',
    seoTitle: 'How to Keep a GLP-1 Side-Effect Diary',
    description: 'Record the timing, severity, duration and context of GLP-1 side-effect observations in a factual diary for your own review or a healthcare appointment.',
    excerpt: 'Separate what you noticed from what still needs professional interpretation.',
    eyebrow: 'GLP-1 symptom diary guide',
    readingTime: '7 minute read',
    reviewed: '4 September 2026',
    publishedDate: '2026-09-04',
    modifiedDate: '2026-09-04',
    sections: [
      {
        title: 'Treat the diary as a record, not a diagnosis',
        paragraphs: [
          'A side-effect diary can help you remember what happened and when. It cannot confirm that a medicine caused an observation, decide whether it is safe to continue or tell you to change a dose.',
          'Use neutral descriptions in your own words. Keep the prescribed dose and injection history visible beside observations without presenting timing as proof of cause.',
        ],
      },
      {
        title: 'Use repeatable fields',
        paragraphs: [
          'Consistent fields make entries easier to compare and summarise. You do not need to record every field every day.',
        ],
        points: [
          'Date and approximate start time',
          'What you noticed',
          'Severity using your own consistent scale',
          'How long it lasted',
          'Whether it affected sleep, work or usual activities',
          'Relevant medicine and injection date',
          'What action you took or who you contacted',
        ],
      },
      {
        title: 'Mark changes without interpreting them',
        paragraphs: [
          'If your prescriber changes a dose or medicine, record the date and the instruction you were given. Keep this separate from the symptom entry so the sequence is clear.',
          'Gaps in a diary do not prove that no symptoms occurred. Note incomplete periods rather than filling them from memory unless you clearly label a later entry.',
        ],
      },
      {
        title: 'Know when a diary is not enough',
        paragraphs: [
          'A tracking app does not monitor emergencies. Follow the patient information leaflet and advice from your healthcare professional. Contact an appropriate service promptly if a symptom is severe, worsening or concerning.',
          'The MHRA says severe, persistent stomach pain that may spread to the back requires urgent medical help because it can be a sign of acute pancreatitis. Do not wait to complete a diary or report before seeking help.',
        ],
      },
      {
        title: 'Create a concise appointment summary',
        paragraphs: [
          'Before an appointment, check the record and choose a useful date range. Put your current prescribed medicine, the most relevant observations and your questions before the detailed event list.',
          'Share only the information you choose. A healthcare professional decides how the observations should be interpreted.',
        ],
      },
    ],
    sources: [
      {
        name: 'MHRA: GLP-1 medicines for weight loss and diabetes',
        url: 'https://www.gov.uk/government/publications/glp-1-medicines-for-weight-loss-and-diabetes-what-you-need-to-know/glp-1-medicines-for-weight-loss-and-diabetes-what-you-need-to-know',
        note: 'Current UK regulator information on known side effects, urgent warning signs and continuing prescribed medicines unless advised otherwise.',
      },
      {
        name: 'MHRA: Reminder of GLP-1 side effects and potential misuse',
        url: 'https://www.gov.uk/drug-safety-update/glp-1-receptor-agonists-reminder-of-the-potential-side-effects-and-to-be-aware-of-the-potential-for-misuse',
        note: 'UK safety advice on common and serious reactions, prescribed use and speaking to a healthcare professional about concerns.',
      },
      {
        name: 'NHS: What to ask your healthcare professional',
        url: 'https://www.nhs.uk/nhs-services/gps/what-to-ask-your-doctor/',
        note: 'NHS guidance on recording symptom details, listing medicines and preparing priority questions.',
      },
    ],
    relatedApps: ['glp1-companion'],
  },
  {
    slug: 'glp1-progress-report-for-an-appointment',
    title: 'How to prepare a GLP-1 progress report for an appointment',
    seoTitle: 'GLP-1 Progress Report for an Appointment',
    description: 'A non-diagnostic checklist for preparing a concise GLP-1 medication, injection, weight and side-effect report before a healthcare appointment.',
    excerpt: 'Turn a longer personal log into a clear summary you can check before an appointment.',
    eyebrow: 'GLP-1 appointment guide',
    readingTime: '6 minute read',
    reviewed: '4 September 2026',
    publishedDate: '2026-09-04',
    modifiedDate: '2026-09-04',
    sections: [
      {
        title: 'Choose the reporting period first',
        paragraphs: [
          'Start with a date range that matches the conversation you are preparing for. A shorter complete period may be clearer than a longer record with many gaps.',
          'State whether the report contains every entry you made or only selected information. A report should not make incomplete tracking look complete.',
        ],
      },
      {
        title: 'Put the essentials on the first page',
        paragraphs: [
          'Make the opening page easy to scan. Keep detailed logs available after the summary rather than crowding the main questions.',
        ],
        points: [
          'Reporting period',
          'Current prescribed medicine and dose as instructed',
          'Recorded injection dates and any documented changes',
          'A small number of clearly labelled measurements or trends',
          'The most relevant side-effect observations',
          'Two or three questions you want to discuss',
        ],
      },
      {
        title: 'Label charts and counts carefully',
        paragraphs: [
          'Include units, dates and the number of recorded entries. A line on a chart shows the values you entered; it does not explain why they changed.',
          'If a measurement feature was optional or disabled for part of the period, say so rather than treating the missing values as zero.',
        ],
      },
      {
        title: 'Check medicine and injection history',
        paragraphs: [
          'Review medicine names, doses, dates and injection sites for obvious errors or duplicates. Keep a prescribed instruction separate from the event log of what you recorded doing.',
          'Do not use the report to calculate a future dose or recommend a treatment change. Bring questions about instructions to your prescriber or pharmacist.',
        ],
      },
      {
        title: 'Review privacy before sharing',
        paragraphs: [
          'Read the final PDF and remove information you do not want to share. Check the recipient and remember that a copy sent by email, cloud storage or messaging is then handled by that service.',
          'A personal report supports a conversation. It becomes part of an official clinical record only if the healthcare service chooses to include information from it.',
        ],
      },
    ],
    sources: [
      {
        name: 'NHS: What to ask your healthcare professional',
        url: 'https://www.nhs.uk/nhs-services/gps/what-to-ask-your-doctor/',
        note: 'NHS appointment-preparation advice covering medicine lists, symptom details and priority questions.',
      },
      {
        name: 'NHS: Semaglutide',
        url: 'https://www.nhs.uk/medicines/semaglutide/',
        note: 'NHS medicine information supporting accurate recording against the prescribed medicine and supplied instructions.',
      },
    ],
    relatedApps: ['glp1-companion'],
  },
  {
    slug: 'menopause-symptom-diary-for-an-appointment',
    title: 'How to prepare a menopause symptom diary for an appointment',
    seoTitle: 'Menopause Symptom Diary for an Appointment',
    description: 'A practical checklist for recording menopause or perimenopause symptoms, HRT history, spotting and questions before a healthcare appointment.',
    excerpt: 'Organise symptoms and HRT notes into a factual timeline while Menopause Companion prepares to launch.',
    eyebrow: 'Menopause appointment guide',
    readingTime: '6 minute read',
    reviewed: '4 September 2026',
    publishedDate: '2026-09-04',
    modifiedDate: '2026-09-04',
    sections: [
      {
        title: 'Choose the questions you want the diary to support',
        paragraphs: [
          'A diary can help you describe your own experience, remember changes and prepare questions. It does not diagnose menopause, interpret blood tests or decide whether a treatment is suitable.',
          'Choose a manageable period and record consistently enough to be useful. A short factual record can be easier to discuss than a long list created from memory.',
        ],
      },
      {
        title: 'Record symptoms in a repeatable way',
        paragraphs: [
          'Use the same fields for the observations that matter to you. You do not need to track every possible symptom.',
        ],
        points: [
          'Date and approximate time',
          'What you noticed',
          'Severity using your own consistent scale',
          'How long it lasted',
          'Effect on sleep, work or usual activities',
          'An optional note in your own words',
        ],
      },
      {
        title: 'Keep HRT details factual',
        paragraphs: [
          'If you use HRT, record the product, form, prescribed dose and timing exactly as instructed. Mark the date of a clinician-directed change without treating the diary as a recommendation to change treatment.',
          'The NHS advises discussing symptoms and available options with a doctor, nurse or pharmacist. Questions about benefits, risks or side effects need professional advice.',
        ],
      },
      {
        title: 'Add spotting, periods and test results carefully',
        paragraphs: [
          'Record spotting or period dates as events rather than using them to predict a future cycle. Store any blood-test value and reference range exactly as the laboratory reports it, including the unit.',
          'A tracking app should not apply a universal range or interpret a result. Bring the original result and your questions to an appropriate healthcare professional.',
        ],
      },
      {
        title: 'Prepare a short summary',
        paragraphs: [
          'Before the appointment, check the diary for mistakes and choose the observations that best explain what you want to discuss. Put two or three priority questions at the top.',
          'Read any exported report before sharing it and check where each copy will be stored.',
        ],
      },
    ],
    sources: [
      {
        name: 'NHS: Treatment for menopause and perimenopause',
        url: 'https://www.nhs.uk/conditions/menopause-and-perimenopause/treatment/',
        note: 'NHS overview of speaking with a doctor, nurse or pharmacist about symptoms, HRT and other treatment options.',
      },
      {
        name: 'NHS: Hormone replacement therapy',
        url: 'https://www.nhs.uk/medicines/hormone-replacement-therapy-hrt/',
        note: 'NHS information on HRT types, benefits, risks and use.',
      },
      {
        name: 'NHS: What to ask your healthcare professional',
        url: 'https://www.nhs.uk/nhs-services/gps/what-to-ask-your-doctor/',
        note: 'NHS guidance on preparing symptom details, medicines and priority questions before an appointment.',
      },
    ],
    relatedApps: ['menopause-companion'],
  },
  {
    slug: 'symptom-diary-for-an-appointment',
    title: 'How to prepare a symptom diary for a healthcare appointment',
    seoTitle: 'How to Prepare a Symptom Diary for an Appointment',
    description: 'A practical, non-diagnostic guide to recording symptom timing, changes, medicines and questions before a healthcare appointment.',
    excerpt: 'Turn scattered day-to-day observations into a short, accurate record you can review before an appointment.',
    eyebrow: 'Appointment preparation guide',
    readingTime: '6 minute read',
    reviewed: '30 August 2026',
    publishedDate: '2026-08-30',
    modifiedDate: '2026-08-30',
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
    publishedDate: '2026-08-30',
    modifiedDate: '2026-08-30',
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
    publishedDate: '2026-08-30',
    modifiedDate: '2026-08-30',
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
