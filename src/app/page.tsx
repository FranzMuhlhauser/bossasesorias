import Image from 'next/image';
import { Metadata } from 'next';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Files, Cpu, Users, MapPin, Phone, Mail, CheckCircle, HelpCircle, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { StatsCounter } from '@/components/stats-counter';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'BOSS Asesorías | Soluciones Integrales para Empresas en Chile',
  description: 'Potencia tu empresa con nuestras soluciones 360° en bienestar laboral, gestión legal, tecnología y cultura organizacional.',
};

const whyBossImage = PlaceHolderImages.find(p => p.id === 'why-boss');
const dimensionWellbeingImage = PlaceHolderImages.find(p => p.id === 'dimension-wellbeing');
const dimensionLegalImage = PlaceHolderImages.find(p => p.id === 'dimension-legal');
const dimensionTechImage = PlaceHolderImages.find(p => p.id === 'dimension-tech');
const cultureImage = PlaceHolderImages.find(p => p.id === 'courses-training');
const newsImages = {
  'news-1': PlaceHolderImages.find(p => p.id === 'news-1'),
  'news-2': PlaceHolderImages.find(p => p.id === 'news-2'),
  'news-3': PlaceHolderImages.find(p => p.id === 'news-3'),
  'news-4': PlaceHolderImages.find(p => p.id === 'news-4'),
};

const dimensions = [
  {
    icon: ShieldCheck,
    title: "Bienestar Laboral & Seguridad",
    description: "Protegemos a las personas y fortalecemos la cultura preventiva.",
    image: dimensionWellbeingImage,
    cta: "Ver Servicios de Bienestar",
    href: "/soluciones/bienestar-seguridad",
    services: [
        "Asesoría Estratégica en Riesgos",
        "Evaluaciones Ergonómicas",
        "Protocolos de Salud Mental",
        "Auditorías y Sistemas de Gestión",
        "Muestreo de Asbestos",
        "Vigilancia de la Salud",
        "Evaluación de Ambientes (Ruido, Sílice, Gases)"
    ]
  },
  {
    icon: Files,
    title: "Gestión Legal & Administrativa",
    description: "Procesos claros, cumplimiento normativo y eficiencia operativa.",
    image: dimensionLegalImage,
    cta: "Ver Servicios de Gestión",
    href: "/soluciones/gestion-legal",
    services: [
        "Gestión de Contratos y Nexos",
        "Remuneraciones y Cotizaciones",
        "Finiquitos y Control Documental",
        "Planificación Tributaria Mensual",
        "Administración de Activos y Edificios",
    ]
  },
  {
    icon: Cpu,
    title: "Soluciones Tecnológicas Estratégicas",
    description: "Tecnología para proteger datos, mejorar productividad y asegurar continuidad.",
    image: dimensionTechImage,
    cta: "Ver Servicios Tecnológicos",
    href: "/soluciones/tecnologia",
    services: [
        "Desarrollo Web y Apps a Medida",
        "Integración de Inteligencia Artificial",
        "Soporte Técnico de Alto Nivel",
        "Recuperación de Datos Críticos",
        "Gestión de Identidad Digital"
    ]
  },
];

const culturaServicios = [
    "Diagnóstico de Clima y Cultura",
    "Gestión del Cambio Organizacional",
    "Coaching de Liderazgo Estratégico",
    "Evaluación de Desempeño 360°",
    "Diseño de Estructuras Eficientes",
    "Programas de Desarrollo de Talento",
];

const news = [
    {
        title: "Ley de 40 Horas en Chile 2026: Cómo Implementar las 42 Horas",
        summary: "Guía completa sobre la Ley 21.561: plazos, requisitos, impacto en remuneraciones y cómo preparar tu empresa para la reducción a 42 horas semanales.",
        image: newsImages['news-1'],
        link: "/blog/ley-40-horas",
    },
    {
        title: "Ley Karin: Obligaciones para Empresas en Chile",
        summary: "Todo lo que necesitas saber sobre la Ley 21.643: protocolos de salud mental, prevención de acoso laboral y obligaciones para empresas chilenas.",
        image: newsImages['news-2'],
        link: "/blog/ley-karin",
    },
    {
        title: "Ciberseguridad en Chile 2026: Ley Marco y Obligaciones",
        summary: "La Ley 21.663 obliga a implementar planes de seguridad y reportar incidentes. Conoce cómo proteger tu empresa de ataques ransomware.",
        image: newsImages['news-3'],
        link: "/blog/ciberseguridad-chile",
    },
    {
        title: "IA y Cultura Organizacional: Cómo Transformar tu Empresa",
        summary: "Cómo integrar inteligencia artificial en la cultura de tu empresa. Beneficios medibles y casos de éxito en Chile.",
        image: newsImages['news-4'],
        link: "/blog/ia-cultura-organizacional",
    }
];

const faqs = [
  {
    question: "¿En qué consiste la asesoría estratégica inicial?",
    answer: "Es una evaluación gratuita de 48 horas donde analizamos tu empresa en seguridad, cumplimiento legal, tecnología y cultura. Identificamos brechas críticas y trazamos una hoja de ruta personalizada para potenciar tu competitividad."
  },
  {
    question: "¿Cómo ayuda BOSS Asesorías con la Ley de 40 Horas?",
    answer: "Ajustamos contratos, optimizamos turnos y recalculamos remuneraciones para cumplir con las 42 horas semanales sin afectar productividad. Documentamos todo para respaldar la implementación ante la Dirección del Trabajo."
  },
  {
    question: "¿Qué incluye el soporte tecnológico?",
    answer: "Desarrollo web a medida, integración de IA, soporte técnico remoto, recuperación de datos y auditorías de ciberseguridad bajo la Ley 21.663. La tecnología se convierte en ventaja competitiva, no en riesgo."
  },
  {
    question: "¿Cómo impacta la gestión de cultura en mis resultados?",
    answer: "Una cultura sólida reduce la rotación hasta en un 30% y mejora la productividad. Diagnosticamos el clima laboral, implementamos planes de cambio y medimos resultados para asegurar el impacto en tu negocio."
  }
];

export default function Home() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "56992895726";
  const message = "Hola, quiero solicitar una asesoría estratégica para mi empresa.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const newsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Blog - BOSS Asesorías",
    "description": "Artículos sobre bienestar laboral, gestión legal, ciberseguridad y transformación digital para empresas en Chile.",
    "numberOfItems": news.length,
    "itemListElement": news.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "headline": item.title,
        "description": item.summary,
        "url": `https://www.bossasesorias.cl${item.link}`,
        "image": `https://www.bossasesorias.cl${item.image?.imageUrl ?? ''}`,
        "author": {
          "@type": "Organization",
          "name": "BOSS Asesorías"
        },
        "publisher": {
          "@type": "Organization",
          "name": "BOSS Asesorías"
        },
        "inLanguage": "es-CL"
      }
    }))
  };

  return (
    <>
      <Script
        id="faq-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="news-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsJsonLd) }}
      />
      {/* Hero Section */}
      <section id="inicio" className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white">
        <Image
          src="/images/hero1.webp"
          alt="Equipo de profesionales trabajando en un proyecto"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-10 container max-w-4xl px-6 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md">Bienestar • Organización • Salud • Seguridad</h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-sm text-white/90 text-smooth">
            En BOSS Asesorías conectamos Bienestar, Tecnología y Cultura Organizacional para fortalecer tu empresa y proteger a tu equipo en Chile.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-md transition-all hover:shadow-lg hover:scale-105">
              <Link href="/contacto">Solicita una Asesoría Estratégica</Link>
            </Button>
            <Button asChild size="lg" className="w-full sm:w-auto bg-green-500 text-white hover:bg-green-600 border-green-500">
              <Link href={whatsappUrl} target='_blank' rel='noopener noreferrer'>Hablar por WhatsApp</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Estadísticas — Autoridad GEO */}
      <StatsCounter />

      {/* ¿Por qué BOSS? */}
      <section id="porque-boss" aria-labelledby="heading-porque-boss" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto max-w-[1200px] px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <h2 id="heading-porque-boss" className="text-3xl md:text-4xl font-bold text-primary mb-6">Tu Aliado Estratégico en Transformación y Cuidado Empresarial</h2>
                    <div className="text-lg text-muted-foreground leading-relaxed mb-8 space-y-4">
                      <p>En BOSS ASESORÍAS integramos el Bienestar Laboral, la Gestión de Talento y la Tecnología para ofrecer una solución 360°. Desde 2019, hemos asesorado a empresas chilenas de diversos sectores, ayudándolas a cumplir normativas como la Ley de 40 Horas y la Ley Karin, y a fortalecer su cultura organizacional con resultados medibles.</p>
                    </div>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-transform hover:scale-105">
                        <Link href="/contacto">Conversemos sobre tu organización</Link>
                    </Button>
                </div>
                <div className="order-1 lg:order-2">
                    {whyBossImage && (
                        <Image 
                            src={whyBossImage.imageUrl} 
                            alt={whyBossImage.description}
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="rounded-lg shadow-xl object-cover"
                            loading="lazy"
                        />
                    )}
                </div>
            </div>
        </div>
      </section>

      {/* Nuestros Ejes de Transformación */}
      <section id="dimensiones" aria-labelledby="heading-dimensiones" className="py-20 md:py-28 bg-card">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-16">
            <h2 id="heading-dimensiones" className="text-3xl md:text-4xl font-bold text-primary">Nuestros Ejes de Transformación</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Impulsamos el cambio a través de la seguridad, el talento y la innovación tecnológica.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {dimensions.map((dim, index) => (
              <Card key={index} className="flex flex-col h-full group text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-accent overflow-hidden">
                {dim.image && (
                    <div className="overflow-hidden">
                        <Image
                            src={dim.image.imageUrl}
                            alt={dim.image.description}
                            width={600}
                            height={400}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                        />
                    </div>
                )}
                <CardHeader className="p-6">
                  <div className="mx-auto bg-white rounded-full p-3 w-fit -mt-16 relative border-4 border-card">
                    <dim.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="font-semibold tracking-tight mt-4 text-xl text-primary">{dim.title}</CardTitle>
                   <CardDescription>{dim.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-6 flex-grow">
                   <ul className="space-y-2 text-left text-sm text-muted-foreground">
                       {dim.services.map((service, i) => (
                           <li key={i} className="flex items-start gap-2">
                               <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                               <span>{service}</span>
                           </li>
                       ))}
                   </ul>
                </CardContent>
                 <div className="p-6 pt-0 mt-auto">
                   <Button asChild variant="link" className="text-accent font-semibold">
                       <Link href={dim.href}>{dim.cta}</Link>
                   </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes (AEO/SEO) */}
      <section id="faq" aria-labelledby="heading-faq" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto max-w-[800px] px-6">
          <div className="text-center mb-12">
            <HelpCircle className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 id="heading-faq" className="text-3xl md:text-4xl font-bold text-primary">Preguntas Frecuentes</h2>
            <p className="mt-4 text-muted-foreground">Resolvemos tus dudas sobre cómo podemos transformar tu organización.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
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

      {/* Cultura y Desarrollo Organizacional */}
      <section id="cultura" aria-labelledby="heading-cultura" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto max-w-[1200px] px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-2">
                    <h2 id="heading-cultura" className="text-3xl md:text-4xl font-bold text-primary mb-6">Cultura y Desarrollo: El Corazón de tu Empresa</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      Intervenimos en la estructura y el clima de tu organización para potenciar el talento humano y asegurar resultados sostenibles.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-muted-foreground mb-8">
                        {culturaServicios.map((servicio, i) => (
                             <div key={i} className="flex items-start gap-3"><TrendingUp className="h-5 w-5 text-accent mt-1 shrink-0" /><span>{servicio}</span></div>
                        ))}
                    </div>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-transform hover:scale-105">
                        <Link href="/contacto">Solicitar más Información</Link>
                    </Button>
                </div>
                <div className="order-1 lg:order-1">
                    {cultureImage && (
                        <Image 
                            src={cultureImage.imageUrl} 
                            alt={cultureImage.description}
                            width={800}
                            height={500}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="rounded-lg shadow-xl object-cover"
                            loading="lazy"
                        />
                    )}
                </div>
            </div>
        </div>
      </section>
      
      {/* Noticias */}
        <section id="noticias" aria-labelledby="heading-noticias" className="py-20 md:py-28 bg-card">
            <div className="container mx-auto max-w-[1200px] px-6">
                 <div className="text-center mb-16">
                    <h2 id="heading-noticias" className="text-3xl md:text-4xl font-bold text-primary">Perspectivas y Actualidad</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Mantente informado sobre las tendencias que están redefiniendo el mundo empresarial en Chile.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {news.map((item, index) => (
                        <Card key={index} className="group flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                             {item.image && (
                                <div className="overflow-hidden">
                                    <Image
                                        src={item.image.imageUrl}
                                        alt={item.image.description}
                                        width={400}
                                        height={300}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-cover w-full h-56 transition-transform duration-300 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>
                            )}
                            <CardContent className="flex flex-col flex-grow p-6">
                                <h3 className="text-xl font-semibold text-primary mb-3 flex-grow">{item.title}</h3>
                                <p className="text-muted-foreground mb-4 text-sm">{item.summary}</p>
                                <div className="mt-auto">
                                  <Button asChild variant="link" className="text-accent font-semibold p-0 self-start">
                                    <Link href={item.link}>Leer artículo completo →</Link>
                                  </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

      {/* Contact Section */}
      <section id="contacto" aria-labelledby="heading-contacto" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-16">
            <h2 id="heading-contacto" className="text-3xl md:text-4xl font-bold text-primary">¿Listo para potenciar tu organización?</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Déjanos tu mensaje y un consultor experto te contactará para una asesoría estratégica.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-2 space-y-8">
              <h3 className="text-2xl font-semibold text-primary">Información de Contacto</h3>
              <div className="space-y-6 text-foreground">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Viña del Mar, Chile</span><br/>
                    <span className="text-muted-foreground">Atención a nivel nacional.</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0" />
                  <a href="tel:+56992895726" className="hover:text-accent transition-colors">+56 9 9289 5726</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0" />
                  <a href="mailto:contacto@bossasesorias.cl" className="hover:text-accent transition-colors">contacto@bossasesorias.cl</a>
                </div>
              </div>
               <div className="pt-4">
         <Image
            src="/images/contactoinicio.webp"
            alt="Equipo de BOSS Asesorías en la sección de contacto"
            width={800}
            height={500}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-lg shadow-md object-cover"
            loading="lazy"
        />
               </div>
            </div>
            <div className="lg:col-span-3">
              <Card className="p-6 md:p-8 shadow-lg bg-card">
                <CardHeader className="p-0 mb-6">
                  <h3 className="text-2xl text-primary">Envíanos un mensaje</h3>
                </CardHeader>
                <CardContent className="p-0">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
