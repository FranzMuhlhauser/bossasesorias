import { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cultura y Desarrollo Organizacional | Consultoría en Talento y Cambio',
  description: 'Fortalece el ADN de tu empresa con diagnósticos de clima, gestión del cambio, liderazgo y desarrollo organizacional.',
  keywords: ['cultura organizacional chile', 'clima laboral consultoría', 'gestión del cambio empresas', 'coaching ejecutivo chile', 'desarrollo de talento humano'],
};

const serviceImage = PlaceHolderImages.find(p => p.id === 'courses-training');

const servicios = [
  {
    title: "Diagnóstico de Clima y Cultura",
    content: "Realizamos un análisis exhaustivo de las percepciones, valores y comportamientos que definen a tu organización. Identificamos brechas críticas para diseñar planes de acción que mejoren el compromiso y la productividad."
  },
  {
    title: "Gestión del Cambio Organizacional",
    content: "Acompañamos a las empresas en procesos de transformación, asegurando que las personas se adapten y adopten nuevas formas de trabajo. Minimizamos la resistencia y potenciamos la resiliencia del equipo."
  },
  {
    title: "Coaching Directivo y Liderazgo Estratégico",
    content: "Desarrollamos las habilidades críticas de los líderes para que inspiren, guíen y logren resultados excepcionales. Fomentamos un liderazgo consciente y alineado con el propósito organizacional."
  },
  {
    title: "Evaluación de Desempeño 360°",
    content: "Implementamos sistemas de medición integral que permiten identificar el impacto real de cada colaborador. Facilitamos el feedback constructivo y el diseño de planes de carrera personalizados."
  },
  {
    title: "Diseño y Rediseño de Estructuras",
    content: "Evaluamos y optimizamos el organigrama y los flujos de trabajo para asegurar una operación ágil. Eliminamos silos y mejoramos la comunicación interna."
  },
  {
    title: "Programas de Desarrollo de Talento",
    content: "Diseñamos rutas de aprendizaje y crecimiento para que tu equipo alcance su máximo potencial. Nos enfocamos en las competencias clave que tu empresa necesita para el futuro."
  }
];

export default function CulturaPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white">
        <Image
          src="/images/Curso-Capacitacion-en-Tecnologia-Digital-para-un-Aprendizaje-Efectivo.webp"
          alt="Liderazgo y cultura organizacional"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-10 container mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Cultura & Desarrollo Organizacional</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white">
            Transformamos el entorno laboral para potenciar el talento y asegurar resultados sostenibles.
          </p>
        </div>
      </section>

       <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-semibold text-primary mb-6">Nuestras Intervenciones</h2>
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
                <h3 className="text-2xl font-semibold text-primary mb-4">El ADN de tu Éxito</h3>
                <p className="text-muted-foreground mb-6">
                  Una organización sólida no solo se mide por sus procesos, sino por la fuerza de su cultura y la calidad de su liderazgo.
                </p>
                <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-transform hover:scale-105">
                  <Link href="/contacto">Consultar Asesoría en Cultura</Link>
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
