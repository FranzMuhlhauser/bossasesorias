import type { Metadata } from 'next';
import { IBM_Plex_Sans, Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { DynamicWhatsappButton } from '@/components/dynamic-whatsapp-button';
import './globals.css';
import { cn } from '@/lib/utils';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-ibm-plex-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'BOSS Asesorías | Bienestar Laboral, Gestión Legal y Soluciones Tecnológicas',
    template: '%s | BOSS ASESORÍAS',
  },
  description: 'Transforma tu empresa con asesoría experta en bienestar laboral, gestión legal y tecnología. Solicita una asesoría estratégica y potencia tu crecimiento en Chile.',
  keywords: ['bienestar laboral chile', 'asesorías empresariales integrales', 'prevención de riesgos chile', 'soluciones tecnológicas empresas', 'gestión legal y administrativa', 'consultora empresarial chile', 'asesoría estratégica personalizada'],
  openGraph: {
    title: 'BOSS Asesorías | Bienestar Laboral, Gestión Legal y Soluciones Tecnológicas',
    description: 'Soluciones integrales que protegen a tu equipo, optimizan tus procesos y fortalecen tu organización.',
    siteName: 'BOSS ASESORÍAS',
    locale: 'es_CL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BOSS Asesorías",
    "url": "https://www.bossasesorias.cl",
    "logo": "https://www.bossasesorias.cl/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+56-9-9289-5726",
      "contactType": "customer service",
      "areaServed": "CL",
      "availableLanguage": "Spanish"
    },
    "sameAs": [
      "https://www.facebook.com/BossAsesorias",
      "https://www.instagram.com/boss_asesorias/",
      "https://www.linkedin.com/in/boss-asesorias-8b9786118/"
    ]
  };

  return (
    <html lang="es" className={cn(inter.variable, ibmPlexSans.variable)} suppressHydrationWarning>
      <head>
        <link rel="preload" href={inter.style.fontFamily} as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href={ibmPlexSans.style.fontFamily} as="font" type="font/woff2" crossOrigin="anonymous" />
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-body">
        <Header />
        <main>{children}</main>
        <Footer />
        <DynamicWhatsappButton />
        <Toaster />
      </body>
    </html>
  );
}
