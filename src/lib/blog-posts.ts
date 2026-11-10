import { PlaceHolderImages } from '@/lib/placeholder-images';

/**
 * Fuente única de los artículos del blog.
 *
 * La usan tres sitios:
 *   1. La portada, en la sección "Perspectivas y Actualidad".
 *   2. El índice /blog (antes no existía: daba 404).
 *   3. El feed RSS (/rss.xml).
 *
 * Antes la lista estaba escrita a mano dentro de page.tsx. Para publicar un
 * artículo nuevo ahora basta con añadirlo aquí: aparece en los tres sitios.
 *
 * NOTA: las fechas coinciden con las que ya muestran las páginas de cada
 * artículo (15 de agosto de 2026) y con su `datePublished`.
 */
export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  /** Fecha de publicación en ISO, para el feed RSS. */
  date: string;
  /**
   * Fecha ISO (YYYY-MM-DD) de la última revisión REAL del artículo.
   * Alimenta `dateModified`; si no existe, se usa `date`. No la rellenes con la
   * fecha de publicación: repetir ambas dice "nunca se ha revisado".
   */
  updated?: string;
  /** La misma fecha como se muestra al visitante. */
  dateLabel: string;
  /** id dentro de PlaceHolderImages (los archivos de imagen del proyecto). */
  imageId: string;
  readMinutes: number;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'ley-40-horas',
    title: 'Ley de 40 Horas en Chile 2026: Cómo Implementar las 42 Horas',
    summary:
      'Guía completa sobre la Ley 21.561: plazos, requisitos, impacto en ' +
      'remuneraciones y cómo preparar tu empresa para la reducción a 42 horas semanales.',
    date: '2026-08-15',
    dateLabel: '15 agosto 2026',
    imageId: 'news-1',
    readMinutes: 10,
  },
  {
    slug: 'ley-karin',
    title: 'Ley Karin: Obligaciones para Empresas en Chile',
    summary:
      'Todo lo que necesitas saber sobre la Ley 21.643: protocolos de salud ' +
      'mental, prevención de acoso laboral y obligaciones para empresas chilenas.',
    date: '2026-08-15',
    dateLabel: '15 agosto 2026',
    imageId: 'news-2',
    readMinutes: 9,
  },
  {
    slug: 'ciberseguridad-chile',
    title: 'Ciberseguridad en Chile 2026: Ley Marco y Obligaciones',
    summary:
      'La Ley 21.663 obliga a implementar planes de seguridad y reportar ' +
      'incidentes. Conoce cómo proteger tu empresa de ataques ransomware.',
    date: '2026-08-15',
    dateLabel: '15 agosto 2026',
    imageId: 'news-3',
    readMinutes: 8,
  },
  {
    slug: 'ia-cultura-organizacional',
    title: 'IA y Cultura Organizacional: Cómo Transformar tu Empresa',
    summary:
      'Cómo integrar inteligencia artificial en la cultura de tu empresa. ' +
      'Beneficios medibles y casos de éxito en Chile.',
    date: '2026-08-15',
    dateLabel: '15 agosto 2026',
    imageId: 'news-4',
    readMinutes: 7,
  },
];

/**
 * Fechas del JSON-LD de un artículo. `dateModified` sale de `updated` cuando
 * hay revisión registrada y cae en la de publicación cuando no.
 */
export function getArticleDates(slug: string) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    throw new Error(`getArticleDates: no existe el artículo «${slug}»`);
  }
  // La hora es fija: las fechas de este blog son días, no marcas de tiempo.
  const time = 'T10:00:00Z';
  return {
    datePublished: `${post.date}${time}`,
    dateModified: `${post.updated ?? post.date}${time}`,
  };
}

/** Los mismos artículos con la imagen ya resuelta, listos para pintar. */
export const blogPostsWithImage = blogPosts.map((post) => ({
  ...post,
  href: `/blog/${post.slug}`,
  image: PlaceHolderImages.find((img) => img.id === post.imageId),
}));
