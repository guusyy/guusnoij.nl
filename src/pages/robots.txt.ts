import type { APIRoute } from 'astro';
import { SITE_PERSOONLIJK } from '../data/site';

// Geen Disallow: zolang de site noindex is, moeten zoekmachines die noindex juist kunnen lezen.
export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITE_PERSOONLIJK}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
