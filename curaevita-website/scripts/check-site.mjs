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
const glp = readFileSync(path.join(root, 'apps/glp1-companion/index.html'), 'utf8');
assert.ok(glp.includes('com.curaevita.glp1companion') && glp.includes('£0.99'), 'GLP-1 purchase path or price missing');
const menopause = readFileSync(path.join(root, 'apps/menopause-companion/index.html'), 'utf8');
assert.ok(menopause.includes('Coming soon to Google Play.'), 'Menopause must not be presented as released');
const appData = [...menopause.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((match) => JSON.parse(match[1]));
assert.ok(!appData.find((item) => item['@type'] === 'SoftwareApplication')?.offers, 'Unreleased app must not advertise a purchasable offer');
assert.ok(readFileSync(path.join(root, 'robots.txt'), 'utf8').includes('https://curaevita.com/sitemap.xml'));
assert.ok(existsSync(path.join(root, 'google1a44c224d2456e8e.html')), 'Google verification file lost');
console.log(`PASS: ${pages.length} pages, unique titles/canonicals, ${schemas} structured-data blocks, ${images} image uses, internal links/assets, release wording and Google verification.`);

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
