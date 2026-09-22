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

/** Los mismos artículos con la imagen ya resuelta, listos para pintar. */
export const blogPostsWithImage = blogPosts.map((post) => ({
  ...post,
  href: `/blog/${post.slug}`,
  image: PlaceHolderImages.find((img) => img.id === post.imageId),
}));
