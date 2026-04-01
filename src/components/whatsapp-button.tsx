'use client';

import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Files, Cpu, TrendingUp, MessageCircle, X, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WhatsappIcon } from './icons/whatsapp-icon';

type ServiceCategory = 'Bienestar y Salud' | 'Gestión Legal y Administrativa' | 'Soluciones Tecnológicas' | 'Cultura y Desarrollo';

const servicesByCategory = {
  'Bienestar y Salud': [
    "Asesoría en Prevención de Riesgos", "Evaluaciones Ergonómicas", "Protocolos de Salud Mental", 
    "Bienestar Organizacional y Mediaciones", "Implementación de Protocolos de Salud", "Evaluación de Ambientes de Trabajo", 
    "Muestreo de Asbestos", "Pruebas de Hermeticidad de Carros", "Auditorías en Salud y Seguridad", 
    "Sistemas de Gestión ISO", "Confección de RIFs", "Vigilancia de la Salud", "Toma de Muestras en Terreno"
  ],
  'Gestión Legal y Administrativa': [
    "Análisis de Puestos de Trabajo", "Redacción y Control de Contratos", "Cálculo de Remuneraciones", 
    "Pago de Cotizaciones Previsionales", "Cálculo y Confección de Finiquitos", "Control Documental", 
    "Análisis de Remuneraciones", "Impuestos Mensuales y Anuales", "Emisión de Informes", 
    "Administración de Edificios y Condominios"
  ],
  'Soluciones Tecnológicas': [
    "Creación de Páginas Web a Medida", "Desarrollo de Aplicaciones Personalizadas", "Integración de Soluciones con IA", 
    "Gestión de Redes Sociales", "Soporte Técnico Especializado", "Optimización de Infraestructura IT", 
    "Recuperación de Datos y Respaldos"
  ],
  'Cultura y Desarrollo': [
    "Diagnóstico de Clima y Cultura", "Gestión del Cambio Organizacional", "Coaching de Liderazgo Estratégico", 
    "Evaluación de Desempeño 360°", "Diseño de Estructuras Eficientes", "Programas de Desarrollo de Talento"
  ],
};


const options = [
  {
    label: 'Bienestar y Salud' as ServiceCategory,
    icon: ShieldCheck,
  },
  {
    label: 'Gestión Legal y Administrativa' as ServiceCategory,
    icon: Files,
  },
  {
    label: 'Soluciones Tecnológicas' as ServiceCategory,
    icon: Cpu,
  },
  {
    label: 'Cultura y Desarrollo' as ServiceCategory,
    icon: TrendingUp,
  },
  {
    label: 'Otro tipo de consulta' as const,
    icon: MessageCircle,
  }
];


export function WhatsappButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "56992895726";

  const createWhatsappUrl = (message: string) => {
    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  };
  
  const handleCategorySelect = (category: ServiceCategory | 'Otro tipo de consulta') => {
    if (category === 'Otro tipo de consulta') {
        const url = createWhatsappUrl("Hola, tengo una consulta sobre un servicio que no encuentro en la lista. ¿Podrían ayudarme?");
        window.open(url, '_blank');
        setIsOpen(false);
    } else {
        setSelectedCategory(category);
    }
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset state when popover closes
      setTimeout(() => setSelectedCategory(null), 150);
    }
  }

  const renderContent = () => {
    if (selectedCategory) {
      const services = servicesByCategory[selectedCategory];
      return (
        <div className="flex flex-col">
           <div className="flex items-center p-2 border-b border-border">
             <Button variant="ghost" size="icon" onClick={handleBack} className="h-8 w-8">
               <ArrowLeft className="h-5 w-5" />
             </Button>
             <p className="text-sm font-semibold text-center text-foreground flex-grow pr-8">
                {selectedCategory}
            </p>
           </div>
          <div className="flex flex-col space-y-1 p-2 max-h-64 overflow-y-auto">
            {services.map((service) => (
              <a
                key={service}
                href={createWhatsappUrl(`Hola, quiero consultar sobre el servicio estratégico de: ${service}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-md hover:bg-muted transition-colors text-left"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-sm font-medium text-foreground">{service}</span>
              </a>
            ))}
          </div>
        </div>
      );
    }

    return (
        <div className="p-2">
            <div className="flex flex-col space-y-1">
                <p className="text-sm font-semibold text-center text-foreground mb-2">¿En qué área podemos apoyarte hoy?</p>
                {options.map((option) => (
                <button
                    key={option.label}
                    onClick={() => handleCategorySelect(option.label)}
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-colors text-left w-full"
                >
                    <option.icon className="h-5 w-5 text-accent mr-3" />
                    <span className="text-sm font-medium text-foreground">{option.label}</span>
                </button>
                ))}
            </div>
        </div>
    );
  };

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <button
          className="fixed bottom-6 right-6 z-50 w-16 h-16 transition-transform duration-300 transform hover:scale-110 rounded-full bg-green-500 shadow-lg flex items-center justify-center text-white"
          aria-label="Contactar con un Consultor"
        >
          {isOpen ? <X className="h-8 w-8" /> : <WhatsappIcon className="h-8 w-8 text-white" />}
        </button>
      </PopoverTrigger>
      <PopoverContent side="top" align="end" className={cn(
          "w-80 rounded-lg shadow-xl mr-4 mb-2 border-border bg-card p-0",
          selectedCategory && 'h-auto'
        )}>
        {renderContent()}
      </PopoverContent>
    </Popover>
  );
}
