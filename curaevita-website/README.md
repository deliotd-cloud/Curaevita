# CuraeVita website

The public website for the CuraeVita Health Apps family. It uses the supplied CuraeVita family mark and the actual app icons for GLP-1 Companion, Menopause Companion, ADHD Companion, Gut Companion and Migraine Companion.

## Content structure

- `app/lib/apps.ts` is the shared source for app names, status, descriptions, features, privacy statements, reports, FAQs and subscription copy.
- `app/apps/[slug]/page.tsx` turns that source into the five static app pages.
- About, Support, editorial standards, privacy and terms pages provide the site trust layer.
- Metadata, canonical links, social cards, JSON-LD, `robots.txt`, `sitemap.xml` and the web manifest are generated during the static build.
- Optimised WebP images are used on pages. The original supplied PNG assets remain available as masters.

GLP-1 Companion and Menopause Companion are currently described as £0.99 per month in the UK. Eligible new Google Play subscribers may be shown a seven-day trial. Google Play is the binding source for price, eligibility and renewal information.

## Quality checks

From this folder, run:

```text
npm ci
npm audit
npm run lint
npm run build:github
```

The production build exports the complete site to `out`. Do not publish a change if the build or linter fails. Product statements should be checked against the relevant app implementation before editing `app/lib/apps.ts`.

## GitHub Pages

The workflow at `.github/workflows/deploy-curaevita-website.yml` builds and deploys the static website whenever this folder changes on `main`.

The custom domain is `curaevita.com`. GitHub Pages requires these DNS records:

```text
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   deliotd-cloud.github.io
```

After DNS resolves to GitHub Pages, enable HTTPS in the repository Pages settings. Then verify the domain in Google Search Console and submit `https://curaevita.com/sitemap.xml`.

## Local preview

Run `npm install`, then `npm run dev`. The local address is normally `http://localhost:3000/`.
