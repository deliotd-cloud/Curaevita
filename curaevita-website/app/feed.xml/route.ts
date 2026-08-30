import { guides } from '../lib/guides';

export const dynamic = 'force-static';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const items = guides.map((guide) => {
    const url = `https://curaevita.com/guides/${guide.slug}/`;
    return `<item>
      <title>${escapeXml(guide.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(guide.description)}</description>
      <pubDate>Sun, 30 Aug 2026 00:00:00 GMT</pubDate>
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>CuraeVita Health Tracking Guides</title>
    <link>https://curaevita.com/guides/</link>
    <description>Practical, non-diagnostic guidance for personal health records, appointments and Android privacy.</description>
    <language>en-gb</language>
    <lastBuildDate>Sun, 30 Aug 2026 00:00:00 GMT</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
