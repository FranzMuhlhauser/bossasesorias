import { Metadata } from 'next';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ShieldCheck, Files, Cpu, HeartPulse, Building, Microscope, Wrench, FileText, Handshake, Users, TestTube, Truck, Briefcase, Calculator, HandCoins, Check, Library, Bot, Code, MessageSquare, Computer, HardDrive, TrendingUp, UsersRound, Lightbulb, BarChart4, LayoutPanelLeft, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from '@/components/breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Script from 'next/script';
import { WhatsappCta } from '@/components/ui/whatsapp-cta';

export const metadata: Metadata = {
    title: 'Soluciones Empresariales Integrales | Bienestar, Gestión Legal y Cultura Organizacional',
    description: 'Explora nuestros servicios en seguridad laboral, gestión legal, tecnología y desarrollo de cultura organizacional en Chile.',
    keywords: ['servicios empresariales chile', 'asesoría en prevención de riesgos', 'servicios legales laborales', 'soluciones tecnológicas empresas chile', 'consultoría integral empresarial', 'cultura organizacional chile'],
};

const bienestarServicios = [
    { icon: ShieldCheck, title: "Asesoría en Prevención de Riesgos", description: "Análisis y estrategias para minimizar accidentes.", href: "/soluciones/bienestar-seguridad" },
    { icon: Users, title: "Evaluaciones de Puestos de Trabajo", description: "Estudio ergonómico y psicosocial de cada rol.", href: "/soluciones/bienestar-seguridad" },
    { icon: HeartPulse, title: "Protocolos de Salud Mental", description: "Programas de bienestar y manejo del estrés.", href: "/soluciones/bienestar-seguridad" },
    { icon: Handshake, title: "Bienestar Organizacional y Mediaciones", description: "Fomento de un clima laboral positivo y resolución de conflictos.", href: "/soluciones/bienestar-seguridad" },
    { icon: FileText, title: "Implementación de Protocolos de Salud", description: "Adaptación a normativas de seguridad laboral.", href: "/soluciones/bienestar-seguridad" },
    { icon: Microscope, title: "Evaluación de Ambientes de Trabajo", description: "Medición de agentes como ruido, sílice, gases.", href: "/soluciones/bienestar-seguridad" },
    { icon: TestTube, title: "Muestreo de Asbestos", description: "Identificación y manejo seguro de materiales con asbesto.", href: "/soluciones/bienestar-seguridad" },
    { icon: Truck, title: "Pruebas de Hermeticidad de Carros", description: "Verificación de seguridad en transporte de sustancias.", href: "/soluciones/bienestar-seguridad" },
    { icon: Check, title: "Auditorías en Salud y Seguridad", description: "Revisión de cumplimiento y estándares.", href: "/soluciones/bienestar-seguridad" },
    { icon: Library, title: "Sistemas de Gestión", description: "Preparación y actualización de normativas ISO.", href: "/soluciones/bienestar-seguridad" },
    { icon: FileText, title: "Confección de RIFs", description: "Reglamentos Internos de Higiene y Seguridad.", href: "/soluciones/bienestar-seguridad" },
    { icon: HeartPulse, title: "Vigilancia de la Salud", description: "Exámenes preventivos y de seguimiento a trabajadores.", href: "/soluciones/bienestar-seguridad" },
    { icon: Microscope, title: "Toma de Muestras Clínicas en Terreno", description: "Servicios médicos móviles para tu empresa.", href: "/soluciones/bienestar-seguridad" },
];

const gestionServicios = [
    { icon: Users, title: "Análisis de Puestos de Trabajo", description: "Definición de roles, responsabilidades y competencias.", href: "/soluciones/gestion-legal" },
    { icon: Briefcase, title: "Redacción y Control de Contratos", description: "Gestión de contratos, anexos y documentación laboral.", href: "/soluciones/gestion-legal" },
    { icon: Calculator, title: "Cálculo de Remuneraciones", description: "Procesamiento de sueldos y salarios de forma precisa.", href: "/soluciones/gestion-legal" },
    { icon: HandCoins, title: "Pago de Cotizaciones Previsionales", description: "Gestión de pagos a AFP, Fonasa e Isapres.", href: "/soluciones/gestion-legal" },
    { icon: FileText, title: "Cálculo y Confección de Finiquitos", description: "Procesos de término de relación laboral en regla.", href: "/soluciones/gestion-legal" },
    { icon: Check, title: "Control Documental", description: "Organización y digitalización de documentos laborales.", href: "/soluciones/gestion-legal" },
    { icon: HandCoins, title: "Análisis de Remuneraciones", description: "Estudios de competitividad salarial.", href: "/soluciones/gestion-legal" },
    { icon: Calculator, title: "Impuestos Mensuales y Anuales", description: "Declaración y pago de impuestos de la empresa.", href: "/soluciones/gestion-legal" },
    { icon: Library, title: "Emisión de Informes", description: "Reportes de gestión para la toma de decisiones.", href: "/soluciones/gestion-legal" },
    { icon: Building, title: "Administración de Edificios y Condominios", description: "Gestión integral de comunidades.", href: "/soluciones/gestion-legal" },
];

const tecnologiaServicios = [
    { icon: Code, title: "Creación de Páginas Web a Medida", description: "Diseño y desarrollo de sitios web corporativos y e-commerce.", href: "/soluciones/tecnologia" },
    { icon: Bot, title: "Desarrollo de Aplicaciones Personalizadas", description: "Soluciones móviles y de escritorio para tus procesos.", href: "/soluciones/tecnologia" },
    { icon: Bot, title: "Integración de Soluciones con IA", description: "Automatización de tareas y análisis de datos con IA.", href: "/soluciones/tecnologia" },
    { icon: MessageSquare, title: "Community Manager", description: "Gestión de redes sociales y comunicación digital.", href: "/soluciones/tecnologia" },
    { icon: Computer, title: "Soporte Técnico Online y Remoto", description: "Asistencia para equipos y sistemas de tu empresa.", href: "/soluciones/tecnologia" },
    { icon: Wrench, title: "Formateo y Optimización de Equipos", description: "Mantenimiento para mejorar el rendimiento.", href: "/soluciones/tecnologia" },
    { icon: HardDrive, title: "Recuperación de Datos y Respaldos", description: "Soluciones para proteger y recuperar información crítica.", href: "/soluciones/tecnologia" },
];

const culturaServicios = [
    { icon: TrendingUp, title: "Diagnóstico de Clima y Cultura", description: "Análisis profundo del estado emocional y valórico de la empresa.", href: "/soluciones/capacitaciones" },
    { icon: UsersRound, title: "Plan de Transformación Cultural", description: "Alineación de comportamientos con los objetivos del negocio.", href: "/soluciones/capacitaciones" },
    { icon: Lightbulb, title: "Gestión del Cambio Organizacional", description: "Acompañamiento en procesos de transición y evolución.", href: "/soluciones/capacitaciones" },
    { icon: BarChart4, title: "Evaluación de Desempeño 360°", description: "Medición integral del impacto de cada colaborador.", href: "/soluciones/capacitaciones" },
    { icon: LayoutPanelLeft, title: "Diseño de Estructuras Eficientes", description: "Optimización de jerarquías y flujo de trabajo.", href: "/soluciones/capacitaciones" },
    { icon: Handshake, title: "Coaching Directivo y Liderazgo", description: "Desarrollo de habilidades críticas para la alta gerencia.", href: "/soluciones/capacitaciones" },
];

const breadcrumbItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Soluciones', href: '/soluciones' },
];

export default function SolucionesPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
       <section className="relative flex items-center justify-center text-center text-white pt-32 pb-20 md:pt-40 md:pb-28">
        <Image
          src="/images/soluciones.webp"
          alt="Equipo trabajando en soluciones integrales"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-10 container mx-auto max-w-[1200px] px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Soluciones Estratégicas para Organizaciones</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90">
            Descubre servicios diseñados para fortalecer el ADN de tu empresa y proteger a tu equipo.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto max-w-[1200px] px-6">
          <Tabs defaultValue="bienestar" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-auto bg-transparent p-0 mb-12">
              <TabsTrigger value="bienestar" className="flex items-center justify-center gap-2 rounded-lg p-4 border bg-card text-foreground transition-all duration-300 hover:shadow-md hover:-translate-y-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary">
                <ShieldCheck className="h-5 w-5 text-accent data-[state=active]:text-white" /> 
                <span className="font-semibold">Bienestar & Seguridad</span>
              </TabsTrigger>
              <TabsTrigger value="gestion" className="flex items-center justify-center gap-2 rounded-lg p-4 border bg-card text-foreground transition-all duration-300 hover:shadow-md hover:-translate-y-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary">
                <Files className="h-5 w-5 text-accent" /> 
                <span className="font-semibold">Gestión Legal & Admin.</span>
              </TabsTrigger>
              <TabsTrigger value="tecnologia" className="flex items-center justify-center gap-2 rounded-lg p-4 border bg-card text-foreground transition-all duration-300 hover:shadow-md hover:-translate-y-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary">
                <Cpu className="h-5 w-5 text-accent" /> 
                <span className="font-semibold">Soluciones Tecnológicas</span>
              </TabsTrigger>
              <TabsTrigger value="cultura" className="flex items-center justify-center gap-2 rounded-lg p-4 border bg-card text-foreground transition-all duration-300 hover:shadow-md hover:-translate-y-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary">
                <TrendingUp className="h-5 w-5 text-accent" /> 
                <span className="font-semibold">Cultura & Desarrollo</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="bienestar" className="mt-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-primary">Bienestar Laboral & Seguridad</h2>
                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Protegemos a las personas, reducimos riesgos y fortalecemos la cultura preventiva de tu empresa.</p>
                </div>
                <WhatsappCta />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bienestarServicios.map((service, index) => (
                        <Link key={index} href={service.href} className="h-full">
                            <Card className="flex flex-col text-left p-6 border-l-4 border-accent h-full hover:shadow-md transition-shadow">
                                <service.icon className="h-8 w-8 text-accent mb-4" />
                                <h3 className="font-semibold text-lg text-foreground flex-grow">{service.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </TabsContent>

            <TabsContent value="gestion" className="mt-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-primary">Gestión Legal, Laboral & Administrativa</h2>
                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Procesos claros, cumplimiento normativo y eficiencia operativa para tu organización.</p>
                </div>
                 <WhatsappCta />
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gestionServicios.map((service, index) => (
                         <Link key={index} href={service.href} className="h-full">
                            <Card className="flex flex-col text-left p-6 border-l-4 border-accent h-full hover:shadow-md transition-shadow">
                                <service.icon className="h-8 w-8 text-accent mb-4" />
                                <h3 className="font-semibold text-lg text-foreground flex-grow">{service.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </TabsContent>
            
            <TabsContent value="tecnologia" className="mt-12">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-primary">Soluciones Tecnológicas Estratégicas</h2>
                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Tecnología para proteger datos, mejorar productividad y asegurar la continuidad operativa de tu negocio.</p>
                </div>
                <WhatsappCta />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tecnologiaServicios.map((service, index) => (
                        <Link key={index} href={service.href} className="h-full">
                            <Card className="flex flex-col text-left p-6 border-l-4 border-accent h-full hover:shadow-md transition-shadow">
                                <service.icon className="h-8 w-8 text-accent mb-4" />
                                <h3 className="font-semibold text-lg text-foreground flex-grow">{service.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </TabsContent>

            <TabsContent value="cultura" className="mt-12">
                <div className="text-center mb-12">
                   <h2 className="text-3xl font-semibold text-primary">Cultura & Desarrollo Organizacional</h2>
                   <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Alineamos el talento humano con el propósito de tu empresa para un crecimiento resiliente.</p>
               </div>
               <WhatsappCta />
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {culturaServicios.map((service, index) => (
                        <Link key={index} href={service.href} className="h-full">
                            <Card className="flex flex-col text-left p-6 border-l-4 border-accent h-full hover:shadow-md transition-shadow">
                                <service.icon className="h-8 w-8 text-accent mb-4" />
                                <h3 className="font-semibold text-lg text-foreground flex-grow">{service.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                            </Card>
                        </Link>
                   ))}
               </div>
           </TabsContent>

          </Tabs>
        </div>
      </section>

      {/* Preguntas Frecuentes (AEO/SEO) */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto max-w-[800px] px-6">
          <div className="text-center mb-12">
            <HelpCircle className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Preguntas Frecuentes sobre Soluciones</h2>
            <p className="mt-4 text-muted-foreground">Resolvemos tus dudas sobre nuestros servicios empresariales.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-0">
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                ¿Cuál es la diferencia entre Bienestar Laboral y Cultura Organizacional?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Bienestar Laboral se enfoca en seguridad física, salud ocupacional y cumplimiento normativo. Cultura Organizacional trabaja el clima laboral, liderazgo y desarrollo de talento. Ambas áreas se complementan para fortalecer tu empresa.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                ¿Ofrecen servicios para empresas de todos los tamaños?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Sí, desde pequeñas y medianas empresas hasta grandes corporaciones. Adaptamos cada solución al tamaño, industria y necesidades específicas de tu organización, con alcance nacional.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                ¿Qué incluye una asesoría en gestión legal y administrativa?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Incluye análisis de contratos, cálculo de remuneraciones, finiquitos, control documental, declaración de impuestos y administración de edificios. Te ayudamos a cumplir la normativa laboral chilena vigente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                ¿Cómo sé qué solución tecnológica necesita mi empresa?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Realizamos un diagnóstico digital gratuito para evaluar tu infraestructura, identificar brechas de seguridad y productividad, y recomendarte la solución más adecuada: web, app, IA o ciberseguridad.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Script
        id="soluciones-faq-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cuál es la diferencia entre Bienestar Laboral y Cultura Organizacional?",
                "acceptedAnswer": { "@type": "Answer", "text": "Bienestar Laboral se enfoca en seguridad física, salud ocupacional y cumplimiento normativo. Cultura Organizacional trabaja el clima laboral, liderazgo y desarrollo de talento. Ambas áreas se complementan para fortalecer tu empresa." }
              },
              {
                "@type": "Question",
                "name": "¿Ofrecen servicios para empresas de todos los tamaños?",
                "acceptedAnswer": { "@type": "Answer", "text": "Sí, desde pequeñas y medianas empresas hasta grandes corporaciones. Adaptamos cada solución al tamaño, industria y necesidades específicas de tu organización, con alcance nacional." }
              },
              {
                "@type": "Question",
                "name": "¿Qué incluye una asesoría en gestión legal y administrativa?",
                "acceptedAnswer": { "@type": "Answer", "text": "Incluye análisis de contratos, cálculo de remuneraciones, finiquitos, control documental, declaración de impuestos y administración de edificios. Te ayudamos a cumplir la normativa laboral chilena vigente." }
              },
              {
                "@type": "Question",
                "name": "¿Cómo sé qué solución tecnológica necesita mi empresa?",
                "acceptedAnswer": { "@type": "Answer", "text": "Realizamos un diagnóstico digital gratuito para evaluar tu infraestructura, identificar brechas de seguridad y productividad, y recomendarte la solución más adecuada: web, app, IA o ciberseguridad." }
              }
            ]
          })
        }}
      />
    </>
  );
}
