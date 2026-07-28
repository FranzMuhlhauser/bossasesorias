'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '+50', label: 'Empresas asesoradas', delay: '0ms' },
  { value: '2019', label: 'Trayectoria ininterrumpida', delay: '100ms' },
  { value: '12+', label: 'Años de experiencia legal', delay: '200ms' },
  { value: '100%', label: 'Cobertura nacional', delay: '300ms' },
];

export function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-accent/10 border-y border-accent/20"
    >
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`space-y-1 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-3'
              }`}
              style={{
                animation: isVisible
                  ? `countUp 0.6s ease-out forwards ${stat.delay}`
                  : 'none',
              }}
            >
              <span className="block text-3xl md:text-4xl font-bold text-accent">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
