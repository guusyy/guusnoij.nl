import { cloudflare } from '@cloudflare/vite-plugin';
import { defineConfig } from 'vite';

// Astro 6+ bouwt tijdens de cf-beta nog niet via cf. Daarom bouwt Astro zelf (../dist) en
// neemt Vite die map als publicDir mee: zo wordt de Astro-output de static assets van de Worker.
export default defineConfig({
  publicDir: '../dist',
  preview: { allowedHosts: ['.guusnoij.nl'] }, // lokaal testen met Host-header
  plugins: [cloudflare()],
});
