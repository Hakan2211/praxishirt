export default function sitemap() {
  return [
    {
      url: 'https://praxishirt.de',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 1,
    },
    {
      url: 'https://praxishirt.de/homepage/team',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 1,
    },
    {
      url: 'https://praxishirt.de/homepage/leistungen',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 1,
    },
    {
      url: 'https://praxishirt.de/homepage',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
  ];
}
