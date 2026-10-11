import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://guusnoij.nl',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  // Dev-server ook via een extra hostnaam bereikbaar maken (bv. een tunnel): DEV_HOST=naam npm run dev
  vite: { server: { allowedHosts: process.env.DEV_HOST ? [process.env.DEV_HOST] : [] } },
});
