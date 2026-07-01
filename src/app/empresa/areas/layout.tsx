import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Áreas de Especialización | Industrial, Legal, Tecnológica y Cultura',
  description: 'Explora nuestras cuatro áreas de especialización: Industrial y Operativa, Legal y Administrativa, Digital y Tecnológica, y Cultura y Desarrollo Organizacional. Soluciones integrales para tu empresa en Chile.',
  keywords: ['áreas de especialización', 'consultoría industrial', 'gestión legal empresas', 'soluciones tecnológicas', 'cultura organizacional chile', 'boss asesorías áreas'],
};

export default function AreasLayout({ children }: { children: React.ReactNode }) {
  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BOSS Asesorías",
    "url": "https://www.bossasesorias.cl",
    "description": "Áreas de especialización: Industrial y Operativa, Legal y Administrativa, Digital y Tecnológica, y Cultura y Desarrollo Organizacional.",
    "about": {
      "@type": "Organization",
      "name": "BOSS Asesorías",
      "areaServed": { "@type": "Country", "name": "Chile" }
    }
  };

  return (
    <>
      <Script id="website-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }} />
      {children}
    </>
  );
}
