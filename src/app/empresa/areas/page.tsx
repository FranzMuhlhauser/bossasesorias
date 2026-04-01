'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Factory, Briefcase, Cpu, TrendingUp, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const areas = [
  {
    value: "item-1",
    icon: Factory,
    title: "Industrial & Operativa",
    description: "Seguridad, prevención y cumplimiento para entornos de alta complejidad.",
    details: "En el sector industrial, el cumplimiento es la base de la continuidad. Implementamos Sistemas de Gestión de Seguridad y Salud en el Trabajo (SGSST), realizamos auditorías normativas profundas y evaluamos riesgos de procesos críticos. Nuestro objetivo es blindar tu operación y proteger a tu activo más valioso: tu equipo."
  },
  {
    value: "item-2",
    icon: Briefcase,
    title: "Legal & Administrativa",
    description: "Eficiencia en procesos, orden documental y mitigación de riesgos legales.",
    details: "Una gestión administrativa robusta es clave para la escalabilidad. Optimizamos procesos de RRHH, desde la auditoría de contratos hasta la gestión avanzada de remuneraciones. Te acompañamos en el laberinto de la legislación laboral chilena, asegurando que tu empresa opere con total transparencia y seguridad jurídica."
  },
  {
    value: "item-3",
    icon: Cpu,
    title: "Digital & Tecnológica",
    description: "Innovación para la continuidad, productividad y seguridad de datos.",
    details: "La tecnología debe potenciar tu negocio, no ser una barrera. Desarrollamos soluciones digitales a medida e integramos Inteligencia Artificial para automatizar lo cotidiano. Nos especializamos en ciberseguridad avanzada para garantizar que tu información y la de tus clientes esté siempre protegida."
  },
  {
    value: "item-4",
    icon: TrendingUp,
    title: "Cultura & Desarrollo",
    description: "Intervenciones estratégicas para fortalecer el talento y el clima laboral.",
    details: "El futuro de las empresas es humano. Realizamos diagnósticos de cultura y clima organizacional para alinear a las personas con el propósito del negocio. A través de la gestión del cambio y el desarrollo de líderes, creamos entornos donde el talento florece y los resultados se multiplican de forma orgánica."
  }
];

export default function AreasPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <>
      <title>Áreas de Especialización | Industrial, Legal, Tecnológica y Cultura</title>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white">
        <Image
          src="/images/area-administrativa.webp"
          alt="Especialistas de BOSS Asesorías en terreno"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-10 container mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Áreas de Especialización</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
            Nuestra mirada multidisciplinaria nos permite abordar los desafíos de tu organización desde todos los frentes.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto max-w-[1200px] px-6">
          <Accordion 
            type="single" 
            collapsible 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            value={openItem ?? ''}
            onValueChange={setOpenItem}
          >
            {areas.map((area) => (
              <AccordionItem value={area.value} key={area.value} className="border-0">
                <Card className={cn(
                    "group text-center transition-all duration-300 rounded-lg bg-card shadow-md hover:shadow-xl hover:-translate-y-2 border",
                    openItem === area.value ? "border-accent" : "border-border"
                )}>
                  <AccordionTrigger className="w-full hover:no-underline p-0">
                    <div className="w-full pt-8 px-6 text-center">
                      <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit border-4 border-card">
                        <area.icon className="h-10 w-10 text-primary" />
                      </div>
                      <h2 className="mt-4 text-2xl font-semibold text-primary">{area.title}</h2>
                      <p className="text-muted-foreground mt-2 mb-4 h-12">{area.description}</p>
                      <div className="flex items-center justify-center text-accent font-semibold text-sm mb-6">
                         Ver más <ChevronDown className={cn("h-5 w-5 ml-1 transition-transform", openItem === area.value && "rotate-180")} />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-8 pb-8 text-left text-muted-foreground prose">
                        <p>{area.details}</p>
                        <Button asChild variant="link" className="text-accent font-semibold p-0 mt-2">
                           <Link href="/contacto">Solicitar Asesoría Estratégica &rarr;</Link>
                       </Button>
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
