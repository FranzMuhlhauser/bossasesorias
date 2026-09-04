import { Breadcrumb } from '@/components/breadcrumb';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Blog', href: '/blog' }]} />
      {children}
    </>
  );
}
