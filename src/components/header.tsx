"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { Navigation } from '@/components/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-primary hover:bg-transparent"
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
