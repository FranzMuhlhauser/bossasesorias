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
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
