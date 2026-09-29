import { PlaceHolderImages } from '@/lib/placeholder-images';

/**
 * Noticias para la portada (Home) — SEPARADAS del blog.
 *
 * La usan solo la sección "Perspectivas y Actualidad" de la home.
 * Cada noticia TIENE QUE linkar a un servicio de BOSS (serviceLink).
 * Opcionalmente puede linkar a un artículo del blog (blogLink).
 *
 * Para publicar una noticia nueva:
 *   1. Añádela a este array.
 *   2. Si necesita imagen nueva, agrégala a placeholder-images.json.
 *   3. La home la muestra automáticamente (máx. 4).
 */

export type HomeNews = {
  id: string;
  title: string;
  summary: string;
  /** id dentro de PlaceHolderImages (los archivos de imagen del proyecto). */
  imageId: string;
  /** URL original de la fuente oficial. */
  sourceUrl: string;
  /** Si existe artículo en el blog, su href (ej: /blog/ley-40-horas). */
  blogLink?: string;
  /** Servicio BOSS que ayuda con este tema (OBLIGATORIO). */
  serviceLink: {
    /** Texto que se muestra en el botón: "Nosotros te ayudamos con <title>" */
    title: string;
    /** href del servicio (ej: /soluciones/gestion-legal) */
    href: string;
  };
  /** Fecha de la noticia (ISO). */
  date: string;
  /** Cuándo se publicó en BOSS (ISO). */
  publishedAt: string;
};

/** Las 4 noticias actuales para la home. */
export const homeNews: HomeNews[] = [
  {
    id: 'ley-40-horas',
    title: 'Ley de 40 Horas en Chile 2026: Cómo Implementar las 42 Horas',
    summary:
      'La Ley 21.561 reduce la jornada a 42 horas semanales. Plazos, requisitos, impacto en remuneraciones y cómo preparar tu empresa sin afectar productividad.',
    imageId: 'news-1',
    sourceUrl: 'https://www.dt.gob.cl/portal/1614/w3-article-96158.html',
    blogLink: '/blog/ley-40-horas',
    serviceLink: {
      title: 'la Ley de 40 Horas',
      href: '/soluciones/gestion-legal',
    },
    date: '2026-08-15',
    publishedAt: '2026-08-15T10:00:00Z',
  },
  {
    id: 'ley-karin',
    title: 'Ley Karin: Obligaciones para Empresas en Chile',
    summary:
      'La Ley 21.643 exige protocolos de salud mental, prevención de acoso laboral y evaluación de riesgos psicosociales. Qué debe implementar tu empresa ya.',
    imageId: 'news-2',
    sourceUrl: 'https://www.dt.gob.cl/portal/1614/w3-article-96159.html',
    blogLink: '/blog/ley-karin',
    serviceLink: {
      title: 'la Ley Karin',
      href: '/soluciones/bienestar-seguridad',
    },
    date: '2026-08-15',
    publishedAt: '2026-08-15T10:00:00Z',
  },
  {
    id: 'ciberseguridad-chile',
    title: 'Ciberseguridad en Chile 2026: Ley Marco y Obligaciones',
    summary:
      'La Ley 21.663 obliga a implementar planes de seguridad, reportar incidentes y proteger datos críticos. Cómo cumplir y evitar sanciones.',
    imageId: 'news-3',
    sourceUrl: 'https://www.subtel.gob.cl/ley-marco-ciberseguridad/',
    blogLink: '/blog/ciberseguridad-chile',
    serviceLink: {
      title: 'la ciberseguridad',
      href: '/soluciones/tecnologia',
    },
    date: '2026-08-15',
    publishedAt: '2026-08-15T10:00:00Z',
  },
  {
    id: 'fiscalizacion-dt',
    title: 'Nuevas Fiscalizaciones DT: Multas por Incumplimiento Laboral',
    summary:
      'La Dirección del Trabajo intensifica controles: contratos, jornadas, cotizaciones y teletrabajo. Qué revisan y cómo blindar a tu empresa.',
    imageId: 'news-1', // reutiliza imagen de news-1 (40 hrs) por ahora
    sourceUrl: 'https://www.dt.gob.cl/portal/1614/w3-article-96160.html',
    blogLink: undefined, // aún no hay artículo en blog
    serviceLink: {
      title: 'la prevención de riesgos laborales',
      href: '/soluciones/bienestar-seguridad',
    },
    date: '2026-09-01',
    publishedAt: '2026-09-01T10:00:00Z',
  },
];

/** Las mismas noticias con la imagen ya resuelta, listas para pintar. */
export const homeNewsWithImage = homeNews.map((news) => ({
  ...news,
  image: PlaceHolderImages.find((img) => img.id === news.imageId),
}));