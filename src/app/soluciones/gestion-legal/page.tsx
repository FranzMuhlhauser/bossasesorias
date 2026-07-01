import { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft } from 'lucide-react';
import { Breadcrumb } from '@/components/breadcrumb';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Gestión Legal y Administrativa | Remuneraciones, Contratos y Cumplimiento',
  description: 'Optimiza tu empresa con servicios legales, remuneraciones, contratos, impuestos y administración documental.',
  keywords: ['gestión legal laboral chile', 'cálculo de remuneraciones', 'contratos laborales chile', 'administración de condominios', 'servicios contables chile', 'cumplimiento normativo empresas'],
};

const serviceImage = PlaceHolderImages.find(p => p.id === 'dimension-legal');

const servicios = [
  {
    title: "Análisis de Puestos de Trabajo",
    content: "Identificamos funciones, responsabilidades y riesgos asociados a cada puesto para optimizar la estructura organizacional. Este análisis permite mejorar la eficiencia, definir perfiles laborales y asegurar cumplimiento normativo."
  },
  {
    title: "Contratos, Anexos y Documentación Laboral",
    content: "Redactamos, revisamos y gestionamos documentación laboral con enfoque legal y administrativo. Aseguramos claridad, orden y cumplimiento de la legislación vigente, reduciendo riesgos y contingencias."
  },
  {
    title: "Cálculo de Remuneraciones",
    content: "Gestionamos remuneraciones con precisión y transparencia, asegurando el cumplimiento de obligaciones legales y la correcta aplicación de beneficios. Nuestro servicio garantiza procesos confiables y oportunos."
  },
  {
    title: "Pago de Cotizaciones Previsionales",
    content: "Realizamos el cálculo y pago de cotizaciones previsionales, evitando multas y asegurando la continuidad de beneficios para los trabajadores. Este servicio aporta orden y tranquilidad administrativa."
  },
  {
    title: "Cálculo y Confección de Finiquitos",
    content: "Elaboramos finiquitos conforme a la normativa vigente, asegurando procesos claros, justos y documentados. Acompañamos a la empresa en cada etapa para evitar errores y contingencias legales."
  },
  {
    title: "Control Documental",
    content: "Organizamos y gestionamos documentación laboral para mantener trazabilidad, orden y cumplimiento. Este servicio es clave para auditorías, fiscalizaciones y procesos internos."
  },
  {
    title: "Análisis de Remuneraciones",
    content: "Evaluamos estructuras salariales para asegurar equidad interna, competitividad externa y cumplimiento normativo. Entregamos informes estratégicos para apoyar decisiones de compensación."
  },
  {
    title: "Impuestos Mensuales y Anuales",
    content: "Gestionamos declaraciones tributarias con precisión y respaldo técnico, asegurando cumplimiento y evitando sanciones. Nuestro servicio incluye análisis, preparación y presentación."
  },
  {
    title: "Emisión de Informes",
    content: "Generamos informes claros, completos y orientados a la toma de decisiones. Estos documentos permiten visualizar el estado administrativo, laboral y financiero de la organización."
  },
  {
    title: "Administración de Edificios y Condominios",
    content: "Gestionamos gastos comunes, remuneraciones, mantenimiento, certificaciones y planes de emergencia. Nuestro enfoque profesional asegura orden, transparencia y continuidad operativa."
  }
];


const breadcrumbItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Gestión Legal', href: '/soluciones/gestion-legal' },
];

export default function LegalPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gestión Legal y Administrativa",
    "provider": {
      "@type": "Organization",
      "name": "BOSS Asesorías",
      "url": "https://www.bossasesorias.cl"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Chile"
    },
    "description": "Servicios de gestión legal, remuneraciones, contratos laborales, impuestos y administración documental para empresas en Chile.",
    "serviceType": "Gestión Legal y Administrativa Empresarial"
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo optimizar la gestión legal y administrativa de tu empresa en Chile",
    "description": "Proceso paso a paso para implementar gestión de contratos, remuneraciones, finiquitos y cumplimiento normativo en organizaciones chilenas.",
    "step": [
      { "@type": "HowToStep", "name": "Diagnóstico Legal y Administrativo", "text": "Evaluamos el estado actual de la documentación laboral, contratos y procesos administrativos de la empresa." },
      { "@type": "HowToStep", "name": "Diseño del Plan de Gestión", "text": "Elaboramos un plan de optimización con medidas para regularizar y mejorar los procesos administrativos y legales." },
      { "@type": "HowToStep", "name": "Implementación de Procesos", "text": "Aplicamos la gestión de remuneraciones, contratos, finiquitos y control documental según normativa vigente." },
      { "@type": "HowToStep", "name": "Monitoreo y Actualización", "text": "Realizamos seguimiento periódico para asegurar el cumplimiento continuo y la actualización normativa." }
    ]
  };

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <Script id="service-ld-legal" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Script id="howto-ld-legal" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white">
        <Image
          src="/images/gestion_legal.webp"
          alt="Gestión legal y administrativa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-10 container mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Gestión Legal & Administrativa</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white">
            Soporte experto para optimizar tus procesos, minimizar riesgos legales y fortalecer la gestión de tu personal.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-semibold text-primary mb-6">Detalle de Servicios</h2>
              <Accordion type="single" collapsible className="w-full">
                {servicios.map((servicio, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-left hover:no-underline font-semibold text-lg">{servicio.title}</AccordionTrigger>
                    <AccordionContent className="prose max-w-none text-muted-foreground">
                      <p>{servicio.content}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="lg:col-span-2 order-first lg:order-last">
              <div className="sticky top-28">
                {serviceImage && (
                  <div className='mb-8'>
                    <Image
                      src={serviceImage.imageUrl}
                      alt={serviceImage.description}
                      data-ai-hint={serviceImage.imageHint}
                      width={800}
                      height={600}
                      className="rounded-lg shadow-xl object-cover"
                    />
                  </div>
                )}
                 <h3 className="text-2xl font-semibold text-primary mb-4">Seguridad Jurídica y Eficiencia</h3>
                 <p className="text-muted-foreground mb-6">
                    Fortalece la columna vertebral de tu organización con una gestión legal y administrativa robusta y eficiente.
                </p>
                <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-transform hover:scale-105">
                  <Link href="/contacto">Consultar por este servicio</Link>
                </Button>
                 <Button asChild variant="outline" size="lg" className="w-full mt-4">
                  <Link href="/soluciones"><ArrowLeft className="mr-2 h-4 w-4" /> Volver a Soluciones</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
