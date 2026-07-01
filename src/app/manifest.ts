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
        src: '/images/logo_boss.webp',
        sizes: 'any',
        type: 'image/webp',
      },
    ],
  };
}
