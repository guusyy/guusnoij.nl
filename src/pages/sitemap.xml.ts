import type { APIRoute } from 'astro';
import { SITE_PERSOONLIJK } from '../data/site';
import { projecten } from '../data/projecten';
import { sitemap } from '../data/sitemap';

export const GET: APIRoute = () =>
  sitemap(SITE_PERSOONLIJK, ['/', '/interests/bonsai/', ...projecten.map((p) => `/projects/${p.slug}/`)]);
