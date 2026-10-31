const BASE = 'https://praxishirt.de';

const ROUTES = [
  { path: '', priority: 1 },
  { path: '/homepage', priority: 0.9 },
  { path: '/homepage/leistungen', priority: 0.9 },
  { path: '/homepage/team', priority: 0.9 },
  { path: '/homepage/kontakt', priority: 0.9 },
  { path: '/homepage/impressum', priority: 0.3 },
  { path: '/homepage/datenschutzerklaerung', priority: 0.3 },
];

export default function sitemap() {
  return ROUTES.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority,
  }));
}
