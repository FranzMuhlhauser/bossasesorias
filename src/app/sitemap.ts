import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bossasesorias.cl';
  
  const routes = [
    '',
    // El índice del blog faltaba en el sitemap (y en la web: daba 404).
    '/blog',
    '/soluciones',
    '/soluciones/bienestar-seguridad',
    '/soluciones/gestion-legal',
    '/soluciones/tecnologia',
    '/soluciones/capacitaciones',
    '/empresa/por-que-boss',
    '/empresa/areas',
    '/contacto',
    '/blog/ley-40-horas',
    '/blog/ley-karin',
    '/blog/ciberseguridad-chile',
    '/blog/ia-cultura-organizacional',
  ];

  // La portada y el blog cambian a menudo; el resto, casi nunca.
  const semanal = new Set(['', '/blog']);

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: semanal.has(route) ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1.0 : route === '/blog' ? 0.9
      : route.startsWith('/soluciones/') ? 0.8 : 0.6,
  }));
}
