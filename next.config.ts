import type {NextConfig} from 'next';

const isDev = process.env.NODE_ENV === 'development';

// Bundle analyzer: activar con ANALYZE=true npm run build
let withBundleAnalyzer = (config: NextConfig) => config;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
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

const csp = `default-src 'self'; img-src 'self' data: https:; script-src ${scriptSrc}; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com;`;

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
            value: 'camera=(), microphone=(), geolocation=()',
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
