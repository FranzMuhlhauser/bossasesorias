import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';
import { MapPin, Phone, Mail } from 'lucide-react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Contacto BOSS Asesorías | Solicita una Asesoría Estratégica Personalizada',
  description: 'Contáctanos para una asesoría estratégica inicial. Nuestro equipo de consultores en Chile está listo para ayudarte con soluciones en bienestar laboral, gestión legal y tecnología.',
  keywords: ['contacto asesorías chile', 'asesoría estratégica empresas', 'consultora empresarial chile', 'asesoría integral empresas'],
};

export default function ContactPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BOSS Asesorías",
    "image": "https://www.bossasesorias.cl/images/contacto.webp",
    "@id": "https://www.bossasesorias.cl",
    "url": "https://www.bossasesorias.cl",
    "telephone": "+56992895726",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13 Norte 853, Of. 803",
      "addressLocality": "Viña del Mar",
      "addressRegion": "Valparaíso",
      "postalCode": "2520000",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.016335,
      "longitude": -71.547165
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const faqsContact = [
    {
      question: '¿Cuánto tiempo tarda el primer diagnóstico?',
      answer: 'Realizamos un primer diagnóstico en 48 horas hábiles para identificar tus necesidades críticas y proponer acciones inmediatas en bienestar, legalidad y tecnología.',
    },
    {
      question: '¿Puedo agendar una asesoría remota o presencial?',
      answer: 'Ofrecemos asesorías remotas para todo Chile y asesorías presenciales en Viña del Mar y la región de Valparaíso según la complejidad del proyecto.',
    },
    {
      question: '¿Qué información debo entregar antes de la asesoría?',
      answer: 'Solicitamos datos básicos de tu organización, el alcance del servicio y los desafíos principales para preparar una propuesta personalizada y eficiente.',
    },
  ];

  const faqContactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsContact.map((faq) => ({
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
      <Script
        id="local-business-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Script
        id="contact-faq-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqContactJsonLd) }}
      />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white">
        <Image
          src="/images/datos-contacto-negocio-1.webp"
          alt="Contacto con equipo de BOSS Asesorías en Viña del Mar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-10 container mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contáctanos y Potencia tu Empresa</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
            Completa el formulario y un asesor experto te contactará en menos de 24 horas.
          </p>
        </div>
      </section>

      <section id="contacto-form" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-primary">Información Directa</h2>
              <div className="space-y-6 text-foreground">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Oficina Central</h3>
                    <span className="text-muted-foreground">13 Norte 853, Of. 803, Viña del Mar, Chile.</span><br/>
                    <span className="text-muted-foreground">Atención remota y presencial a todo el país.</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Teléfono</h3>
                    <a href="tel:+56992895726" className="text-muted-foreground hover:text-accent transition-colors">+56 9 9289 5726</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a href="mailto:contacto@bossasesorias.cl" className="text-muted-foreground hover:text-accent transition-colors">contacto@bossasesorias.cl</a>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                  <Image
                      src="/images/contacto.webp"
                      alt="Equipo de BOSS Asesorías listo para atenderte"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-xl object-cover"
                  />
              </div>
            </div>

            <div className="space-y-8 lg:col-span-2">
              <section id="faq-contacto" className="rounded-3xl border border-border bg-surface p-8 shadow-lg">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary">Preguntas frecuentes sobre asesorías</h2>
                  {faqsContact.map((faq, index) => (
                    <div key={index} className="border-t border-border pt-6 first:border-t-0">
                      <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                      <p className="mt-3 text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div>
              <Card className="p-6 md:p-8 shadow-lg bg-card">
                <CardHeader className="p-0 mb-6">
                  <CardTitle as="h2" className="text-2xl text-primary">
                    Envíanos un mensaje
                  </CardTitle>
                  <p className="text-muted-foreground pt-2">También puedes escribirnos directamente a: contacto@bossasesorias.cl</p>
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
