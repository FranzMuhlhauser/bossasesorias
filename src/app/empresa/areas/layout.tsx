import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Áreas de Especialización | Industrial, Legal, Tecnológica y Cultura',
  description: 'Explora nuestras cuatro áreas de especialización: Industrial y Operativa, Legal y Administrativa, Digital y Tecnológica, y Cultura y Desarrollo Organizacional. Soluciones integrales para tu empresa en Chile.',
  keywords: ['áreas de especialización', 'consultoría industrial', 'gestión legal empresas', 'soluciones tecnológicas', 'cultura organizacional chile', 'boss asesorías áreas'],
};

// El WebSite y la Organization que se declaraban aquí viven ahora en el @graph
// global de src/lib/schema.ts, inyectado desde el layout raíz; mantenerlos
// duplicaba nodos con otro @id (o sin él) para la misma entidad.
export default function AreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
