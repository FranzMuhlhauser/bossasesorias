import type { Metadata } from 'next';
import { IBM_Plex_Sans, Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { DynamicWhatsappButton } from '@/components/dynamic-whatsapp-button';
import { AnalyticsProvider } from '@/components/analytics-provider';
import './globals.css';
import { cn } from '@/lib/utils';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';
import { HOME_TITLE } from '@/lib/site';
import { getSiteGraph, jsonLdHtml } from '@/lib/schema';

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
    // La plantilla se añade al título de CADA página. Con «| BOSS ASESORÍAS»
    // se comía 16 caracteres y todos los títulos se pasaban de los 60 que
    // muestra Google, así que la parte final se cortaba en los resultados.
    // Con «| BOSS» se recuperan 11 caracteres en las 13 páginas de golpe.
    template: '%s | BOSS',
  },
  description: 'Transforma tu empresa con asesoría experta en bienestar laboral, gestión legal y tecnología. Solicita una asesoría estratégica y potencia tu crecimiento en Chile.',
  alternates: {
    canonical: '/',
    // Avisa de que existe el feed del blog.
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  openGraph: {
    // Mismo mensaje que el <title> de la portada: los metadatos del layout son
    // los que hereda la home en og/twitter.
    title: HOME_TITLE,
    description: 'Soluciones integrales que protegen a tu equipo, optimizan tus procesos y fortalecen tu organización.',
    siteName: 'BOSS ASESORÍAS',
    locale: 'es_CL',
    type: 'website',
    url: 'https://www.bossasesorias.cl',
    // La imagen se declara con los archivos de convención
    // src/app/opengraph-image.png (+ .alt.txt) para que Next la sirva con
    // hash de contenido y URL absoluta a partir de metadataBase. No la
    // dupliques aquí: las dos declaraciones entran en conflicto.
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: 'Bienestar laboral, gestión legal y tecnología para potenciar tu empresa en Chile.',
    // Igual que en openGraph: la imagen sale de src/app/twitter-image.png.
  },
  icons: {
    // /favicon.ico ya lo inyecta Next desde src/app/favicon.ico (ICO real de
    // 16, 32 y 48 px); declararlo aquí lo duplicaba en el <head>.
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      // 150×150 reales: declararlo «any» engañaba al navegador.
      { url: '/images/logo_boss.webp', sizes: '150x150', type: 'image/webp' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
  // Grafo de marca (empresa + sitio), inyectado una sola vez para todo el sitio.
  const siteGraph = getSiteGraph();

  return (
    <html lang="es-CL" className={cn(inter.variable, ibmPlexSans.variable)} suppressHydrationWarning>
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
        <script
          id="site-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdHtml(siteGraph) }}
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
        <AnalyticsProvider>
          <Header />
          <main id="main" className="pt-20 md:pt-20">{children}</main>
          <Footer />
          <DynamicWhatsappButton />
          <Toaster />
        </AnalyticsProvider>
        {/* Google Analytics GA4 - usar `NEXT_PUBLIC_GA_ID` en entorno de producción */}
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null}
      </body>
    </html>
  );
}
