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
