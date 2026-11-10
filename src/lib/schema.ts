// Datos estructurados de la marca en un único @graph, inyectado una sola vez
// desde src/app/layout.tsx. Las páginas ya no repiten objetos Organization:
// apuntan al nodo con organizationRef.

const SITE_URL = 'https://www.bossasesorias.cl';

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Referencia al nodo de la empresa del grafo global.
 * Se usa en publisher, provider, author y mainEntity.
 */
export const organizationRef = { '@id': ORGANIZATION_ID } as const;

/**
 * Nodo de la empresa. Todos los datos provienen de la información publicada en
 * /contacto y /empresa/por-que-boss; no añadir campos sin respaldo real.
 */
export const organizationNode = {
  '@type': ['Organization', 'LocalBusiness'],
  '@id': ORGANIZATION_ID,
  name: 'BOSS Asesorías',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/logo_boss.webp`,
  },
  description:
    'Consultoría integral en bienestar laboral, gestión legal y soluciones tecnológicas para empresas en Chile.',
  slogan: 'Bienestar • Organización • Salud • Seguridad',
  foundingDate: '2019',
  telephone: '+56992895726',
  email: 'contacto@bossasesorias.cl',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '13 Norte 853, Of. 803',
    addressLocality: 'Viña del Mar',
    addressRegion: 'Valparaíso',
    postalCode: '2520000',
    addressCountry: 'CL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.016335,
    longitude: -71.547165,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Chile',
  },
  sameAs: [
    'https://www.facebook.com/BossAsesorias',
    'https://www.instagram.com/boss_asesorias/',
    'https://www.linkedin.com/in/boss-asesorias-8b9786118/',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Consultoría Empresarial',
    itemListElement: [
      'Bienestar Laboral y Seguridad Ocupacional',
      'Gestión Legal y Administrativa',
      'Soluciones Tecnológicas',
      'Cultura y Desarrollo Organizacional',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
};

/** Nodo del sitio, enlazado con la empresa como publisher. */
export const websiteNode = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: 'BOSS Asesorías',
  inLanguage: 'es-CL',
  publisher: organizationRef,
};

/** @graph completo que se inyecta una sola vez en el layout raíz. */
export function getSiteGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [organizationNode, websiteNode],
  };
}

/**
 * Convierte una ruta del proyecto ('/images/x.webp') en URL absoluta.
 * Google y los asistentes de IA esperan `image` con esquema y dominio; una
 * ruta relativa les impide resolver el recurso desde el JSON-LD.
 */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}

/**
 * Serializa para un <script type="application/ld+json">.
 * El escape de `<` impide que un texto con `</script>` cierre la etiqueta.
 */
export function jsonLdHtml(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
