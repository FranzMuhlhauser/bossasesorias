import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts';
import { equipo } from '@/lib/trust';

const BASE_URL = 'https://www.bossasesorias.cl';

/**
 * Fecha de última modificación de cada página que no es un artículo del blog,
 * en formato ISO (YYYY-MM-DD).
 *
 * ACTUALÍZALA A MANO cuando cambie el contenido de esa página. Con
 * `new Date()` todas las URLs decían "modificada ahora" en cada build, y un
 * lastModified que siempre cambia es una señal que Google acaba ignorando.
 *
 * TODO(provisional): las fechas de abajo son una SUPOSICIÓN. Hoy (2026-11-10)
 * no hay historial de cuándo se revisó cada página, así que se inicializan con
 * la fecha de esta tarea; hay que sustituirlas por las reales.
 */
const LAST_MODIFIED: Record<string, string> = {
  '': '2026-11-10',
  '/soluciones': '2026-11-10',
  '/soluciones/bienestar-seguridad': '2026-11-10',
  '/soluciones/gestion-legal': '2026-11-10',
  '/soluciones/tecnologia': '2026-11-10',
  '/soluciones/capacitaciones': '2026-11-10',
  '/empresa/por-que-boss': '2026-11-10',
  '/empresa/areas': '2026-11-10',
  // Solo se usa cuando hay equipo real: con el arreglo vacío la ruta no existe.
  '/empresa/equipo': '2026-11-10',
  '/contacto': '2026-11-10',
};

// Las fichas del blog solo guardan el día; se fija una hora (10:00Z, la misma
// que usa el JSON-LD) para que la fecha del sitemap sea inequívoca.
const isoDate = (day: string) => new Date(`${day}T10:00:00Z`);

/** Día de la revisión más reciente de todo el blog (ISO compara bien como texto). */
const latestArticleDay = blogPosts.reduce(
  (latest, post) => {
    const day = post.updated ?? post.date;
    return day > latest ? day : latest;
  },
  '',
);

/** El artículo cuya URL es `route`, o undefined si no existe. */
const findArticle = (route: string) =>
  blogPosts.find((post) => `/blog/${post.slug}` === route);

export default function sitemap(): MetadataRoute.Sitemap {
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
    // La página de equipo se publica solo cuando hay datos reales.
    ...(equipo.length > 0 ? ['/empresa/equipo'] : []),
    '/contacto',
    '/blog/ley-40-horas',
    '/blog/ley-karin',
    '/blog/ciberseguridad-chile',
    '/blog/ia-cultura-organizacional',
  ];

  // Sin changeFrequency ni priority: Google ignora ambos, y Bing/Yandex
  // también ignoran priority, así que solo añadían ruido al archivo.
  return routes.map((route) => {
    let lastModified: Date;

    if (route === '/blog') {
      lastModified = isoDate(latestArticleDay);
    } else {
      const article = findArticle(route);
      if (article) {
        lastModified = isoDate(article.updated ?? article.date);
      } else {
        const day = LAST_MODIFIED[route];
        if (!day) {
          throw new Error(`sitemap: falta LAST_MODIFIED para «${route}»`);
        }
        lastModified = isoDate(day);
      }
    }

    return {
      url: `${BASE_URL}${route}`,
      lastModified,
    };
  });
}
