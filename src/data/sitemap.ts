// Bouwt een eenvoudige sitemap.xml uit een lijst paden.
export function sitemap(basis: string, paden: string[]) {
  const vandaag = new Date().toISOString().slice(0, 10);
  const urls = paden.map((p) => `  <url><loc>${basis}${p}</loc><lastmod>${vandaag}</lastmod></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
