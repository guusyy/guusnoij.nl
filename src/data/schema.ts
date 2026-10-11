// Gestructureerde data (schema.org, JSON-LD) voor zoekmachines.
import { BEDRIJF, EMAIL, EMAIL_ZAKELIJK, GITHUB, SITE_PERSOONLIJK, SITE_ZAKELIJK } from './site';

const PERSOON_ID = `${SITE_PERSOONLIJK}/#guus`;
const BEDRIJF_ID = `${SITE_ZAKELIJK}/#bedrijf`;

export const persoon = {
  '@type': 'Person',
  '@id': PERSOON_ID,
  name: 'Guus Noij',
  url: `${SITE_PERSOONLIJK}/`,
  image: `${SITE_PERSOONLIJK}/og/persoonlijk.png`,
  email: `mailto:${EMAIL}`,
  jobTitle: 'Senior front-end developer',
  worksFor: { '@type': 'Organization', name: 'BTCDirect', url: 'https://btcdirect.eu' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'HAN University of Applied Sciences' },
  address: { '@type': 'PostalAddress', addressLocality: BEDRIJF.plaats, addressCountry: 'NL' },
  knowsAbout: ['Front-end development', 'React', 'TypeScript', 'Vue', 'Astro', 'UX design', 'AI agents'],
  sameAs: [GITHUB, `${SITE_ZAKELIJK}/`],
};

export const bedrijf = {
  '@type': 'ProfessionalService',
  '@id': BEDRIJF_ID,
  name: BEDRIJF.naam,
  url: `${SITE_ZAKELIJK}/`,
  image: `${SITE_ZAKELIJK}/og/zakelijk.png`,
  logo: `${SITE_ZAKELIJK}/apple-touch-icon.png`,
  email: EMAIL_ZAKELIJK,
  description: 'Websites, maatwerk, automatisering en beheer, met één vast aanspreekpunt.',
  founder: { '@id': PERSOON_ID },
  address: {
    '@type': 'PostalAddress',
    streetAddress: BEDRIJF.straat,
    postalCode: BEDRIJF.postcode,
    addressLocality: BEDRIJF.plaats,
    addressCountry: 'NL',
  },
  areaServed: { '@type': 'Country', name: 'Nederland' },
  identifier: { '@type': 'PropertyValue', propertyID: 'KvK', value: BEDRIJF.kvk },
  knowsLanguage: ['nl', 'en'],
};

export const websitePersoonlijk = { '@type': 'WebSite', '@id': `${SITE_PERSOONLIJK}/#website`, url: `${SITE_PERSOONLIJK}/`, name: 'Guus Noij', inLanguage: 'en', publisher: { '@id': PERSOON_ID } };
export const websiteZakelijk = { '@type': 'WebSite', '@id': `${SITE_ZAKELIJK}/#website`, url: `${SITE_ZAKELIJK}/`, name: BEDRIJF.naam, inLanguage: 'nl', publisher: { '@id': BEDRIJF_ID } };

export const grafiek = (...items: Record<string, unknown>[]) => ({ '@context': 'https://schema.org', '@graph': items });

export const kruimelpad = (basis: string, stappen: { naam: string; pad: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: stappen.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.naam, item: basis + s.pad })),
});
