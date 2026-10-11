import type { ImageMetadata } from 'astro';
import btcdirect from '../assets/werk/btcdirect.jpg';
import athlon from '../assets/werk/athlon-flex.jpg';
import arrivaReis from '../assets/werk/arriva-reisplanner.jpg';
import hso from '../assets/werk/hso.jpg';
import werkenbij from '../assets/werk/werkenbij-arriva.jpg';
// Inhoud van de persoonlijke site, overgenomen van de oude Notion-site (okt 2026).
export const werk = [
  {
    rol: 'Senior front-end developer',
    bedrijf: 'BTCDirect',
    plaats: 'Nijmegen',
    periode: 'Apr 2025 – present',
    tekst: 'Front-end for a European crypto platform, with hands-on React and TypeScript.',
  },
  {
    rol: 'Lead front-end developer',
    bedrijf: 'Perplex Digital',
    plaats: 'Arnhem',
    periode: 'Oct 2022 – Mar 2025',
    tekst: 'Custom web apps for clients like Arriva, Rocsys, Intershift, Athlon and Mercedes-Benz. Mostly Umbraco CMS (C#) with a custom front-end powered by Vite.',
    punten: [
      'Responsible for the front-end architecture of most web projects',
      'Single page applications (PWA) with Vue 3',
      'Coaching junior front-end developers',
    ],
  },
  {
    rol: 'Front-end developer',
    bedrijf: 'Perplex Digital',
    plaats: 'Arnhem',
    periode: 'Mar 2021 – Sep 2022',
  },
  {
    rol: 'UX designer – visual design',
    bedrijf: 'Planon Software',
    plaats: 'Nijmegen',
    periode: 'Sep 2018 – Mar 2021',
    tekst: 'Visual design of multi-platform user interfaces for the Planon IWMS suite: asset, order, ticketing, planning and space management.',
    punten: [
      'Redesign of the complete Planon Software Suite',
      'Created and maintained the design system',
      'Helped product managers turn ideas into user-testable prototypes',
    ],
  },
  {
    rol: 'Content designer / e-learning developer',
    bedrijf: 'Planon Software',
    plaats: 'Nijmegen',
    periode: 'Feb 2017 – Feb 2018',
  },
  {
    rol: 'Web developer / graphic designer',
    bedrijf: 'TravPro Mobile',
    plaats: 'Nijmegen',
    periode: 'Jul 2015 – Feb 2016',
  },
];

export const projecten: { naam: string; url?: string; tekst: string; tags: string[]; cover?: ImageMetadata }[] = [
  { naam: 'BTCDirect', url: 'https://btcdirect.eu/nl-nl', cover: btcdirect, tags: ['React', 'TypeScript', 'Payload CMS'], tekst: 'The website of one of Europe’s longest-running crypto platforms, with live coin price charts and smart templating for every coin page. Built with React, TypeScript and Payload CMS.' },
  { naam: 'Athlon Flex', url: 'https://flex.athlon.com/showroom', cover: athlon, tags: ['Vue 3', 'SPA'], tekst: 'Mobile-first SPA for a flexible car lease: swap your car every month, with real-time reservations and a live car pool.' },
  { naam: 'HTM', url: 'https://htm.nl', tags: ['Umbraco', 'Vue 3', 'TypeScript'], tekst: 'Large site for The Hague’s public transport company: real-time journey planner, interactive tram timetable, ticket shop and customer portal.' },
  { naam: 'Arriva journey planner', url: 'https://www.arriva.nl/plan-je-reis/reisplanner/', cover: arrivaReis, tags: ['Vue 3', 'API'], tekst: 'Vue 3 journey planner visualising 9292 API data.' },
  { naam: 'HSO', url: 'https://www.hso.com/', cover: hso, tags: ['Umbraco', 'Personalisation'], tekst: 'International platform that replaced 40+ websites, with personalised recommendations of business cases, blogs and podcasts.' },
  { naam: 'Werken bij Arriva', url: 'https://werkenbij.arriva.nl/', cover: werkenbij, tags: ['Umbraco', 'Vue'], tekst: 'Career website with a Vue vacancy overview on Umbraco.' },
  { naam: 'Over Arriva', url: 'https://over.arriva.nl/', tags: ['Umbraco'], tekst: 'Corporate website of Arriva Netherlands: who they are, what they do and where they are heading.' },
  { naam: 'Intershift Link', tags: ['Vue 3', 'TypeScript', 'PWA'], tekst: 'PWA for GPs to self-schedule, trade and swap shifts within their clinic.' },
];

export const skills = [
  { naam: 'TypeScript', tekst: 'and vanilla JavaScript. TypeScript highly preferred' },
  { naam: 'Vue 3', tekst: 'SPAs, PWAs and component libraries' },
  { naam: 'React', tekst: 'hands-on, day to day at BTCDirect' },
  { naam: 'CSS', tekst: 'Tailwind CSS, PostCSS, design systems' },
  { naam: 'Astro', tekst: 'static sites, like this one' },
  { naam: 'UX & visual design', tekst: 'where I started. I still design before I build' },
  { naam: 'AI agents', tekst: "Where all of the above comes together. These days I mostly channel AI agents: they write much of the code, I bring the design eye and front-end experience to steer and review it." },
];

export const opleiding = [
  { naam: 'Communication & Multimedia Design', waar: 'HAN University of Applied Sciences, Arnhem', periode: '2013 – 2018', tekst: 'Graduated in Visual Design with a focus on UX. Minor: Scripting for Designers.' },
  { naam: 'HAVO, Economics & Society', waar: 'Elzendaal College, Boxmeer', periode: '2008 – 2013' },
];

export const naast = [
  { rol: 'Board member', waar: 'Jong Nederland Gennep', periode: 'Nov 2019 – present' },
  { rol: 'Volunteer', waar: 'Jong Nederland Gennep', periode: 'Sep 2013 – present' },
];
