import { ORGANIZATION_ID } from '@/lib/schema';

/**
 * Autores del blog.
 *
 * TODO(datos reales): el cliente todavía no ha facilitado personas con
 * experiencia verificable (nombre, cargo y perfil público). Mientras esta lista
 * esté vacía, el author del JSON-LD de cada artículo es la organización.
 *
 * Al añadir una entrada aquí, el artículo con ese slug empieza a declarar un
 * `Person` en el JSON-LD sin tocar las páginas.
 */
export type Author = {
  /** Nombre y apellido de la persona. */
  name: string;
  /** Cargo o especialidad, como debe leerse: «Abogada laboral». */
  role: string;
  /** URL pública del perfil (página del equipo, LinkedIn…). */
  url: string;
  /** Otros perfiles que respaldan la autoría. */
  sameAs: string[];
};

/** Autores indexados por slug del artículo. */
export const authors: Record<string, Author> = {
  // Ejemplo de la forma esperada (sin datos reales, por eso queda comentado):
  // 'ley-40-horas': {
  //   name: 'Nombre Apellido',
  //   role: 'Cargo o especialidad',
  //   url: 'https://www.bossasesorias.cl/equipo/nombre-apellido',
  //   sameAs: ['https://www.linkedin.com/in/perfil'],
  // },
};

/** Autor declarado para un artículo, si ya existe. */
export function getAuthor(slug: string): Author | undefined {
  return authors[slug];
}

/**
 * Nodo `author` del JSON-LD: Person si hay autor real, organización si no.
 * Una persona con cargo y perfil es más creíble para buscadores e IA que una
 * marca, pero inventarla sería peor que no tenerla.
 */
export function authorNode(author: Author | undefined) {
  if (!author) return { '@id': ORGANIZATION_ID };
  return {
    '@type': 'Person',
    name: author.name,
    jobTitle: author.role,
    url: author.url,
    sameAs: author.sameAs,
  };
}
