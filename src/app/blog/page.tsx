import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPostsWithImage } from '@/lib/blog-posts';

/**
 * ÍNDICE DEL BLOG.
 *
 * Esta página no existía: /blog devolvía 404 aunque los cuatro artículos
 * enlazaban a ella desde su breadcrumb. Además de arreglar esos enlaces, da un
 * "hub" que reparte autoridad interna hacia los artículos.
 *
 * Al ser un componente de servidor, todo lo que hay aquí (incluido el JSON-LD)
 * viaja en el HTML inicial, así que los rastreadores que no ejecutan
 * JavaScript (los de IA) también lo leen.
 */

export const metadata: Metadata = {
  title: 'Blog: normativa laboral para empresas',
  description:
    'Guías prácticas sobre la Ley Karin, la Ley de 40 Horas, ciberseguridad y ' +
    'cultura organizacional para empresas en Chile. Sin relleno, con plazos y obligaciones.',
  keywords: [
    'blog laboral chile',
    'normativa laboral empresas',
    'ley karin',
    'ley 40 horas',
    'obligaciones empresas chile',
  ],
  alternates: {
    canonical: '/blog',
    types: { 'application/rss+xml': '/rss.xml' },
  },
};

export default function BlogIndexPage() {
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog de BOSS Asesorías',
    description:
      'Normativa laboral, prevención de riesgos, tecnología y cultura organizacional para empresas chilenas.',
    url: 'https://www.bossasesorias.cl/blog',
    inLanguage: 'es-CL',
    publisher: {
      '@type': 'Organization',
      name: 'BOSS Asesorías',
      url: 'https://www.bossasesorias.cl',
    },
    blogPost: blogPostsWithImage.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.summary,
      datePublished: post.date,
      url: `https://www.bossasesorias.cl${post.href}`,
    })),
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: blogPostsWithImage.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: post.title,
      url: `https://www.bossasesorias.cl${post.href}`,
    })),
  };

  return (
    <>
      <script
        id="blog-index-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        id="blog-itemlist-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Cabecera */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-primary text-white">
        <div className="container mx-auto max-w-[1200px] px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Blog: normativa laboral para empresas
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90">
            Análisis y guías sobre las obligaciones que afectan a tu empresa en
            Chile: leyes laborales, prevención de riesgos, ciberseguridad y
            cultura organizacional.
          </p>
        </div>
      </section>

      {/* Respuesta directa (AEO): la misma convención que usan los artículos */}
      <section className="py-12 bg-background">
        <div className="container mx-auto max-w-[800px] px-6">
          <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-6">
            <p className="text-lg font-medium text-foreground">
              <strong>En resumen:</strong> aquí publicamos guías sobre la
              normativa que obliga a las empresas chilenas, explicadas con
              plazos, montos de multas y pasos concretos. Empieza por la Ley
              Karin y la Ley de 40 Horas si tu empresa tiene trabajadores
              contratados.
            </p>
          </div>
        </div>
      </section>

      {/* Listado de artículos */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPostsWithImage.map((post) => (
              <Card
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {post.image && (
                  <div className="overflow-hidden">
                    <Image
                      src={post.image.imageUrl}
                      alt={post.image.description}
                      width={600}
                      height={340}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover w-full h-56 transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                <CardContent className="flex flex-col flex-grow p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> {post.dateLabel}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> {post.readMinutes} min
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-primary mb-3">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 text-sm flex-grow">
                    {post.summary}
                  </p>
                  <div className="mt-auto">
                    <Button
                      asChild
                      variant="link"
                      className="text-accent font-semibold p-0 self-start"
                    >
                      <Link href={post.href}>Leer artículo completo →</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-muted-foreground mb-4">
              ¿Necesitas aplicar alguna de estas obligaciones en tu empresa?
            </p>
            <Button asChild size="lg">
              <Link href="/contacto">Solicitar una asesoría</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
