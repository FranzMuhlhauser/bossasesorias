import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb';
import { Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Ley Karin: Obligaciones para Empresas',
  description: 'Guía completa sobre la Ley 21.643 (Ley Karin): protocolos de salud mental, prevención de acoso laboral y obligaciones para empresas en Chile.',
  keywords: ['ley karin chile', 'ley 21.643', 'protocolo salud mental empresas', 'acoso laboral chile', 'prevención riesgos psicosociales'],
  alternates: {
    canonical: '/blog/ley-karin',
  },
  openGraph: {
    title: 'Ley Karin en Chile 2026: Obligaciones para Empresas',
    description: 'Todo lo que necesitas saber sobre la Ley Karin: protocolos, obligaciones y cómo proteger a tu equipo.',
    type: 'article',
    publishedTime: '2026-08-15T10:00:00Z',
    authors: ['BOSS Asesorías'],
    images: ['/images/news-ley-karin.webp'],
  },
};

const breadcrumbItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Ley Karin', href: '/blog/ley-karin' },
];

const faqs = [
  {
    question: '¿Qué obliga la Ley Karin a las empresas?',
    answer: 'La Ley Karin obliga a todas las empresas a implementar protocolos de salud mental, prevención de acoso laboral y sexual, capacitación obligatoria y canales de denuncia seguros para los trabajadores.',
  },
  {
    question: '¿A qué empresas aplica la Ley Karin?',
    answer: 'La Ley Karin aplica a todas las empresas en Chile, sin importar su tamaño. Desde microempresas hasta grandes corporaciones deben implementar protocolos de prevención y denuncia.',
  },
  {
    question: '¿Qué sanciones tiene el incumplimiento de la Ley Karin?',
    answer: 'El incumplimiento puede resultar en multas de la Dirección del Trabajo, fiscalizaciones y acciones legales. Las empresas que no cuenten con protocolos pueden enfrentar sanciones de hasta 50 UTM.',
  },
  {
    question: '¿Cómo implementar un protocolo de salud mental?',
    answer: 'Se requiere un diagnóstico del clima laboral, diseño de protocolos de prevención, implementación de canales de denuncia, capacitación a todo el personal y seguimiento periódico.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ley Karin en Chile 2026: Obligaciones para Empresas y Cómo Cumplirla',
  description: 'Guía completa sobre la Ley 21.643 (Ley Karin) y sus obligaciones para empresas.',
  image: '/images/news-ley-karin.webp',
  datePublished: '2026-08-15T10:00:00Z',
  dateModified: '2026-08-15T10:00:00Z',
  author: {
    '@type': 'Organization',
    name: 'BOSS Asesorías',
    url: 'https://www.bossasesorias.cl',
  },
  publisher: {
    '@type': 'Organization',
    name: 'BOSS Asesorías',
    url: 'https://www.bossasesorias.cl',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.bossasesorias.cl/images/logo_boss.webp',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.bossasesorias.cl/blog/ley-karin',
  },
  inLanguage: 'es-CL',
};

export default function LeyKarinPage() {
  return (
    <>
      <script id="article-karin-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script id="faq-karin-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white">
        <Image
          src="/images/news-ley-karin.webp"
          alt="Implementación de la Ley Karin en empresas chilenas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-10 container mx-auto max-w-[800px] px-6">
          <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 15 agosto 2026</span>
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> BOSS Asesorías</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 8 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Ley Karin en Chile 2026: Obligaciones para Empresas</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Todo lo que necesitas saber sobre la Ley 21.643, protocolos de salud mental y prevención de acoso laboral.
          </p>
        </div>
      </section>

      <Breadcrumb items={breadcrumbItems} />

      <article className="py-16 md:py-20 bg-background">
        <div className="container mx-auto max-w-[800px] px-6">

          <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-6 mb-10">
            <p className="text-lg font-medium text-foreground">
              <strong>En resumen:</strong> La Ley 21.643 (Ley Karin) obliga a todas las empresas chilenas a implementar protocolos de prevención de acoso laboral y sexual, salud mental y canales de denuncia seguros. El incumplimiento puede acarrear multas de hasta 50 UTM.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <h2 className="text-2xl font-bold text-primary">¿Qué es la Ley Karin y por qué es obligatoria para tu empresa?</h2>
            <p>
              La Ley Karin (Ley 21.643) es la normativa chilena más completa en materia de prevención de acoso laboral, acoso sexual, y promoción de la salud mental en el trabajo. Promulgada en2024, establece obligaciones concretas para todas las empresas del país, sin importar su tamaño.
            </p>
            <p>
              Esta ley representa un cambio fundamental en la forma en que las empresas abordan el bienestar de sus trabajadores. Ya no basta con cumplir las normativas de seguridad física: la salud mental y la prevención de comportamientos tóxicos son ahora una obligación legal.
            </p>

            <h2 className="text-2xl font-bold text-primary">¿Qué obligaciones concretas establece la Ley Karin?</h2>
            <p>
              La ley establece las siguientes obligaciones para todas las empresas:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Protocolo de prevención de acoso laboral y sexual:</strong> Documento oficial que describe las conductas prohibidas y el procedimiento de denuncia</li>
              <li><strong>Política de salud mental:</strong> Programas de prevención, detección y acompañamiento de riesgos psicosociales</li>
              <li><strong>Canales de denuncia seguros:</strong> Mecanismos confidenciales para que los trabajadores reporten incidentes</li>
              <li><strong>Capacitación obligatoria:</strong> Todos los trabajadores deben recibir formación sobre prevención y protocolos</li>
              <li><strong>Comité Paritario de Seguridad:</strong> Participación activa en la implementación de los protocolos</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">¿Cómo implementar los protocolos de salud mental?</h2>
            <p>
              La implementación requiere un proceso estructurado:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Diagnóstico del clima laboral:</strong> Evaluar la percepción de los trabajadores sobre seguridad psicológica</li>
              <li><strong>Diseño de protocolos:</strong> Crear documentos claros que definan conductas prohibidas y procedimientos</li>
              <li><strong>Implementación de canales:</strong> Establecer medios seguros y confidenciales para denuncias</li>
              <li><strong>Capacitación:</strong> Formar a todo el personal, desde gerencia hasta operaciones</li>
              <li><strong>Seguimiento:</strong> Realizar auditorías periódicas y encuestas de satisfacción</li>
            </ol>

            <h2 className="text-2xl font-bold text-primary">¿Qué pasa si no cumplo con la Ley Karin?</h2>
            <p>
              La Dirección del Trabajo puede fiscalizar a las empresas en cualquier momento. Las sanciones incluyen multas de hasta 50 Unidades Tributarias Mensuales (UTM), que pueden representar millones de pesos. Además, las empresas sin protocolos enfrentan un riesgo significativo de demandas laborales por parte de trabajadores afectados.
            </p>

            <h2 className="text-2xl font-bold text-primary">Beneficios de implementar la Ley Karin más allá del cumplimiento</h2>
            <p>
              Más allá de la obligación legal, las empresas que implementan protocolos de salud mental experimentan beneficios medibles:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reducción de ausentismo y rotación de personal</li>
              <li>Mejora en el clima laboral y la productividad</li>
              <li>Disminución de demandas y conflictos internos</li>
              <li>Fortalecimiento de la marca empleadora</li>
            </ul>
          </div>

          <div className="mt-12 bg-primary/5 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-primary mb-4">¿Necesitas implementar protocolos de salud mental?</h3>
            <p className="text-muted-foreground mb-6">En BOSS Asesorías diseñamos e implementamos protocolos completos de Ley Karin para empresas de todos los tamaños.</p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/soluciones/bienestar-seguridad">Consultar por Bienestar Laboral →</Link>
            </Button>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold text-primary mb-8">Preguntas Frecuentes sobre la Ley Karin</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`faq-${index}`} key={index}>
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <div className="mt-16 border-t border-border pt-8">
            <h3 className="text-lg font-semibold text-primary mb-4">Artículos Relacionados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/blog/ley-40-horas" className="block p-4 rounded-lg border border-border hover:border-accent transition-colors">
                <span className="font-semibold text-foreground hover:text-accent">Ley de 40 Horas: Guía Completa →</span>
              </Link>
              <Link href="/blog/ia-cultura-organizacional" className="block p-4 rounded-lg border border-border hover:border-accent transition-colors">
                <span className="font-semibold text-foreground hover:text-accent">IA y Cultura Organizacional →</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
