import type {NextConfig} from 'next';

const isDev = process.env.NODE_ENV === 'development';

// Bundle analyzer: activar con ANALYZE=true npm run build
let withBundleAnalyzer = (config: NextConfig) => config;
try {
  const analyzer = require('@next/bundle-analyzer');
  withBundleAnalyzer = analyzer({
    enabled: process.env.ANALYZE === 'true',
    openAnalyzer: true,
  });
} catch {
  // @next/bundle-analyzer no instalado — opcional
  if (process.env.ANALYZE === 'true') {
    console.warn('[bundle-analyzer] @next/bundle-analyzer no está instalado. Ejecuta: npm install --save-dev @next/bundle-analyzer --legacy-peer-deps');
  }
}

// En desarrollo, React y Turbopack necesitan 'unsafe-eval' para HMR y source maps.
// En producción, React nunca usa eval().
const scriptSrc = isDev
  ? "'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com"
  : "'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com";

// GTM inserta un <iframe> noscript desde www.googletagmanager.com. Sin
// frame-src, cae en default-src 'self' y el navegador lo bloquea, así que el
// permiso se abre solo cuando el contenedor está configurado.
const gtmEnabled = Boolean(process.env.NEXT_PUBLIC_GTM_ID);
const frameSrc = gtmEnabled ? " frame-src 'self' https://www.googletagmanager.com;" : '';

const csp = `default-src 'self'; img-src 'self' data: https:; script-src ${scriptSrc}; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com;${frameSrc}`;

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: process.cwd(),
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            // `tools` no es una directiva estándar del navegador: habilita la API
            // WebMCP (origin trial de Chrome) solo en el mismo origen. Se añadió
            // a propósito junto con las anotaciones del formulario de contacto
            // (toolname/tooldescription y el hook useWebMCPContactTool); ver
            // docs/mantenimiento_agosto_2026.md (§ Optimización para Agentes de IA).
            // Si algún día se retira WebMCP, quitar también tools=self().
            value: 'camera=(), microphone=(), geolocation=(), tools=self()',
          },
          {
            key: 'Content-Security-Policy',
            value: csp,
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  images: {
    // Todas las imágenes migradas a locales en /public/images/
    remotePatterns: [],
  },
};

export default withBundleAnalyzer(nextConfig);
