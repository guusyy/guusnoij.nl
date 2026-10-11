// Beide sites draaien uit één build; in productie serveert de Worker (cloudflare/) zakelijk.guusnoij.nl vanuit /zakelijk/.
// PUBLIC_RELATIEF=1: relatieve links, voor een preview op workers.dev voordat de domeinen live zijn.
const prod = import.meta.env.PROD && !import.meta.env.PUBLIC_RELATIEF;
export const PERSOONLIJK = prod ? 'https://guusnoij.nl/' : '/';
export const ZAKELIJK = prod ? 'https://zakelijk.guusnoij.nl/' : '/zakelijk/';

// Vindbaarheid: false geeft elke pagina noindex (de preview op workers.dev krijgt dat altijd via de Worker).
export const INDEXEREN = true;

// Cloudflare Web Analytics (zonder cookies). Het token is publiek, het staat in elke pagina.
export const ANALYTICS_TOKEN = '0c0cbef16dc24dadb6977ea67ff0b9db';

export const SITE_PERSOONLIJK = 'https://guusnoij.nl';
export const SITE_ZAKELIJK = 'https://zakelijk.guusnoij.nl';

export const EMAIL = 'guus.noij@pm.me';
// Zakelijk contactadres.
export const EMAIL_ZAKELIJK = 'hallo@guusnoij.nl';
export const GITHUB = 'https://github.com/guusyy';

export const BEDRIJF = {
  naam: 'Guus Noij Design & Development',
  kvk: '70537372',
  straat: 'Hoekweg 63',
  postcode: '6591 XN',
  plaats: 'Gennep',
};
