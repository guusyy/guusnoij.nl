import type { APIRoute } from 'astro';
import { SITE_ZAKELIJK } from '../../data/site';

// Geserveerd als zakelijk.guusnoij.nl/robots.txt (de Worker zet /zakelijk ervoor).
export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITE_ZAKELIJK}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
