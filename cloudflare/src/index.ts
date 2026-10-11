import { env } from 'cloudflare:workers';

// Eén Worker voor beide kanten van de site:
// - zakelijk.guusnoij.nl/...  -> pagina's uit /zakelijk/... (gedeelde bestanden zoals /_astro/ blijven op de root)
// - guusnoij.nl/zakelijk/... -> doorsturen naar zakelijk.guusnoij.nl
// - www.guusnoij.nl -> guusnoij.nl
const ZAKELIJK = 'zakelijk.guusnoij.nl';
// Oude adressen van de Notion-site (tot okt 2026) naar de nieuwe plek.
const OUD: Record<string, string> = {
  '/about-me': '/#about',
  '/resume': '/#experience',
  '/interests': '/#more-about-me',
  '/contact': '/#contact',
  '/bonsai': '/interests/bonsai/',
};

async function serveer(request: Request): Promise<Response> {
  const url = new URL(request.url);

  if (url.hostname === ZAKELIJK) {
    if (url.pathname.startsWith('/zakelijk')) {
      url.pathname = url.pathname.slice('/zakelijk'.length) || '/';
      return Response.redirect(url.toString(), 301);
    }
    const binnen = new URL(url);
    binnen.pathname = '/zakelijk' + url.pathname;
    const res = await env.ASSETS.fetch(new Request(binnen, request));
    // Trailing-slash-redirects van de assets wijzen naar /zakelijk/...; op dit domein zonder dat voorvoegsel.
    const naar = res.headers.get('Location');
    if (naar && res.status >= 300 && res.status < 400) {
      const doel = new URL(naar, binnen);
      if (doel.pathname.startsWith('/zakelijk')) {
        doel.hostname = ZAKELIJK;
        doel.pathname = doel.pathname.slice('/zakelijk'.length) || '/';
        return Response.redirect(doel.toString(), res.status);
      }
    }
    if (res.status !== 404) return res;
    const opRoot = await env.ASSETS.fetch(request);
    return opRoot.status === 404 ? nietGevonden('/zakelijk/404/', request) : opRoot;
  }

  if (url.hostname === 'www.guusnoij.nl') {
    url.hostname = 'guusnoij.nl';
    return Response.redirect(url.toString(), 301);
  }

  const oud = OUD[url.pathname.replace(/\/$/, '')];
  if (oud) return Response.redirect(new URL(oud, url).toString(), 301);

  // Preview op workers.dev: beide kanten op één adres, zonder doorsturen.
  if (url.hostname.endsWith('.workers.dev')) return env.ASSETS.fetch(request);

  if (url.pathname === '/zakelijk' || url.pathname.startsWith('/zakelijk/')) {
    url.hostname = ZAKELIJK;
    url.pathname = url.pathname.slice('/zakelijk'.length) || '/';
    return Response.redirect(url.toString(), 301);
  }
  const res = await env.ASSETS.fetch(request);
  return res.status === 404 ? nietGevonden('/404', request) : res;
}

// Eigen 404-pagina per kant, met de juiste statuscode.
async function nietGevonden(pad: string, request: Request): Promise<Response> {
  const pagina = await env.ASSETS.fetch(new Request(new URL(pad, request.url), request));
  return new Response(pagina.body, { status: 404, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}

export default {
  async fetch(request) {
    const res = await serveer(request);
    // Nog niet indexeren (okt 2026). Weghalen samen met de meta robots in src/layouts/Basis.astro.
    const kop = new Headers(res.headers);
    kop.set('X-Robots-Tag', 'noindex, nofollow');
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers: kop });
  },
} satisfies ExportedHandler;
