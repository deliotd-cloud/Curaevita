// Run after deployment. Submit the real public sitemap, including new resources.
// The IndexNow key is a public ownership token, not an account credential.
const response = await fetch(`https://curaevita.com/sitemap.xml?deployed=${Date.now()}`, {cache: 'no-store'});
if (!response.ok) throw new Error(`Sitemap HTTP ${response.status}`);
const xml = await response.text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1].replaceAll('&amp;', '&'));
if (!urlList.length || urlList.some(url => new URL(url).origin !== 'https://curaevita.com')) throw new Error('Unexpected sitemap URLs');
const result = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST', headers: {'Content-Type':'application/json; charset=utf-8'},
  body: JSON.stringify({host:'curaevita.com',key:'6c82c7992f5b4df0a5a57b7a55d19f48',keyLocation:'https://curaevita.com/6c82c7992f5b4df0a5a57b7a55d19f48.txt',urlList}),
});
if (!result.ok) throw new Error(`IndexNow HTTP ${result.status}: ${await result.text()}`);
console.log(`IndexNow accepted ${urlList.length} public URLs (HTTP ${result.status}). Indexing is not guaranteed.`);
