import { Breadcrumb } from '@/components/breadcrumb';
import { TeamSection } from '@/components/trust-sections';
import { absoluteUrl, jsonLdHtml, organizationRef } from '@/lib/schema';
import { equipo } from '@/lib/trust';

/**
 * Contenido de /empresa/equipo, listo para publicar.
 *
 * Mientras `equipo` esté vacío NO existe la ruta: se comprobó que una página
 * que corta con `notFound()` en Next 16 se sirve con estado 200 y cuerpo de
 * "página no encontrada" (soft 404, justo lo que Google penaliza).
 *
 * TODO(publicar): cuando src/lib/trust.ts tenga equipo real, crear
 * `src/app/empresa/equipo/page.tsx` con:
 *
 *   import type { Metadata } from 'next';
 *   export { default } from '@/components/team-page';
 *   export const metadata: Metadata = {
 *     title: 'Equipo',
 *     description: 'Conoce al equipo de BOSS Asesorías.',
 *     alternates: { canonical: '/empresa/equipo' },
 *   };
 *
 * El sitemap y /llms.txt ya incluyen la URL de forma automática en cuanto haya
 * datos, así que la ruta debe crearse en el mismo cambio.
 */
export default function TeamPage() {
  const equipoJsonLd = {
    '@context': 'https://schema.org',
    '@graph': equipo.map((miembro) => ({
      '@type': 'Person',
      name: miembro.name,
      jobTitle: miembro.role,
      description: miembro.bio,
      image: absoluteUrl(miembro.photo),
      sameAs: miembro.sameAs,
      worksFor: organizationRef,
    })),
  };

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Inicio', href: '/' },
          { label: 'Empresa', href: '/empresa/por-que-boss' },
          { label: 'Equipo', href: '/empresa/equipo' },
        ]}
      />
      <script
        id="equipo-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(equipoJsonLd) }}
      />

      <section className="pt-12 md:pt-16">
        <div className="container mx-auto max-w-[1200px] px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Equipo</h1>
        </div>
      </section>

      <TeamSection />
    </>
  );
}
