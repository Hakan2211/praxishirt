export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: 'https://praxishirt.de/sitemap.xml',
  };
}
