import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldCheck, Files, Cpu, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';


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

export default function PorqueBossPage() {
  return (
    <>
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
                  En BOSS ASESORÍAS conectamos bienestar laboral, gestión estratégica y tecnología para fortalecer tu organización desde sus cimientos.
                </p>
                <p>
                  Nuestro enfoque integrado transforma desafíos complejos como seguridad, eficiencia y cumplimiento, en oportunidades de crecimiento interconectado. Cada área refuerza a las demás, impulsando un ciclo continuo de mejora, resiliencia y resultados sostenibles.
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
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
