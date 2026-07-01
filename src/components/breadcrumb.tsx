import Link from 'next/link';
import Script from 'next/script';
import { ChevronRight } from 'lucide-react';

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export function Breadcrumb({ items, pageId }: { items: BreadcrumbItem[]; pageId?: string }) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://www.bossasesorias.cl${item.href}`,
    })),
  };

  const scriptId = `breadcrumb-${pageId || items[items.length - 1]?.href.replace(/\//g, '-') || 'default'}`;

  return (
    <>
      <Script
        id={scriptId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="container mx-auto max-w-[1200px] px-6 pt-6">
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
                {isLast ? (
                  <span className="text-foreground font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
