import { blogPosts } from '@/lib/blog-posts';

/**
 * Feed RSS del blog (/rss.xml).
 *
 * No existía. Sirve para que los agregadores y los rastreadores detecten los
 * artículos nuevos sin tener que revisar el sitio entero, y es una de las vías
 * por las que los motores de IA descubren contenido nuevo antes.
 *
 * Se genera en el build (force-static) y sale en el HTML del servidor: nada de
 * JavaScript de por medio.
 */

export const dynamic = 'force-static';

const BASE = 'https://www.bossasesorias.cl';

/** Escapa lo mínimo para que el XML no se rompa. */
function xml(texto: string): string {
  return texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function GET() {
  // Los más recientes primero.
  const ordenados = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  const items = ordenados
    .map((post) => {
      const url = `${BASE}/blog/${post.slug}`;
      // pubDate en RFC 822, que es lo que espera RSS 2.0.
      const fecha = new Date(`${post.date}T10:00:00Z`).toUTCString();
      return `    <item>
      <title>${xml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${fecha}</pubDate>
      <description>${xml(post.summary)}</description>
    </item>`;
    })
    .join('\n');

  const ultima = ordenados[0]?.date ?? '2026-08-15';
  const xmlFinal = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog — BOSS Asesorías</title>
    <link>${BASE}/blog</link>
    <description>Normativa laboral, prevención de riesgos, tecnología y cultura organizacional para empresas chilenas.</description>
    <language>es-cl</language>
    <lastBuildDate>${new Date(`${ultima}T10:00:00Z`).toUTCString()}</lastBuildDate>
    <atom:link href="${BASE}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xmlFinal, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
