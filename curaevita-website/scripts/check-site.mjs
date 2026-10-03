import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

// Validate the actual static pages that search engines and visitors receive.
const root = path.resolve('out');
const sitemap = readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const pages = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((entry) => entry[1].match(/<loc>(.*?)<\/loc>/)[1]);
const titles = new Set();
let schemas = 0;
let images = 0;
for (const page of pages) {
  const pathname = new URL(page).pathname;
  const file = path.join(root, pathname, 'index.html');
  assert.ok(existsSync(file), `Missing page: ${pathname}`);
  const html = readFileSync(file, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `Missing or duplicate title: ${pathname}`);
  titles.add(title);
  assert.equal([...html.matchAll(/<h1[\s>]/g)].length, 1, `Expected one H1: ${pathname}`);
  assert.ok(html.includes(`rel="canonical" href="${page}"`), `Incorrect canonical: ${pathname}`);
  assert.ok(/name="description" content="[^"]{40,}"/.test(html), `Missing description: ${pathname}`);
  assert.ok(!/name="robots" content="[^"]*noindex/.test(html), `Unexpected noindex: ${pathname}`);
  assert.ok(!html.replace(/<script[\s\S]*?<\/script>/g, '').includes('\u2014'), `Em dash found: ${pathname}`);
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    JSON.parse(match[1]);
    schemas++;
  }
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    assert.ok(/\balt="[^"]*"/.test(match[0]), `Missing image alt: ${pathname}`);
    assert.ok(/\bwidth="\d+"/.test(match[0]) && /\bheight="\d+"/.test(match[0]), `Unreserved image dimensions: ${pathname}`);
    images++;
  }
  for (const match of html.matchAll(/\b(?:href|src)="(\/[^"#]*)"/g)) {
    const url = new URL(match[1].replaceAll('&amp;', '&'), page);
    if (url.origin !== 'https://curaevita.com') continue;
    const target = path.join(root, decodeURIComponent(url.pathname));
    assert.ok(existsSync(target) || existsSync(path.join(target, 'index.html')), `Broken local link/asset ${match[1]} on ${pathname}`);
  }
}
for (const [slug, packageName] of [
  ['glp1-companion', 'com.curaevita.glp1companion'],
  ['menopause-companion', 'com.curaevita.menopausecompanion'],
  ['adhd-companion', 'com.curaevita.adhdcompanion'],
  ['gut-companion', 'com.curaevita.gutcompanion'],
  ['migraine-companion', 'com.curaevita.migrainecompanion'],
]) {
  const html = readFileSync(path.join(root, 'apps', slug, 'index.html'), 'utf8');
  const data = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((match) => JSON.parse(match[1]));
  const app = data.find((item) => item['@type'] === 'SoftwareApplication');
  assert.equal(new URL(app.installUrl).searchParams.get('id'), packageName);
  assert.equal(app.offers.price, '0.99');
  assert.equal(app.offers.priceCurrency, 'GBP');
  assert.equal(app.offers.priceSpecification.billingDuration, 'P1M');
  assert.ok(html.includes('Install from Google Play') && html.includes('seven-day') && html.includes('£0.99'));
  assert.ok(!/coming soon|internal testing|not yet publicly|planned release/i.test(html), `Stale launch copy: ${slug}`);
  assert.ok(!app.aggregateRating && !app.review, 'Do not invent reviews to qualify for rich results');
}
for (const route of ['', 'apps', 'about', 'press']) {
  const html = readFileSync(path.join(root, route, 'index.html'), 'utf8');
  assert.ok(!/coming soon|internal testing|not yet publicly|launch updates/i.test(html), `Stale launch copy: ${route}`);
}
assert.ok(readFileSync(path.join(root, 'robots.txt'), 'utf8').includes('https://curaevita.com/sitemap.xml'));
assert.ok(existsSync(path.join(root, 'google1a44c224d2456e8e.html')), 'Google verification file lost');
console.log(`PASS: ${pages.length} pages, unique titles/canonicals, ${schemas} structured-data blocks, ${images} image uses, internal links/assets, release wording and Google verification.`);
const resourcesHtml = readFileSync(path.join(root, 'resources', 'index.html'), 'utf8');
for (const id of ['glp1', 'menopause', 'adhd', 'gut', 'migraine']) {
  const slug = `${id}-companion`;
  const diary = readFileSync(path.join(root, 'downloads', `${id}-diary.pdf`));
  assert.equal(diary.subarray(0, 4).toString(), '%PDF', `Invalid PDF: ${id}`);
  assert.ok(resourcesHtml.includes(`/downloads/${id}-diary.pdf`), `Missing free resource: ${id}`);
  const appHtml = readFileSync(path.join(root, 'apps', slug, 'index.html'), 'utf8');
  assert.ok(appHtml.includes(`/videos/${slug}.mp4`) && appHtml.includes('preload="none"'), `Missing or eager-loading demo: ${id}`);
  assert.ok(appHtml.includes('screenshot presentation') && appHtml.includes('example records'), `Missing demo disclosure: ${id}`);
  assert.ok(!appHtml.includes('autoPlay'), `Demo should not autoplay: ${id}`);
  assert.ok(existsSync(path.join(root, 'videos', `${slug}-poster.webp`)));
}
console.log('PASS: five valid free PDF downloads, five lazy-loading demos, posters and honest preview disclosures.');

// Keep the approved palette and immediate visibility from drifting in future edits.
const baseCss = readFileSync('app/globals.css', 'utf8');
const themeCss = readFileSync('app/refined.css', 'utf8');
const header = readFileSync('app/components/site-shell.tsx', 'utf8');
const tokens = Object.fromEntries([...baseCss.matchAll(/(--[\w-]+):\s*(#[a-f\d]{6});/gi)].map((match) => [match[1], match[2]]));
const declarations = (css, selector) => {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return css.match(new RegExp(`${escaped}\\s*\\{([^}]+)\\}`))?.[1] ?? '';
};
for (const selector of ['.product-stage', '.feature-preview', '.pricing-section', '.updates-section', '.detail-preview', '.gallery-image', '.directory-visual']) {
  assert.ok(declarations(themeCss, selector).includes('background: var(--panel-mint)'), `Inconsistent panel colour: ${selector}`);
}
assert.ok(declarations(themeCss, '.menopause-spotlight').includes('var(--panel-rose)'));
assert.ok(declarations(themeCss, '.detail-preview-menopause').includes('var(--panel-rose)'));
assert.ok(header.includes('className="button button-primary nav-cta"'), 'Header download styling diverged');
assert.ok(baseCss.includes('.site-nav, .hero-copy > * { animation: none; }'), 'Essential first-view content must not fade in');
assert.ok(themeCss.includes('animation: preview-settle 220ms'), 'Preview entrance should remain brief');
assert.ok(themeCss.includes('@media (prefers-reduced-motion: reduce)'), 'Reduced-motion support lost');
const luminance = (hex) => {
  const rgb = hex.slice(1).match(/../g).map((value) => parseInt(value, 16) / 255).map((value) => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
  return .2126 * rgb[0] + .7152 * rgb[1] + .0722 * rgb[2];
};
const contrast = (foreground, background) => {
  const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (values[0] + .05) / (values[1] + .05);
};
for (const token of ['--teal-deep', '--action-hover', '--plum', '--plum-hover']) {
  assert.ok(contrast('#ffffff', tokens[token]) >= 4.5, `Insufficient button contrast: ${token}`);
}
const badgeBackgrounds = new Set();
for (const status of ['published', 'review', 'testing']) {
  const rule = declarations(baseCss, `.status-pill.${status}`);
  const background = rule.match(/background: (#[a-f\d]{6})/i)?.[1];
  const foreground = rule.match(/color: (#[a-f\d]{6})/i)?.[1];
  assert.ok(background && foreground && contrast(foreground, background) >= 4.5, `Insufficient badge contrast: ${status}`);
  badgeBackgrounds.add(background);
}
assert.equal(badgeBackgrounds.size, 3, 'Live, review and testing must have distinct badge colours');
assert.ok(declarations(baseCss, '.status-pill.testing').includes('background: #edf0f3'), 'Testing badges must stay neutral');
console.log('PASS: shared mint panels, retained Menopause accents, matching download buttons, distinct status badges, text contrast and first-view motion rules.');
