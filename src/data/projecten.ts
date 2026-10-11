// Persoonlijke projecten (overgenomen uit de Notion-database "Personal projects", okt 2026).
import type { ImageMetadata } from 'astro';
import strategy from '../assets/projecten/strategy-preferred-cover.jpg';
import prima from '../assets/projecten/prima-plek-cover.jpg';
import prima1 from '../assets/projecten/prima-plek-01.jpg';
import prima2 from '../assets/projecten/prima-plek-02.jpg';
import prima3 from '../assets/projecten/prima-plek-03.jpg';
import prima4 from '../assets/projecten/prima-plek-04.jpg';
import prima5 from '../assets/projecten/prima-plek-05.jpg';
import manfred from '../assets/projecten/manfredroovers-portfolio-cover.jpg';
import manfred1 from '../assets/projecten/manfredroovers-portfolio-01.jpg';
import manfred2 from '../assets/projecten/manfredroovers-portfolio-02.jpg';
import manfred3 from '../assets/projecten/manfredroovers-portfolio-03.jpg';
import jongnl from '../assets/projecten/jongnl-gennep-cover.jpg';
import plana from '../assets/projecten/plan-a-nijmegen-website-cover.jpg';
import esp from '../assets/projecten/esp-centrum-cover.jpg';
import brandweer from '../assets/projecten/learning-and-content-system-for-hydrolic-cover.jpg';
import auto from '../assets/projecten/car-configurator-app-cover.jpg';

export interface Project {
  slug: string;
  naam: string;
  kort: string;
  cover: ImageMetadata;
  tags: string[];
  status?: string;
  links?: { label: string; url: string }[];
  stack?: string;
  tekst?: string[];
  fotos?: ImageMetadata[];
}

export const projecten: Project[] = [
  {
    slug: 'strategy-preferred',
    naam: 'Strategy Preferred',
    kort: 'An independent European guide to Strategy’s preferred stocks.',
    cover: strategy,
    tags: ['Full-stack', 'React', 'Data visualisation'],
    status: 'Live',
    links: [
      { label: 'strekopen.nl', url: 'https://strekopen.nl/en-gb' },
      { label: 'Favourite: the capital stack', url: 'https://strekopen.nl/nl-nl/data/capital-stack' },
      { label: 'Favourite: MSTR data', url: 'https://strekopen.nl/en-gb/data/mstr' },
      { label: 'Favourite: STRC data', url: 'https://strekopen.nl/en-gb/data/strc' },
    ],
    tekst: [
      'An independent European guide about the availability and aspects of Strategy’s preferred stocks.',
      'The site compares the yields of the different stocks and visualises the liquidity and the risks on the balance sheet of (Micro)Strategy.',
    ],
  },
  {
    slug: 'prima-plek',
    naam: 'Prima Plek',
    kort: 'Room booking for flexible workspaces and meeting rooms.',
    cover: prima,
    tags: ['Full-stack', 'Next.js', 'Prisma', 'Auth'],
    status: 'Live',
    links: [
      { label: 'prima-plek.nl', url: 'https://prima-plek.nl' },
      { label: 'App', url: 'https://prima-plek.vercel.app/' },
    ],
    stack: 'T3 stack: Next.js, Prisma, tRPC and Tailwind CSS',
    tekst: [
      'A room booking system for flexible workspaces and meeting rooms: a user-friendly reservation flow, with easy insights and management in an admin panel.',
      'It was used in production for the meeting rooms of Plan A Nijmegen.',
    ],
    fotos: [prima1, prima2, prima3, prima4, prima5],
  },
  {
    slug: 'manfred-roovers',
    naam: 'Manfred Roovers portfolio',
    kort: 'A simple, fast portfolio for a composer of music for moving images.',
    cover: manfred,
    tags: ['Astro', 'Front-end'],
    status: 'Live',
    links: [{ label: 'manfredroovers.nl', url: 'https://manfredroovers.nl' }],
    stack: 'Astro and Tailwind CSS',
    tekst: ['Manfred Roovers composes music for moving images. This is a simple and fast portfolio website of his work.'],
    fotos: [manfred1, manfred2, manfred3],
  },
  {
    slug: 'jongnl-gennep',
    naam: 'JongNL Gennep',
    kort: 'Website (and more) for youth organisation JongNL Gennep.',
    cover: jongnl,
    tags: ['Full-stack', 'Astro', 'SEO'],
    status: 'Live',
    links: [{ label: 'jongnlgennep.nl', url: 'https://jongnlgennep.nl' }],
    stack: 'Astro and Tailwind CSS, static and server-side rendered',
    tekst: ['A static and server-side rendered website for youth organisation JongNL Gennep, where I am a volunteer and board member.'],
  },
  {
    slug: 'plan-a-nijmegen',
    naam: 'Plan A Nijmegen',
    kort: 'Website for a multifunctional (work)space in Nijmegen.',
    cover: plana,
    tags: ['Front-end', 'Next.js', 'Strapi', 'SEO'],
    status: 'Live',
    links: [{ label: 'plan-a-nijmegen.guusnoij.nl', url: 'https://plan-a-nijmegen.guusnoij.nl/' }],
    stack: 'Next.js with Strapi as CMS',
    tekst: ['The company website for a multifunctional (work)space in Nijmegen, where you can meet, work, chill and eat.'],
  },
  {
    slug: 'esp-centrum',
    naam: 'ESP Centrum',
    kort: 'Company website for health centre ESP Centrum.',
    cover: esp,
    tags: ['WordPress', 'Tailwind CSS', 'SEO'],
    status: 'Live',
    links: [{ label: 'espcentrum.nl', url: 'https://espcentrum.nl/' }],
    stack: 'WordPress and Tailwind CSS',
    tekst: ['A WordPress website for a health centre in the Netherlands. The theme is built from scratch with Tailwind CSS, PostCSS and PHP.'],
  },
  {
    slug: 'rescue-equipment-learning',
    naam: 'Rescue equipment learning system',
    kort: 'A learning and content system for Dutch fire brigades.',
    cover: brandweer,
    tags: ['Full-stack', 'UX design'],
    status: 'Halted',
    stack: 'PHP, Laravel, BookStack, Vue, TinyMCE, CSS Grid and Bootstrap',
    tekst: [
      'Every fire department uses different tools in emergencies. Apart from the water hose, brigades use hydraulic and other rescue equipment, for instance special hybrid bags to lift a large truck.',
      'To make the best decisions, fire departments need training for these tools and for which combinations work best in which situation. This web app provides that e-learning material.',
      'I developed a learning and content management system to register all the different tools. Each tool can get components, such as sliders, that help learning through interaction. Through authentication, every account only sees the tools of its own department.',
      'The application is a fork of the open source project BookStack, with custom functionality added.',
    ],
  },
  {
    slug: 'car-configurator',
    naam: 'Car configurator app',
    kort: 'An (old) hobby project to learn the basics of Vue.',
    cover: auto,
    tags: ['Vue', 'Front-end'],
    links: [{ label: 'Live demo', url: 'https://stately-fairy-2221b6.netlify.app/' }],
    stack: 'Vue',
    tekst: [
      'Before I worked as a professional front-end developer, I made several small projects to learn to code and to use the (then upcoming) front-end frameworks like Vue and React.',
      'This is one of those small projects.',
    ],
  },
];
