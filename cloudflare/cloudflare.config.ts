import { bindings, defineConfig } from 'cf/config';
import * as entrypoint from './src/index.ts' with { type: 'cf-worker' };

// --mode preview: zelfde site op <naam>.workers.dev, zonder eigen domeinen.
export default defineConfig(({ mode }) => ({
  worker: {
    name: mode === 'preview' ? 'guusnoij-web-preview' : 'guusnoij-web',
    compatibilityDate: '2026-10-06',
    entrypoint,
    // Pagina's eerst langs de Worker: die kiest op hostnaam welke kant van de site hij serveert.
    // Vaste bestanden (zelfde op beide kanten) direct uit de assets: dat telt niet als Worker-verzoek.
    // Hun Cache-Control staat daarom in public/_headers.
    assets: {
      runWorkerFirst: ['/*', '!/_astro/*', '!/og/*', '!/favicon.svg', '!/apple-touch-icon.png'],
      htmlHandling: 'auto-trailing-slash',
      notFoundHandling: 'none',
    },
    env: {
      ASSETS: bindings.assets(),
    },
    domains: mode === 'preview' ? [] : ['guusnoij.nl', 'www.guusnoij.nl', 'zakelijk.guusnoij.nl'],
    workersDev: mode === 'preview',
  },
}));
