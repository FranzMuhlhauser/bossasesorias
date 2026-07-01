'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error no controlado:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-background">
      <div className="rounded-full bg-destructive/10 p-6 mb-6">
        <AlertCircle className="h-16 w-16 text-destructive" />
      </div>
      <h1 className="text-4xl font-bold text-primary mb-4">
        Algo salió mal
      </h1>
      <p className="text-lg text-muted-foreground max-w-md mb-8">
        Lo sentimos, ocurrió un error inesperado. Nuestro equipo ha sido notificado. Por favor, intenta de nuevo.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={reset} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <RefreshCw className="mr-2 h-5 w-5" />
          Intentar de nuevo
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="/">Volver al Inicio</a>
        </Button>
      </div>
      {error.digest && (
        <p className="mt-8 text-xs text-muted-foreground">
          Código de error: {error.digest}
        </p>
      )}
    </div>
  );
}
