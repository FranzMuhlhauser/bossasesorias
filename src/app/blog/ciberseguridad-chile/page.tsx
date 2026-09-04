import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Breadcrumb } from '@/components/breadcrumb';
import { Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Ciberseguridad en Chile 2026: Ley Marco y Obligaciones Empresariales',
  description: 'Guía sobre la Ley Marco de Ciberseguridad (Ley 21.663): obligaciones, sanciones y cómo proteger tu empresa de ataques digitales en Chile.',
  keywords: ['ciberseguridad chile 2026', 'ley marco ciberseguridad', 'ley 21.663', 'protección datos empresas', 'ransomware chile'],
  alternates: {
    canonical: '/blog/ciberseguridad-chile',
  },
  openGraph: {
    title: 'Ciberseguridad en Chile 2026: Ley Marco y Obligaciones',
    description: 'Todo lo que tu empresa necesita saber sobre ciberseguridad, la Ley 21.663 y cómo protegerse.',
    type: 'article',
    publishedTime: '2026-08-15T10:00:00Z',
    authors: ['BOSS Asesorías'],
    images: ['/images/news-ciberseguridad.webp'],
  },
};

const breadcrumbItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Ciberseguridad', href: '/blog/ciberseguridad-chile' },
];

const faqs = [
  {
    question: '¿Qué obliga la Ley Marco de Ciberseguridad a las empresas?',
    answer: 'La Ley 21.663 obliga a empresas del sector crítico a implementar planes de seguridad, reportar incidentes al CSIRT y designar un encargado de ciberseguridad. Aplica progresivamente según el tamaño.',
  },
  {
    question: '¿Qué empresas están obligadas por la Ley de Ciberseguridad?',
    answer: 'Inicialmente aplica a empresas del sector crítico (banca, salud, energía, telecomunicaciones). La implementación es progresiva y se extiende a otras industrias según el calendario normativo.',
  },
  {
    question: '¿Cómo proteger mi empresa del ransomware?',
    answer: 'Se recomienda respaldos automatizados, segmentación de red, capacitación de empleados, autenticación multifactor y un plan de respuesta a incidentes documentado y probado.',
  },
  {
    question: '¿Qué es un CSIRT y por qué es importante?',
    answer: 'El CSIRT (Computer Security Incident Response Team) es el equipo encargado de detectar, responder y recuperarse de incidentes de ciberseguridad. La Ley 21.663 requiere su designación en empresas del sector crítico.',
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
  headline: 'Ciberseguridad en Chile 2026: Ley Marco y Obligaciones Empresariales',
  description: 'Guía sobre la Ley Marco de Ciberseguridad y obligaciones para empresas.',
  image: '/images/news-ciberseguridad.webp',
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
    '@id': 'https://www.bossasesorias.cl/blog/ciberseguridad-chile',
  },
  inLanguage: 'es-CL',
};

export default function CiberseguridadPage() {
  return (
    <>
      <Script id="article-ciber-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Script id="faq-ciber-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white">
        <Image
          src="/images/news-ciberseguridad.webp"
          alt="Ciberseguridad empresarial en Chile"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-10 container mx-auto max-w-[800px] px-6">
          <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 15 agosto 2026</span>
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> BOSS Asesorías</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 9 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Ciberseguridad en Chile 2026: Ley Marco y Obligaciones</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Guía completa sobre la Ley 21.663, protección de datos y cómo blindar tu empresa contra amenazas digitales.
          </p>
        </div>
      </section>

      <Breadcrumb items={breadcrumbItems} />

      <article className="py-16 md:py-20 bg-background">
        <div className="container mx-auto max-w-[800px] px-6">

          <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-6 mb-10">
            <p className="text-lg font-medium text-foreground">
              <strong>En resumen:</strong> La ciberseguridad dejó de ser opcional para las empresas chilenas. La Ley 21.663 obliga a implementar planes de seguridad, reportar incidentes al CSIRT y designar encargados. Los ataques ransomware aumentaron un 150% en Chile entre2024 y2025.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <h2 className="text-2xl font-bold text-primary">¿Por qué la ciberseguridad es prioritaria para las empresas chilenas?</h2>
            <p>
              Chile ha experimentado un aumento significativo en ataques cibernéticos. Según informes de PwC y el CSIRT.GOV, los ataques ransomware aumentaron un <strong>150% entre 2024 y 2025</strong>, y las empresas medianas y pequeñas son las más vulnerables. La razón es clara: muchas carecen de planes de seguridad formalizados.
            </p>
            <p>
              La Ley Marco de Ciberseguridad (Ley 21.663), promulgada en 2024, establece un marco normativo que obliga a las empresas del sector crítico a implementar medidas concretas de protección digital.
            </p>

            <h2 className="text-2xl font-bold text-primary">¿Qué obliga la Ley 21.663 a las empresas?</h2>
            <p>
              La Ley 21.663 establece las siguientes obligaciones para las empresas del sector crítico:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Plan de ciberseguridad:</strong> Documento formal que describe las políticas, procedimientos y controles de seguridad</li>
              <li><strong>Encargado de ciberseguridad:</strong> Designación de una persona responsable de la seguridad digital</li>
              <li><strong>Reporte de incidentes:</strong> Comunicación obligatoria de incidentes graves al CSIRT.GOV dentro de plazos establecidos</li>
              <li><strong>Evaluación de riesgos:</strong> Auditorías periódicas de la infraestructura tecnológica</li>
              <li><strong>Protección de datos:</strong> Cumplimiento de la Ley 19.628 de protección de datos personales</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">¿Cómo proteger mi empresa del ransomware?</h2>
            <p>
              El ransomware es la amenaza más prevalente en Chile. Para proteger tu empresa:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Respaldos automatizados:</strong> Copias diarias de información crítica almacenadas en ubicaciones separadas</li>
              <li><strong>Segmentación de red:</strong> Limitar el movimiento lateral de los atacantes</li>
              <li><strong>Autenticación multifactor (MFA):</strong> Obligatoria para accesos remotos y administrativos</li>
              <li><strong>Capacitación de empleados:</strong> El 90% de los ataques exitosos comienza con phishing</li>
              <li><strong>Plan de respuesta a incidentes:</strong> Procedimientos documentados y probados</li>
            </ol>

            <h2 className="text-2xl font-bold text-primary">¿Qué es el CSIRT y por qué importa?</h2>
            <p>
              El CSIRT.GOV (Computer Security Incident Response Team) es el equipo gubernamental encargado de recibir y gestionar reportes de incidentes de ciberseguridad. La Ley 21.663 obliga a las empresas del sector crítico a reportar incidentes graves al CSIRT dentro de las primeras 72 horas.
            </p>
            <p>
              Las empresas que no reportan incidentes pueden enfrentar sanciones administrativas y legales, además de perder la confianza de sus clientes y socios comerciales.
            </p>

            <h2 className="text-2xl font-bold text-primary">Pasos concretos para mejorar la ciberseguridad de tu empresa</h2>
            <p>
              Un plan de ciberseguridad efectivo no requiere una inversión millonaria. Los pasos fundamentales son:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Realizar una auditoría de seguridad inicial</li>
              <li>Implementar controles básicos (MFA, respaldos, capacitación)</li>
              <li>Documentar un plan de respuesta a incidentes</li>
              <li>Realizar simulacros periódicos</li>
              <li>Actualizar y revisar el plan al menos una vez al año</li>
            </ul>
          </div>

          <div className="mt-12 bg-primary/5 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-primary mb-4">¿Necesitas una auditoría de ciberseguridad?</h3>
            <p className="text-muted-foreground mb-6">En BOSS Asesorías evaluamos la infraestructura tecnológica de tu empresa y diseñamos un plan de protección personalizado.</p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/soluciones/tecnologia">Consultar por Tecnología →</Link>
            </Button>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold text-primary mb-8">Preguntas Frecuentes sobre Ciberseguridad</h2>
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
              <Link href="/blog/ia-cultura-organizacional" className="block p-4 rounded-lg border border-border hover:border-accent transition-colors">
                <span className="font-semibold text-foreground hover:text-accent">IA y Cultura Organizacional →</span>
              </Link>
              <Link href="/blog/ley-40-horas" className="block p-4 rounded-lg border border-border hover:border-accent transition-colors">
                <span className="font-semibold text-foreground hover:text-accent">Ley de 40 Horas: Guía Completa →</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
