import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { WhatsappIcon } from "../icons/whatsapp-icon";


export function WhatsappCta() {
  return (
    <div className="max-w-2xl mx-auto my-8">
      <Alert className="border-green-500/50 bg-green-500/5 text-center">
        <AlertDescription className="flex items-center justify-center text-green-700">
          <WhatsappIcon className="h-5 w-5 mr-2 text-green-500" />
          ¿Tienes una consulta rápida? Utiliza el <strong>botón flotante</strong> para hablar con un asesor ahora.
        </AlertDescription>
      </Alert>
    </div>
  );
}
