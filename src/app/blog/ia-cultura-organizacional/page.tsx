import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Breadcrumb } from '@/components/breadcrumb';
import { Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'IA y Cultura Organizacional: Cómo la Inteligencia Artificial Transforma el Trabajo',
  description: 'Cómo integrar inteligencia artificial en la cultura organizacional de tu empresa. Beneficios, desafíos y casos de éxito en Chile.',
  keywords: ['inteligencia artificial empresas chile', 'IA cultura organizacional', 'automatización procesos', 'transformación digital empresas', 'IA en el trabajo'],
  alternates: {
    canonical: '/blog/ia-cultura-organizacional',
  },
  openGraph: {
    title: 'IA y Cultura Organizacional: Cómo Transformar tu Empresa',
    description: 'Guía práctica para integrar IA en la cultura de tu empresa y potenciar el talento humano.',
    type: 'article',
    publishedTime: '2026-08-15T10:00:00Z',
    authors: ['BOSS Asesorías'],
    images: ['/images/news-ia-cultura.webp'],
  },
};

const breadcrumbItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'IA y Cultura', href: '/blog/ia-cultura-organizacional' },
];

const faqs = [
  {
    question: '¿Cómo puede la IA mejorar la cultura organizacional?',
    answer: 'La IA automatiza tareas repetitivas, libera tiempo para trabajo estratégico, mejora la comunicación interna y permite decisiones basadas en datos. Esto fortalece una cultura de innovación y eficiencia.',
  },
  {
    question: '¿La IA reemplazará a los trabajadores?',
    answer: 'La IA no reemplaza personas, transforma roles. Libera a los trabajadores de tareas monótonas para que se enfoquen en creatividad, relación con clientes y trabajo estratégico.',
  },
  {
    question: '¿Qué empresas chilenas ya usan IA exitosamente?',
    answer: 'Empresas del sector retail, banca y salud en Chile ya implementan IA para atención al cliente, análisis de datos y automatización de procesos administrativos con resultados medibles.',
  },
  {
    question: '¿Cómo empezar a integrar IA en mi empresa?',
    answer: 'Comienza con un diagnóstico de procesos, identifica tareas repetitivas, implementa una solución piloto y mide resultados antes de escalar. Un consultor puede acelerar el proceso.',
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
  headline: 'IA y Cultura Organizacional: Cómo la Inteligencia Artificial Transforma el Trabajo',
  description: 'Cómo integrar inteligencia artificial en la cultura organizacional.',
  image: '/images/news-ia-cultura.webp',
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
    '@id': 'https://www.bossasesorias.cl/blog/ia-cultura-organizacional',
  },
  inLanguage: 'es-CL',
};

export default function IaCulturaPage() {
  return (
    <>
      <Script id="article-ia-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Script id="faq-ia-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white">
        <Image
          src="/images/news-ia-cultura.webp"
          alt="Inteligencia artificial aplicada a la cultura organizacional"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-10 container mx-auto max-w-[800px] px-6">
          <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 15 agosto 2026</span>
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> BOSS Asesorías</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 7 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">IA y Cultura Organizacional: Cómo Transformar tu Empresa</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Guía práctica para integrar inteligencia artificial en la cultura de tu empresa y potenciar el talento humano.
          </p>
        </div>
      </section>

      <Breadcrumb items={breadcrumbItems} />

      <article className="py-16 md:py-20 bg-background">
        <div className="container mx-auto max-w-[800px] px-6">

          <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-6 mb-10">
            <p className="text-lg font-medium text-foreground">
              <strong>En resumen:</strong> La inteligencia artificial no reemplaza personas, transforma roles. Las empresas que integran IA en su cultura organizacional reportan un aumento del 30-40% en productividad y una mejora significativa en la satisfacción laboral al liberar a los equipos de tareas repetitivas.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <h2 className="text-2xl font-bold text-primary">¿Por qué la IA es una oportunidad para la cultura organizacional?</h2>
            <p>
              La inteligencia artificial está transformando la forma en que las empresas operan, pero su verdadero potencial no está en la tecnología en sí, sino en cómo cambia la <strong>cultura de trabajo</strong>. Cuando la IA se integra correctamente, los trabajadores dejan de dedicar horas a tareas repetitivas y se enfocan en actividad de mayor valor: creatividad, relación con clientes y estrategia.
            </p>
            <p>
              En Chile, las empresas que lideran la adopción de IA no son necesariamente las más grandes, sino las que mejor gestionan el cambio cultural que acompaña la implementación tecnológica.
            </p>

            <h2 className="text-2xl font-bold text-primary">¿Cómo impacta la IA en los roles y responsabilidades?</h2>
            <p>
              La IA transforma los roles de tres maneras principales:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Automatización de tareas repetitivas:</strong> Procesamiento de documentos, clasificación de correos, generación de reportes</li>
              <li><strong>Análisis de datos:</strong> Identificación de patrones, predicción de tendencias, detección de anomalías</li>
              <li><strong>Asistencia inteligente:</strong> Chatbots para atención al cliente, asistentes virtuales para consultas internas</li>
            </ul>
            <p>
              El resultado es que los trabajadores se convierten en <strong>supervisores de procesos automatizados</strong> en vez de ejecutores de tareas manuales. Esto requiere una cultura organizacional que valore el aprendizaje continuo y la adaptación.
            </p>

            <h2 className="text-2xl font-bold text-primary">¿Qué beneficios medibles genera la IA en las empresas?</h2>
            <p>
              Según estudios de McKinsey y Gartner, las empresas que implementan IA de forma estratégica reportan:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Aumento del <strong>30-40% en productividad</strong> en procesos administrativos</li>
              <li>Reducción del <strong>25% en tiempo de respuesta</strong> al cliente</li>
              <li>Disminución del <strong>15-20% en costos operativos</strong></li>
              <li>Mejora en la <strong>satisfacción laboral</strong> al eliminar tareas monótonas</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">¿Cómo integrar IA en la cultura de mi empresa?</h2>
            <p>
              La integración exitosa requiere un enfoque humano-first:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Diagnóstico de procesos:</strong> Identificar qué tareas consumen más tiempo y son candidatas a automatización</li>
              <li><strong>Comunicación interna:</strong> Explicar a los trabajadores que la IA es una herramienta, no una amenaza</li>
              <li><strong>Piloto controlado:</strong> Implementar una solución en un área específica y medir resultados</li>
              <li><strong>Capacitación:</strong> Formar a los equipos en el uso de las nuevas herramientas</li>
              <li><strong>Escalamiento:</strong> Expandir la implementación según los resultados del piloto</li>
            </ol>

            <h2 className="text-2xl font-bold text-primary">El papel del liderazgo en la transformación con IA</h2>
            <p>
              La IA no se implementa sola: requiere un liderazgo que entienda tanto la tecnología como las personas. Los líderes queSuccessfulmenteLead la transformación digital comparten tres características:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comunican claramente la visión y los beneficios esperados</li>
              <li>Involucran a los equipos en el proceso de selección e implementación</li>
              <li>Miden y celebran los resultados, creando un ciclo positivo de adopción</li>
            </ul>
          </div>

          <div className="mt-12 bg-primary/5 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-primary mb-4">¿Quieres integrar IA en tu empresa?</h3>
            <p className="text-muted-foreground mb-6">En BOSS Asesorías diseñamos estrategias de transformación digital que combinan tecnología con cultura organizacional.</p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/soluciones/tecnologia">Consultar por Tecnología →</Link>
            </Button>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold text-primary mb-8">Preguntas Frecuentes sobre IA y Cultura</h2>
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
              <Link href="/blog/ciberseguridad-chile" className="block p-4 rounded-lg border border-border hover:border-accent transition-colors">
                <span className="font-semibold text-foreground hover:text-accent">Ciberseguridad en Chile 2026 →</span>
              </Link>
              <Link href="/blog/ley-karin" className="block p-4 rounded-lg border border-border hover:border-accent transition-colors">
                <span className="font-semibold text-foreground hover:text-accent">Ley Karin: Obligaciones para Empresas →</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
