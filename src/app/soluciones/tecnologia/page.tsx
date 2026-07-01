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
  title: 'Soluciones Tecnológicas Empresariales | Desarrollo Web, IA y Soporte Técnico',
  description: 'Impulsa tu empresa con desarrollo web, aplicaciones, IA, soporte técnico y recuperación de datos.',
  keywords: ['desarrollo web chile', 'soporte técnico empresas', 'integración de inteligencia artificial', 'desarrollo de aplicaciones chile', 'community manager chile', 'recuperación de datos empresas'],
};

const serviceImage = PlaceHolderImages.find(p => p.id === 'dimension-tech');

const servicios = [
  {
    title: "Creación de Páginas Web a Medida",
    content: "Desarrollamos sitios web modernos, rápidos y orientados a conversión, adaptados a las necesidades específicas de cada empresa. Nuestro enfoque combina diseño profesional, experiencia de usuario y tecnología de alto rendimiento."
  },
  {
    title: "Desarrollo de Aplicaciones Personalizadas",
    content: "Creamos aplicaciones a medida para optimizar procesos internos, mejorar la productividad y facilitar la gestión operativa. Diseñamos soluciones escalables, seguras y alineadas con los objetivos del negocio."
  },
  {
    title: "Integración de Soluciones con IA",
    content: "Implementamos inteligencia artificial para automatizar tareas, mejorar la toma de decisiones y aumentar la eficiencia operativa. Desde chatbots hasta análisis predictivo, adaptamos la tecnología a las necesidades del cliente."
  },
  {
    title: "Community Manager",
    content: "Gestionamos redes sociales con estrategia, contenido profesional y enfoque en posicionamiento. Nuestro servicio fortalece la presencia digital y mejora la comunicación con clientes y comunidades."
  },
  {
    title: "Soporte Técnico Online y Remoto",
    content: "Brindamos asistencia técnica rápida y eficiente para resolver problemas, optimizar equipos y asegurar continuidad operativa. Nuestro soporte reduce tiempos de inactividad y mejora el rendimiento tecnológico."
  },
  {
    title: "Formateo y Optimización de Equipos",
    content: "Optimizamos el rendimiento de computadores y dispositivos mediante limpieza, configuración y ajustes avanzados. Este servicio prolonga la vida útil de los equipos y mejora la productividad."
  },
  {
    title: "Recuperación de Datos y Respaldos",
    content: "Restauramos información crítica y configuramos sistemas de respaldo seguros para prevenir pérdidas futuras. Garantizamos confidencialidad, rapidez y soluciones efectivas."
  }
];


const breadcrumbItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Tecnología', href: '/soluciones/tecnologia' },
];

export default function TecnologiaPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Soluciones Tecnológicas Empresariales",
    "provider": {
      "@type": "Organization",
      "name": "BOSS Asesorías",
      "url": "https://www.bossasesorias.cl"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Chile"
    },
    "description": "Desarrollo web a medida, aplicaciones personalizadas, integración de inteligencia artificial, soporte técnico especializado y recuperación de datos para empresas en Chile.",
    "serviceType": "Desarrollo Tecnológico y Ciberseguridad"
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo digitalizar y proteger la infraestructura tecnológica de tu empresa",
    "description": "Guía paso a paso para implementar soluciones digitales, ciberseguridad y soporte tecnológico en empresas chilenas según la Ley Marco de Ciberseguridad (Ley 21.663).",
    "step": [
      { "@type": "HowToStep", "name": "Diagnóstico Digital", "text": "Evaluamos el estado actual de la infraestructura tecnológica e identificamos brechas de seguridad y productividad." },
      { "@type": "HowToStep", "name": "Diseño de Solución", "text": "Diseñamos un plan tecnológico a medida: web, apps, IA o ciberseguridad según las necesidades del negocio." },
      { "@type": "HowToStep", "name": "Implementación", "text": "Desarrollamos e implementamos la solución con estándares de seguridad y cumplimiento normativo chileno." },
      { "@type": "HowToStep", "name": "Soporte y Continuidad", "text": "Garantizamos continuidad operacional con soporte técnico especializado y respaldo de datos." }
    ]
  };

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <Script id="service-ld-tecnologia" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Script id="howto-ld-tecnologia" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white">
        <Image
          src="/images/areatecnologica.webp"
          alt="Área tecnológica de una empresa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-10 container mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Soluciones Tecnológicas</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white">
            Innovación y ciberseguridad para proteger tus activos digitales, asegurar la continuidad y potenciar la eficiencia operativa.
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
                  <div className="mb-8">
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
                <h3 className="text-2xl font-semibold text-primary mb-4">Protección y Eficiencia Digital</h3>
                <p className="text-muted-foreground mb-6">
                    Asegura tu futuro digital y transforma tus operaciones con soluciones tecnológicas a la medida de tus desafíos.
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
