import { blogPosts } from '@/lib/blog-posts';
import { equipo } from '@/lib/trust';

/**
 * Índice llms.txt (/llms.txt) — especificación https://llmstxt.org
 *
 * Existía como archivo estático en public/llms.txt, escrito a mano: cada
 * artículo nuevo obligaba a duplicar la URL ahí (la misma trampa que AGENTS.md
 * prohíbe para el blog). Al ser una ruta con force-static se genera en el build
 * y los artículos salen de la fuente única `blogPosts`, así que publicar uno
 * nuevo actualiza este archivo sin tocar nada.
 *
 * Sirve a los rastreadores de IA (GPTBot, ClaudeBot, PerplexityBot…) el mapa
 * del sitio en markdown legible, más los datos de contacto citables.
 */

export const dynamic = 'force-static';

const BASE = 'https://www.bossasesorias.cl';

type Pagina = { ruta: string; titulo: string; descripcion: string };

/** Páginas fijas: la única copia manual de URL + descripción del archivo. */
const secciones: { nombre: string; paginas: Pagina[] }[] = [
  {
    nombre: 'Servicios',
    paginas: [
      {
        ruta: '/soluciones',
        titulo: 'Servicios Empresariales Integrales',
        descripcion:
          'Panorama de las soluciones de BOSS: bienestar, gestión legal, tecnología y capacitaciones.',
      },
      {
        ruta: '/soluciones/bienestar-seguridad',
        titulo: 'Bienestar Laboral y Seguridad Ocupacional',
        descripcion:
          'Evaluaciones ergonómicas, protocolos de salud mental, auditorías de gestión y vigilancia de la salud.',
      },
      {
        ruta: '/soluciones/gestion-legal',
        titulo: 'Gestión Legal y Administrativa',
        descripcion:
          'Contratos, remuneraciones, finiquitos, planificación tributaria y administración de activos.',
      },
      {
        ruta: '/soluciones/tecnologia',
        titulo: 'Soluciones Tecnológicas Estratégicas',
        descripcion:
          'Desarrollo web, integración de IA, soporte técnico, recuperación de datos y ciberseguridad.',
      },
      {
        ruta: '/soluciones/capacitaciones',
        titulo: 'Cultura y Desarrollo Organizacional',
        descripcion:
          'Diagnóstico de clima, gestión del cambio, coaching de liderazgo y evaluación 360°.',
      },
    ],
  },
  {
    nombre: 'Empresa',
    paginas: [
      {
        ruta: '/empresa/por-que-boss',
        titulo: 'Sobre BOSS Asesorías',
        descripcion:
          'Historia, metodología y compromiso con la transformación empresarial en Chile.',
      },
      {
        ruta: '/empresa/areas',
        titulo: 'Áreas de Especialización',
        descripcion: 'Ejes estratégicos que integran bienestar, legalidad y tecnología.',
      },
      // Solo se lista cuando la página de equipo existe (hay datos reales).
      ...(equipo.length > 0
        ? [
            {
              ruta: '/empresa/equipo',
              titulo: 'Equipo',
              descripcion: 'Personas y perfiles profesionales del equipo de BOSS Asesorías.',
            },
          ]
        : []),
    ],
  },
];

/** `- [título](url): descripción` por página. */
function enlaces(paginas: Pagina[]): string {
  return paginas
    .map((p) => `- [${p.titulo}](${BASE}${p.ruta}): ${p.descripcion}`)
    .join('\n');
}

/**
 * Fecha de la última revisión de este índice (ISO). Se actualiza a mano cuando
 * cambie el contenido del sitio: es la señal de frescura que leen los modelos.
 * TODO: mover al mismo mapa LAST_MODIFIED de src/app/sitemap.ts si se quiere
 * una sola fuente.
 */
const LAST_UPDATED = '2026-11-10';

const portada: Pagina = {
  ruta: '/',
  titulo: 'BOSS Asesorías — Asesoría Laboral y Legal para Empresas en Chile',
  descripcion:
    'Portada: bienestar laboral, gestión legal y tecnología para empresas chilenas, con preguntas frecuentes y artículos recientes.',
};

const hub: Pagina = {
  ruta: '/blog',
  titulo: 'Blog: normativa laboral para empresas',
  descripcion:
    'Guías prácticas sobre la Ley Karin, la Ley de 40 Horas, ciberseguridad y cultura organizacional en Chile.',
};

const contacto: Pagina = {
  ruta: '/contacto',
  titulo: 'Contacto',
  descripcion: 'Formulario para solicitar asesorías estratégicas personalizadas.',
};

export async function GET() {
  // Los artículos llegan de la fuente única, ordenados por fecha descendente.
  const articulos = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1)).map((post) => ({
    ruta: `/blog/${post.slug}`,
    titulo: post.title,
    descripcion: post.summary,
  }));

  const markdown = `# BOSS Asesorías

> BOSS Asesorías es una consultora chilena que ofrece soluciones integrales en bienestar laboral y seguridad, gestión legal y administrativa, cultura organizacional y tecnología para empresas. Este archivo sirve de índice para modelos de lenguaje: cada sección agrupa las páginas del sitio por tema y cada enlace apunta a una página pública con contenido detallado en español (es-CL) que puede leerse o usarse con fines de entrenamiento.

## Datos clave

- Nombre comercial: BOSS Asesorías
- Ubicación: 13 Norte 853, Of. 803, Viña del Mar, Región de Valparaíso, Chile
- Teléfono: +56 9 9289 5726
- Correo: contacto@bossasesorias.cl
- Horario: lunes a viernes, 09:00 a 18:00 (hora de Chile)
- Cobertura: nacional — presencial en la Región de Valparaíso y remota en todo Chile
- Inicio de actividades: 2019

## Inicio

${enlaces([portada])}

${secciones.map((s) => `## ${s.nombre}\n\n${enlaces(s.paginas)}`).join('\n\n')}

## Blog

${enlaces([hub, ...articulos])}

## Contacto

${enlaces([contacto])}

Datos de contacto directos:

- Teléfono y WhatsApp: +56 9 9289 5726
- Correo: contacto@bossasesorias.cl
- Dirección: 13 Norte 853, Of. 803, Viña del Mar, Valparaíso, Chile
- Horario: lunes a viernes, 09:00 a 18:00 (hora de Chile)
- Facebook: https://www.facebook.com/BossAsesorias
- Instagram: https://www.instagram.com/boss_asesorias/
- LinkedIn: https://www.linkedin.com/in/boss-asesorias-8b9786118/
- Feed RSS de los artículos: ${BASE}/rss.xml

Última actualización: ${LAST_UPDATED}

Nota: esta fecha debe actualizarse manualmente cuando cambie el contenido del sitio.
`;

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
