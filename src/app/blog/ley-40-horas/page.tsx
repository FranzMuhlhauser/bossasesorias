import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb';
import { Calendar, User, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Ley de 40 Horas 2026: Guía para Empresas',
  description: 'Guía completa sobre la Ley 21.561: reducción a 42 horas semanales en Chile. Requisitos, plazos, impacto en remuneraciones y cómo preparar tu empresa.',
  keywords: ['ley de 40 horas chile 2026', '42 horas semanales chile', 'ley 21.561', 'jornada laboral chile', 'reducción jornada laboral'],
  alternates: {
    canonical: '/blog/ley-40-horas',
  },
  openGraph: {
    title: 'Ley de 40 Horas en Chile 2026: Guía Completa para Empresas',
    description: 'Todo lo que necesitas saber sobre la implementación de las 42 horas semanales en Chile: requisitos, plazos y cómo preparar tu empresa.',
    type: 'article',
    publishedTime: '2026-08-15T10:00:00Z',
    authors: ['BOSS Asesorías'],
    images: ['/images/news-40-hrs.webp'],
  },
};

const breadcrumbItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Ley de 40 Horas', href: '/blog/ley-40-horas' },
];

const faqs = [
  {
    question: '¿Cuándo entra en vigencia la jornada de 42 horas en Chile?',
    answer: 'La reducción a 42 horas semanales rige desde el 26 de abril de 2026 para empresas de más de 200 trabajadores, y se extiende progresivamente a empresas menores según el calendario establecido en la Ley 21.561.',
  },
  {
    question: '¿Cómo afecta la Ley de 40 Horas al cálculo de remuneraciones?',
    answer: 'La reducción de horas impacta el cálculo de sueldo base, horas extras y turnos. Las empresas deben recalcular remuneraciones, ajustar turnos y actualizar contratos para cumplir sin afectar la productividad.',
  },
  {
    question: '¿Qué multas aplican por no cumplir la Ley de 40 Horas?',
    answer: 'La Dirección del Trabajo puede fiscalizar y aplicar multas por incumplimiento. La implementación debe quedar bien acordada y respaldada por escrito entre empleador y trabajadores.',
  },
  {
    question: '¿Cómo preparar mi empresa para las 42 horas semanales?',
    answer: 'Se recomienda un diagnóstico de procesos, redistribución de turnos, revisión de contratos y capacitación de equipos. Un consultor especializado puede acelerar la implementación y evitar contingencias.',
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
  headline: 'Ley de 40 Horas en Chile 2026: Cómo Implementar las 42 Horas Semanales',
  description: 'Guía completa sobre la Ley 21.561: reducción a 42 horas semanales en Chile.',
  image: '/images/news-40-hrs.webp',
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
    '@id': 'https://www.bossasesorias.cl/blog/ley-40-horas',
  },
  inLanguage: 'es-CL',
};

export default function Ley40HorasPage() {
  return (
    <>
      <script id="article-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script id="faq-40-horas-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white">
        <Image
          src="/images/news-40-hrs.webp"
          alt="Implementación de la Ley de 40 Horas en empresas chilenas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-10 container mx-auto max-w-[800px] px-6">
          <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 15 agosto 2026</span>
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> BOSS Asesorías</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 10 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Ley de 40 Horas en Chile 2026: Cómo Implementar las 42 Horas Semanales</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Todo lo que necesitas saber sobre la implementación de la Ley 21.561, sus plazos, requisitos y cómo preparar tu empresa.
          </p>
        </div>
      </section>

      <Breadcrumb items={breadcrumbItems} />

      {/* Contenido del artículo */}
      <article className="py-16 md:py-20 bg-background">
        <div className="container mx-auto max-w-[800px] px-6">

          {/* Respuesta directa (AEO) */}
          <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-6 mb-10">
            <p className="text-lg font-medium text-foreground">
              <strong>En resumen:</strong> La Ley 21.561 reduce la jornada laboral a 42 horas semanales en Chile. Para2026, las empresas de más de 200 trabajadores ya deben tener la implementación completa. Las empresas menores seguirán el calendario progresivo. El incumplimiento puede resultar en fiscalizaciones y multas de la Dirección del Trabajo.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <h2 className="text-2xl font-bold text-primary">¿Qué es la Ley de 40 Horas y por qué importa a tu empresa?</h2>
            <p>
              La Ley 21.561, conocida como &quot;Ley de 40 Horas&quot;, establece la reducción progresiva de la jornada laboral semanal en Chile desde las 45 horas hasta las 40 horas. En 2026, el hito clave es la implementación de <strong>42 horas semanales</strong> para empresas con más de 200 trabajadores, mientras que las empresas menores se sumarán de forma gradual según el calendario normativo.
            </p>
            <p>
              Esta reforma no es solo un cambio de horarios: afecta directamente el cálculo de remuneraciones, la planificación de turnos, los contratos laborales y la productividad operativa. Las empresas que no se preparen a tiempo enfrentan riesgos de fiscalización y multas por parte de la Dirección del Trabajo.
            </p>

            <h2 className="text-2xl font-bold text-primary">¿Cómo afecta la implementación de 42 horas a las remuneraciones?</h2>
            <p>
              La reducción de horas impacta el sueldo base, las horas extraordinarias y la estructura de turnos. Las empresas deben:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Recalcular el sueldo proporcional a la nueva jornada</li>
              <li>Ajustar los turnos para mantener la cobertura operativa</li>
              <li>Revisar y actualizar los contratos de trabajo</li>
              <li>Verificar que las horas extras se calculen correctamente bajo la nueva base</li>
            </ul>
            <p>
              Un error común es asumir que la reducción es solo un cambio de horario. En realidad, la Dirección del Trabajo exige que la implementación quede <strong>bien acordada y respaldada por escrito</strong> entre empleador y trabajadores.
            </p>

            <h2 className="text-2xl font-bold text-primary">¿Cuáles son los plazos y requisitos para 2026?</h2>
            <p>
              El calendario de implementación es el siguiente:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Empresas con más de 200 trabajadores:</strong> 42 horas semanales desde el 26 de abril de 2026</li>
              <li><strong>Empresas de 101 a 200 trabajadores:</strong> 42 horas desde abril 2027</li>
              <li><strong>Empresas de 51 a 100 trabajadores:</strong> 42 horas desde abril 2028</li>
              <li><strong>Empresas de 11 a 50 trabajadores:</strong> 42 horas desde abril 2029</li>
              <li><strong>Empresas de hasta 10 trabajadores:</strong> 42 horas desde abril 2030</li>
            </ul>
            <p>
              Para cada empresa, el requisito fundamental es que la reducción quede documentada en el reglamento interno de orden, higiene y seguridad, o en un acuerdo colectivo vigente.
            </p>

            <h2 className="text-2xl font-bold text-primary">¿Qué sanciones aplica la Dirección del Trabajo?</h2>
            <p>
              La autoridad laboral puede fiscalizar a las empresas en cualquier momento. El incumplimiento de la jornada máxima semanal puede resultar en multas que van desde las 1 a 10 Unidades Tributarias Mensuales (UTM), dependiendo de la gravedad y reincidencia. Además, la implementación debe estar respaldada por documentación que pueda ser presentada durante una auditoría.
            </p>

            <h2 className="text-2xl font-bold text-primary">¿Cómo preparar tu empresa de forma efectiva?</h2>
            <p>
              La preparación implica un proceso estructurado:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Diagnóstico de procesos:</strong> Identificar qué áreas necesitan redistribución de turnos</li>
              <li><strong>Revisión de contratos:</strong> Actualizar las cláusulas de jornada laboral</li>
              <li><strong>Cálculo de remuneraciones:</strong> Recalcular sueldos y beneficios bajo la nueva base</li>
              <li><strong>Capacitación de equipos:</strong> Asegurar que gerentes y jefes comprendan los cambios</li>
              <li><strong>Documentación:</strong> Registrar todos los acuerdos en el reglamento interno</li>
            </ol>
            <p>
              Contar con un consultor especializado puede reducir significativamente los tiempos de implementación y evitar errores costosos.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary/5 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-primary mb-4">¿Necesitas ayuda con la implementación?</h3>
            <p className="text-muted-foreground mb-6">En BOSS Asesorías te acompañamos en todo el proceso: diagnóstico, ajuste de contratos, cálculo de remuneraciones y documentación.</p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/soluciones/gestion-legal">Consultar por Gestión Legal →</Link>
            </Button>
          </div>

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-primary mb-8">Preguntas Frecuentes sobre la Ley de 40 Horas</h2>
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

          {/* Artículos relacionados */}
          <div className="mt-16 border-t border-border pt-8">
            <h3 className="text-lg font-semibold text-primary mb-4">Artículos Relacionados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/blog/ley-karin" className="block p-4 rounded-lg border border-border hover:border-accent transition-colors">
                <span className="font-semibold text-foreground hover:text-accent">Ley Karin: Protección en el Trabajo →</span>
              </Link>
              <Link href="/blog/ciberseguridad-chile" className="block p-4 rounded-lg border border-border hover:border-accent transition-colors">
                <span className="font-semibold text-foreground hover:text-accent">Ciberseguridad en Chile 2026 →</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
