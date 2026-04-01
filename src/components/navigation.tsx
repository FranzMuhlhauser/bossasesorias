"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { cn } from "@/lib/utils"

type NavigationProps = {
  isScrolled?: boolean;
  isMobile?: boolean;
  onLinkClick?: () => void;
};

const mainLinks = [
  { href: "/", label: "Inicio" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/empresa/por-que-boss", label: "¿Por qué BOSS?" },
  { href: "/empresa/areas", label: "Áreas" },
  { href: "/contacto", label: "Contacto" },
];

export function Navigation({ isScrolled, isMobile, onLinkClick }: NavigationProps) {
  const pathname = usePathname();

  const linkClasses = (isActive = false) => cn(
    "font-medium transition-colors text-base",
    isMobile 
      ? "text-2xl text-foreground hover:text-accent text-center"
      : (isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"),
    isActive && "text-accent"
  );

  if (isMobile) {
    return (
      <nav className="flex flex-col items-center gap-8">
        {mainLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={onLinkClick} className={linkClasses(pathname === link.href)}>
                {link.label}
            </Link>
        ))}
      </nav>
    );
  }

  return (
    <NavigationMenu.Root>
        <NavigationMenu.List className="flex items-center gap-6">
            {mainLinks.map(link => (
                <NavigationMenu.Item key={link.href}>
                    <NavigationMenu.Link asChild>
                        <Link href={link.href} className={linkClasses(pathname === link.href)}>
                            {link.label}
                        </Link>
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
            ))}
        </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
