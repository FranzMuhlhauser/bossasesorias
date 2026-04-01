import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] text-center px-6">
      <h1 className="text-9xl font-bold text-accent">404</h1>
      <h2 className="mt-4 text-4xl font-semibold text-primary">Página no encontrada</h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Button asChild className="mt-8" size="lg">
        <Link href="/">Volver al Inicio</Link>
      </Button>
    </div>
  )
}
