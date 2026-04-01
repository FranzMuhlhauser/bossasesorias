"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { Navigation } from '@/components/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled || mobileMenuOpen ? "bg-background/95 shadow-md backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        <Link href="/" className={cn('transition-colors', isScrolled || mobileMenuOpen ? 'text-primary' : 'text-white')}>
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          <Navigation isScrolled={isScrolled} />
        </nav>
        
        <div className="lg:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className={cn('hover:bg-transparent', isScrolled || mobileMenuOpen ? 'text-primary' : 'text-white')}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Abrir menú</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden h-screen bg-background pt-8">
          <div className="container mx-auto px-6">
            <nav className="flex flex-col items-center gap-8">
              <Navigation isMobile onLinkClick={() => setMobileMenuOpen(false)} />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
