/**
 * Señales de confianza del sitio: testimonios, casos de éxito y equipo.
 *
 * REGLAS (importantes):
 *   - Los arreglos están vacíos a propósito: el cliente todavía no ha entregado
 *     el contenido y este archivo NO debe rellenarse con ejemplos.
 *   - Un dato inventado aquí termina publicado y es peor que no tener la
 *     sección: testimonios y casos son afirmaciones verificables.
 *   - Los componentes que leen estos arreglos no renderizan nada mientras estén
 *     vacíos, así que el sitio se ve igual que antes.
 *
 * TODO(datos reales): cuando el cliente envíe material, añadirlo aquí y el
 * render (y el JSON-LD del equipo) se activa solo.
 */

export type Testimonio = {
  /** Texto literal de la persona; no parafrasear ni resumir. */
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Fecha del testimonio, ISO (YYYY-MM-DD). */
  date: string;
  /** Enlace donde se pueda verificar (LinkedIn, web del cliente…), si existe. */
  source?: string;
};

export type CasoDeExito = {
  title: string;
  /** Rubro de la empresa cliente (industrial, retail, salud…). */
  sector: string;
  problem: string;
  solution: string;
  result: string;
};

export type MiembroEquipo = {
  name: string;
  role: string;
  bio: string;
  /** Ruta de la foto dentro de /public, p. ej. '/images/equipo/nombre.webp'. */
  photo: string;
  /** Perfiles públicos que respaldan su experiencia. */
  sameAs: string[];
};

/**
 * Sin Review ni AggregateRating en JSON-LD: esas propiedades exigen reseñas
 * verificables en la propia página y Google las penaliza si no existen.
 */
export const testimonios: Testimonio[] = [];

export const casosDeExito: CasoDeExito[] = [];

export const equipo: MiembroEquipo[] = [];
