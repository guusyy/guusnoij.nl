# guusnoij.nl

Source of two sites built from one Astro project:

- **[guusnoij.nl](https://guusnoij.nl)**: personal site (English): about, experience, projects, bonsai and two cats.
- **[zakelijk.guusnoij.nl](https://zakelijk.guusnoij.nl)**: Guus Noij Design & Development (Dutch), the dark mirror of the personal site.

## Stack

- [Astro](https://astro.build) with the ClientRouter for page transitions, IBM Plex Mono + Sans.
- One Cloudflare Worker (`cloudflare/`) serves both hostnames from the same build: `zakelijk.guusnoij.nl/*` is served from `/zakelijk/*`, `www` redirects to the apex. Deployed with the new [`cf` CLI](https://developers.cloudflare.com/cf/).
- Astro 6+ doesn't build with `cf` during the beta, so Astro builds to `dist/` and Vite picks that up as `publicDir` for the Worker.

## Develop

```bash
npm install
npm run dev                 # http://localhost:4321 (business side at /zakelijk/)
```

## Deploy

```bash
npm run build               # Astro -> dist/
cd cloudflare && npm install
npx cf deploy               # production: guusnoij.nl, www.guusnoij.nl, zakelijk.guusnoij.nl
```

Preview on workers.dev without the custom domains:

```bash
PUBLIC_RELATIEF=1 npm run build && cd cloudflare && npx cf deploy --mode preview
```

Both sites are indexable (`INDEXEREN` in `src/data/site.ts`); the workers.dev preview always gets `X-Robots-Tag: noindex`.
