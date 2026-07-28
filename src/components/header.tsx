"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { Navigation } from '@/components/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  // Focus trap: al abrir, enfocar el primer link; al cerrar, volver al botón
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const menu = menuRef.current;
    if (!menu) return;

    // Enfocar el primer link del menú
    const firstLink = menu.querySelector<HTMLAnchorElement>('a');
    firstLink?.focus();

    // Manejador de tecla Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
        toggleRef.current?.focus();
      }

      // Focus trap: Tab y Shift+Tab循环 dentro del menú
      if (e.key === 'Tab') {
        const focusable = menu.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, handleClose]);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 shadow-md backdrop-blur-sm">
      <div className="container mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        <Link href="/" className="text-primary transition-colors">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          <Navigation />
        </nav>
        
        <div className="lg:hidden">
          <Button 
            ref={toggleRef}
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-primary hover:bg-transparent"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">{mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="lg:hidden h-screen bg-background pt-8 overflow-y-auto"
        >
          <div className="container mx-auto px-6">
            <nav className="flex flex-col items-center gap-8">
              <Navigation isMobile onLinkClick={() => {
                setMobileMenuOpen(false);
                toggleRef.current?.focus();
              }} />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
