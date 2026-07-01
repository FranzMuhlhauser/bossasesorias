import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { WhatsappIcon } from './icons/whatsapp-icon';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/soluciones', label: 'Soluciones' },
  { href: '/empresa/por-que-boss', label: 'Empresa' },
  { href: '/contacto', label: 'Contacto' },
];

const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "56992895726";
const message = "Hola, quiero solicitar una asesoría estratégica para mi empresa.";
const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

const socialLinks = [
  { href: 'https://www.facebook.com/BossAsesorias', icon: Facebook, label: 'Facebook' },
  { href: 'https://www.instagram.com/boss_asesorias/', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/boss-asesorias-8b9786118/', icon: Linkedin, label: 'LinkedIn' },
  { href: whatsappUrl, icon: WhatsappIcon, label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/80">
      <div className="container mx-auto max-w-[1200px] px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          
          <div className="space-y-4 md:col-span-5">
            <Link href="/" className="text-white"><Logo /></Link>
            <p className="text-sm max-w-sm">
              Conectamos Bienestar, Tecnología y Gestión para Impulsar tu Empresa.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label={social.label}>
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-semibold text-white">Navegación</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <h3 className="font-semibold text-white">¿Listo para empezar?</h3>
            <p className="mt-2 text-sm">Solicita una asesoría estratégica y descubre cómo podemos fortalecer tu organización.</p>
            <Link
              href="/contacto"
              className="mt-4 inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-2.5 px-6 rounded-md transition-all hover:scale-105 text-sm"
            >
              Solicitar Asesoría
            </Link>
          </div>

        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} BOSS ASESORÍAS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
