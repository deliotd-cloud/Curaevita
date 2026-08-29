# CuraeVita website

The public CuraeVita family website. It uses the supplied CuraeVita master mark and the actual icons for GLP-1 Companion, Menopause Companion, ADHD Companion, Gut Companion and Migraine Companion.

## GitHub Pages

The repository workflow at `.github/workflows/deploy-curaevita-website.yml` builds and deploys the static website whenever this folder changes on `master`.

Before the first deployment:

1. In the GitHub repository, open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. If using a custom domain, enter it in the GitHub Pages settings. GitHub will create or update the required domain configuration.
4. Update DNS with the records GitHub displays, then enable **Enforce HTTPS** when available.

The privacy notice is published at `/privacy/` and the subscription terms at `/terms/`.

## Local preview

Run `npm install`, then `npm run dev` from this folder.
