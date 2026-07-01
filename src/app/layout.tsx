import type { Metadata } from 'next';
import { IBM_Plex_Sans, Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { DynamicWhatsappButton } from '@/components/dynamic-whatsapp-button';
import './globals.css';
import { cn } from '@/lib/utils';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';

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

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bossasesorias.cl'),
  title: {
    default: 'BOSS Asesorías — Bienestar y Gestión',
    template: '%s | BOSS ASESORÍAS',
  },
  description: 'Transforma tu empresa con asesoría experta en bienestar laboral, gestión legal y tecnología. Solicita una asesoría estratégica y potencia tu crecimiento en Chile.',
  keywords: ['bienestar laboral chile', 'asesorías empresariales integrales', 'prevención de riesgos chile', 'soluciones tecnológicas empresas', 'gestión legal y administrativa', 'consultora empresarial chile', 'asesoría estratégica personalizada'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BOSS Asesorías | Bienestar Laboral, Gestión Legal y Soluciones Tecnológicas',
    description: 'Soluciones integrales que protegen a tu equipo, optimizan tus procesos y fortalecen tu organización.',
    siteName: 'BOSS ASESORÍAS',
    locale: 'es_CL',
    type: 'website',
    url: 'https://www.bossasesorias.cl',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'BOSS Asesorías - Bienestar Laboral, Gestión Legal y Tecnología en Chile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BOSS Asesorías | Soluciones Integrales para Empresas en Chile',
    description: 'Bienestar laboral, gestión legal y tecnología para potenciar tu empresa en Chile.',
    images: ['/twitter-image.png'],
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
    "logo": "https://www.bossasesorias.cl/icon.png",
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
        {GTM_ID && (
          <Script
            id="gtm-head"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-body">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {/* Skip Link para accesibilidad WCAG 2.2 AA */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white focus:font-semibold focus:outline-none"
        >
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main" className="pt-20 md:pt-20">{children}</main>
        <Footer />
        <DynamicWhatsappButton />
        <Toaster />
        {/* Google Analytics GA4 - usar `NEXT_PUBLIC_GA_ID` en entorno de producción */}
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null}
      </body>
    </html>
  );
}
