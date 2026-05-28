import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft } from 'lucide-react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Bienestar Laboral y Seguridad | Prevención de Riesgos y Salud Ocupacional',
  description: 'Protegemos a tus trabajadores con prevención de riesgos, evaluaciones, auditorías y salud ocupacional.',
  keywords: ['prevención de riesgos chile', 'salud ocupacional servicios', 'evaluaciones de puestos de trabajo', 'protocolos de salud mental', 'auditorías de seguridad laboral', 'vigilancia de la salud chile'],
};

const servicios = [
  {
    title: "Asesoría en Prevención de Riesgos",
    content: "Acompañamos a las organizaciones en la identificación, evaluación y control de riesgos laborales, implementando estrategias preventivas que reducen accidentes y fortalecen la cultura de seguridad. Nuestro enfoque combina normativa vigente, análisis técnico y acompañamiento continuo para asegurar ambientes de trabajo más seguros y eficientes."
  },
  {
    title: "Evaluaciones de Puestos de Trabajo",
    content: "Realizamos evaluaciones ergonómicas y funcionales para optimizar el desempeño y bienestar de los trabajadores. Identificamos factores de riesgo, proponemos mejoras y diseñamos soluciones que aumentan la productividad, reducen lesiones y cumplen con los estándares de seguridad laboral."
  },
  {
    title: "Protocolos de Salud Mental",
    content: "Desarrollamos e implementamos protocolos orientados a la prevención, detección y gestión de riesgos psicosociales. Nuestro enfoque integra bienestar emocional, clima laboral y estrategias de apoyo para fortalecer la salud mental de los equipos y mejorar su rendimiento."
  },
  {
    title: "Bienestar Organizacional, Mediaciones y Negociación",
    content: "Facilitamos procesos de mediación y resolución de conflictos, promoviendo relaciones laborales saludables y colaborativas. A través de metodologías especializadas, apoyamos a las organizaciones en la construcción de ambientes de trabajo más armónicos, productivos y alineados con sus objetivos estratégicos."
  },
  {
    title: "Implementación de Protocolos en Salud y Seguridad Laboral",
    content: "Guiamos a las empresas en la adopción de protocolos obligatorios y voluntarios, asegurando cumplimiento normativo y fortaleciendo la gestión preventiva. Nuestro acompañamiento incluye diagnóstico, capacitación, documentación y seguimiento."
  },
  {
    title: "Evaluación de Ambientes de Trabajo (Ruido, Sílice, Gases, Solventes)",
    content: "Realizamos mediciones certificadas para identificar riesgos ambientales que puedan afectar la salud de los trabajadores. Entregamos informes técnicos, recomendaciones y planes de acción para asegurar ambientes laborales seguros y controlados."
  },
  {
    title: "Muestreo de Asbestos",
    content: "Ejecutamos muestreos especializados para detectar presencia de asbesto en instalaciones industriales y administrativas. Nuestro servicio incluye análisis, informes y recomendaciones para la correcta gestión y mitigación del riesgo."
  },
  {
    title: "Pruebas de Hermeticidad de Carros",
    content: "Verificamos la hermeticidad de carros industriales y equipos de transporte para prevenir fugas, contaminación y riesgos operativos. Este servicio asegura el cumplimiento de estándares de seguridad y prolonga la vida útil de los equipos."
  },
  {
    title: "Auditorías en Salud y Seguridad Ocupacional",
    content: "Evaluamos el nivel de cumplimiento de normativas y sistemas de gestión, identificando brechas y oportunidades de mejora. Entregamos informes claros y accionables para fortalecer la gestión preventiva de la organización."
  },
  {
    title: "Preparación y Actualización de Sistemas de Gestión",
    content: "Implementamos y actualizamos sistemas de gestión en seguridad, calidad y medio ambiente, alineados con normativas nacionales e internacionales. Nuestro enfoque asegura orden, trazabilidad y mejora continua."
  },
  {
    title: "Confección de RIFs",
    content: "Elaboramos Registros de Información Fundamental con precisión técnica y cumplimiento normativo. Este documento es clave para la trazabilidad y la correcta gestión de riesgos en la organización."
  },
  {
    title: "Vigilancia de la Salud",
    content: "Coordinamos exámenes clínicos preventivos para monitorear el estado de salud de los trabajadores y detectar riesgos tempranos. Este servicio contribuye a la prevención de enfermedades profesionales y al cuidado integral del personal."
  },
  {
    title: "Toma de Muestras Clínicas en Terreno",
    content: "Realizamos toma de muestras directamente en las instalaciones del cliente, facilitando el acceso a evaluaciones de salud y reduciendo tiempos operativos. Garantizamos precisión, rapidez y confidencialidad."
  }
];

export default function BienestarPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bienestar Laboral y Seguridad Ocupacional",
    "provider": {
      "@type": "Organization",
      "name": "BOSS Asesorías",
      "url": "https://www.bossasesorias.cl"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Chile"
    },
    "description": "Servicios integrales de prevención de riesgos, salud ocupacional, evaluaciones ergonómicas, protocolos de salud mental y vigilancia de la salud para empresas en Chile.",
    "serviceType": "Prevención de Riesgos y Salud Ocupacional"
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo implementar un sistema de gestión de seguridad laboral en tu empresa",
    "description": "Proceso paso a paso para implementar prevención de riesgos, evaluaciones de puestos y protocolos de salud en organizaciones chilenas.",
    "step": [
      { "@type": "HowToStep", "name": "Diagnóstico Inicial", "text": "Realizamos una evaluación integral de los riesgos existentes en la empresa y sus instalaciones." },
      { "@type": "HowToStep", "name": "Diseño del Plan Preventivo", "text": "Elaboramos un plan de acción personalizado con medidas correctivas y preventivas priorizadas." },
      { "@type": "HowToStep", "name": "Implementación de Protocolos", "text": "Aplicamos los protocolos de seguridad, salud mental y ergonometría según normativa vigente." },
      { "@type": "HowToStep", "name": "Capacitación y Seguimiento", "text": "Capacitamos a los equipos y realizamos auditorías periódicas para asegurar el cumplimiento continuo." }
    ]
  };

  return (
    <>
      <Script id="service-ld-bienestar" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Script id="howto-ld-bienestar" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white">
        <Image
          src="/images/bienestar-laboral.webp"
          alt="Equipo de trabajo colaborando en un ambiente laboral positivo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-10 container mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Bienestar Laboral & Seguridad</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white">
            Protección integral para tu equipo, asegurando un ambiente de trabajo seguro y en cumplimiento con la normativa vigente.
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
                <h3 className="text-2xl font-semibold text-primary mb-4">¿Necesitas un diagnóstico?</h3>
                <p className="text-muted-foreground mb-6">
                    Permítenos ser tu socio estratégico para construir un lugar de trabajo más seguro, saludable y exitoso.
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
