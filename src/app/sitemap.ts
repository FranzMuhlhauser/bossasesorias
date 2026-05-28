import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bossasesorias.cl';
  
  const routes = [
    '',
    '/soluciones',
    '/soluciones/bienestar-seguridad',
    '/soluciones/gestion-legal',
    '/soluciones/tecnologia',
    '/soluciones/capacitaciones',
    '/empresa/por-que-boss',
    '/empresa/areas',
    '/contacto',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/soluciones/') ? 0.8 : 0.6,
  }));
}
