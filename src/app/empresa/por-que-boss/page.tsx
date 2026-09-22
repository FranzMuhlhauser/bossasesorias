import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldCheck, Files, Cpu, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { Breadcrumb } from '@/components/breadcrumb';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '¿Por qué BOSS Asesorías? Consultoría en Chile',
  description: 'Conoce la historia y el propósito de BOSS Asesorías. Bienestar, Organización, Salud y Seguridad — los pilares de nuestra consultoría integral para empresas en Chile.',
  keywords: ['por qué boss asesorías', 'consultoría estratégica chile', 'transformación organizacional', 'pilares boss', 'bienestar organización salud seguridad'],
  alternates: {
    canonical: '/empresa/por-que-boss',
  },
};


const dimensions = [
  { 
    icon: ShieldCheck, 
    title: "Bienestar Laboral & Seguridad", 
    description: "Protección integral para tu equipo, asegurando un ambiente de trabajo seguro y en cumplimiento con la normativa vigente.",
  },
  { 
    icon: Files, 
    title: "Gestión Legal & Administrativa", 
    description: "Soporte experto para optimizar tus procesos, minimizar riesgos legales y fortalecer la gestión de tu personal.",
  },
  { 
    icon: Cpu, 
    title: "Soluciones Tecnológicas", 
    description: "Innovación y ciberseguridad para proteger tus activos digitales, asegurar la continuidad y potenciar la eficiencia operativa.",
  },
];

const breadcrumbItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Empresa', href: '/empresa/por-que-boss' },
  { label: '¿Por qué BOSS?', href: '/empresa/por-que-boss' },
];

export default function PorqueBossPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "¿Por qué BOSS Asesorías?",
    "description": "BOSS Asesorías conecta bienestar laboral, gestión estratégica y tecnología para fortalecer organizaciones en Chile. Nuestro nombre representa Bienestar, Organización, Salud y Seguridad.",
    "mainEntity": {
      "@type": "Organization",
      "name": "BOSS Asesorías",
      "url": "https://www.bossasesorias.cl",
      "description": "Consultoría integral que integra Bienestar, Organización, Salud y Seguridad para empresas en Chile.",
      "slogan": "Bienestar • Organización • Salud • Seguridad",
      "foundingDate": "2019",
      "areaServed": {
        "@type": "Country",
        "name": "Chile"
      }
    }
  };

  const faqsPorqueBoss = [
    {
      question: '¿Qué significa BOSS en BOSS Asesorías?',
      answer: 'BOSS es el acrónimo de Bienestar, Organización, Salud y Seguridad. Representa los cuatro pilares fundamentales que guían nuestra consultoría integral para empresas en Chile.',
    },
    {
      question: '¿Desde cuándo trabajan con empresas chilenas?',
      answer: 'Desde 2019 hemos asesorado a empresas de diversos sectores en Chile, ayudándolas a cumplir normativas como la Ley de 40 Horas, la Ley Karin y la Ley Marco de Ciberseguridad.',
    },
    {
      question: '¿Cuál es el enfoque integral de BOSS Asesorías?',
      answer: 'Integramos bienestar laboral, gestión estratégica y tecnología para transformar organizaciones. Cada área refuerza a las demás, impulsando un ciclo continuo de mejora y resultados sostenibles.',
    },
  ];

  const faqPorqueBossJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsPorqueBoss.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <script id="about-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
      <script id="faq-porque-boss-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPorqueBossJsonLd) }} />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white">
        <Image
          src="/images/area-industrial.webp"
          alt="Área industrial de una empresa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-10 container mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">¿Por qué BOSS ASESORÍAS?</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90">
            Integramos nuestros ejes de Bienestar, Legalidad y Tecnología para transformar tu organización desde una mirada estratégica y conectada.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-semibold text-primary mb-6">BOSS ASESORÍAS: Transformación Organizacional 360°</h2>
               <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Desde 2019, en BOSS Asesorías conectamos bienestar laboral, gestión estratégica y tecnología para fortalecer organizaciones en Chile. Hemos asesorado a empresas de diversos sectores —industrial, legal, tecnológico— ayudándoles a cumplir normativas como la Ley de 40 Horas (Ley 21.561), la Ley Karin (Ley 21.643) y la Ley Marco de Ciberseguridad (Ley 21.663).
                </p>
                <p>
                  Nuestro enfoque integrado transforma desafíos complejos como seguridad, eficiencia y cumplimiento, en oportunidades de crecimiento interconectado. Cada área refuerza a las demás, impulsando un ciclo continuo de mejora, resiliencia y resultados sostenibles. Con cobertura en todo Chile, entregamos soluciones presenciales en la Región de Valparaíso y remotas a nivel nacional.
                </p>
                 <Alert className="border-accent/50 text-foreground">
                  <Info className="h-5 w-5 text-accent" />
                  <AlertDescription>
                    Nuestro nombre, <strong>BOSS</strong>, nace de los pilares que defendemos: <strong>B</strong>ienestar, <strong>O</strong>rganización, <strong>S</strong>alud y <strong>S</strong>eguridad. Nuestro equipo multidisciplinario está comprometido con una cultura de prevención y cuidado.
                  </AlertDescription>
                </Alert>
              </div>
              <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-transform hover:scale-105">
                <Link href="/contacto">Conversemos sobre tu empresa</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/images/industrial.webp"
                alt="Entorno industrial moderno"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg shadow-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="heading-faq" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto max-w-[800px] px-6">
          <div className="text-center mb-12">
            <HelpCircle className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 id="heading-faq" className="text-3xl md:text-4xl font-bold text-primary">Preguntas Frecuentes</h2>
            <p className="mt-4 text-muted-foreground">Resolvemos tus dudas sobre nuestra consultoría integral.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqsPorqueBoss.map((faq, index) => (
              <AccordionItem value={`faq-${index}`} key={index}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
