import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BOSS Asesorías | Bienestar Laboral, Gestión Legal y Tecnología',
    short_name: 'BOSS Asesorías',
    description: 'Soluciones integrales en bienestar laboral, gestión legal y tecnología para empresas en Chile.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1A2E40',
    orientation: 'portrait-primary',
    categories: ['business', 'productivity'],
    lang: 'es-CL',
    icons: [
      // Los tres iconos viven en /public. El WebP de 150×150 no puede
      // declararse «any»: Chrome exige al menos 192 px reales para
      // instalar la PWA, así que se declara el PNG de 192×192.
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/logo_boss.webp',
        sizes: '150x150',
        type: 'image/webp',
      },
    ],
  };
}
