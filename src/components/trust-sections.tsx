import Image from 'next/image';
import { Quote, Building2 } from 'lucide-react';
import { casosDeExito, equipo, testimonios } from '@/lib/trust';

/**
 * Secciones de confianza. Cada una devuelve `null` mientras su arreglo en
 * src/lib/trust.ts esté vacío, de modo que hoy el HTML no cambia.
 *
 * Sin JSON-LD de Review/AggregateRating: solo se declaran cuando existan
 * reseñas verificables en la propia página.
 */

/** '2026-03-14' → '14 de marzo de 2026' (sin depender de la zona horaria). */
function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  if (!year || !month || !day) return iso;
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.toLocaleDateString('es-CL', {
    timeZone: 'UTC',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function TestimonialsSection() {
  if (testimonios.length === 0) return null;

  return (
    <section id="testimonios" aria-labelledby="heading-testimonios" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-12">
          <h2 id="heading-testimonios" className="text-3xl md:text-4xl font-bold text-primary">
            Lo que dicen nuestros clientes
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonios.map((testimonio, index) => (
            <figure
              key={`${testimonio.name}-${index}`}
              className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="h-6 w-6 text-accent mb-4" aria-hidden="true" />
              <blockquote className="flex-1 text-muted-foreground leading-relaxed">
                {testimonio.quote}
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold text-foreground">{testimonio.name}</span>
                <span className="block text-muted-foreground">
                  {testimonio.role}, {testimonio.company}
                </span>
                <time dateTime={testimonio.date} className="mt-1 block text-muted-foreground">
                  {formatDate(testimonio.date)}
                </time>
                {testimonio.source && (
                  <a
                    href={testimonio.source}
                    className="mt-2 inline-block text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver fuente
                  </a>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudiesSection() {
  if (casosDeExito.length === 0) return null;

  return (
    <section id="casos" aria-labelledby="heading-casos" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-12">
          <Building2 className="h-12 w-12 text-accent mx-auto mb-4" aria-hidden="true" />
          <h2 id="heading-casos" className="text-3xl md:text-4xl font-bold text-primary">
            Casos de éxito
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {casosDeExito.map((caso, index) => (
            <article
              key={`${caso.title}-${index}`}
              className="rounded-lg border border-border bg-background p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">{caso.sector}</p>
              <h3 className="mt-2 text-xl font-semibold text-primary">{caso.title}</h3>
              <dl className="mt-4 space-y-3 text-sm text-muted-foreground">
                <div>
                  <dt className="font-semibold text-foreground">Problema</dt>
                  <dd>{caso.problem}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Solución</dt>
                  <dd>{caso.solution}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Resultado</dt>
                  <dd>{caso.result}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  if (equipo.length === 0) return null;

  return (
    <section id="equipo" aria-labelledby="heading-equipo" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-12">
          <h2 id="heading-equipo" className="text-3xl md:text-4xl font-bold text-primary">
            Nuestro equipo
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {equipo.map((miembro) => (
            <article
              key={miembro.name}
              className="rounded-lg border border-border bg-card p-6 shadow-sm"
            >
              <Image
                src={miembro.photo}
                alt={miembro.name}
                width={200}
                height={200}
                className="h-24 w-24 rounded-full object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-primary">{miembro.name}</h3>
              <p className="text-sm font-medium text-accent">{miembro.role}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{miembro.bio}</p>
              {miembro.sameAs.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-3 text-sm">
                  {miembro.sameAs.map((url) => (
                    <li key={url}>
                      <a
                        href={url}
                        className="text-accent hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Perfil
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
