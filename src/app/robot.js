export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/homepage', '/homepage/team', '/homepage/leistungen'],
      disallow: [],
    },
    sitemap: 'https://praxishirt.de/sitemap.xml',
  };
}
