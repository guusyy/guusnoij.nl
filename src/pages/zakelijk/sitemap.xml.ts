import type { APIRoute } from 'astro';
import { SITE_ZAKELIJK } from '../../data/site';
import { sitemap } from '../../data/sitemap';

export const GET: APIRoute = () =>
  sitemap(SITE_ZAKELIJK, ['/', '/diensten/', '/werkwijze/', '/over/', '/contact/', '/algemene-voorwaarden/', '/privacy/']);
