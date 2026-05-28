"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import { gtagEvent } from '@/lib/analytics';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const initialState = {
  message: "",
  errors: undefined,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={pending}>
      {pending ? "Enviando..." : "Enviar Mensaje"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Mensaje Enviado",
        description: state.message,
      });
      // Fire conversion event for analytics if configured
      try {
        gtagEvent('contact_form_submission', { method: 'contact_form' });
      } catch (e) {}
      formRef.current?.reset();
    } else if (state.message && (state.errors || !state.success)) {
       toast({
        variant: "destructive",
        title: "Error al enviar",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre Completo</Label>
        <Input id="name" name="name" placeholder="Tu nombre completo" required aria-describedby="name-error" />
        <div id="name-error" aria-live="polite" className="text-sm text-destructive">
            {state.errors?.name && <p>{state.errors.name[0]}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Correo Electrónico</Label>
        <Input id="email" name="email" type="email" placeholder="tu@email.com" required aria-describedby="email-error" />
        <div id="email-error" aria-live="polite" className="text-sm text-destructive">
            {state.errors?.email && <p>{state.errors.email[0]}</p>}
        </div>
      </div>
       <div className="space-y-2">
        <Label htmlFor="phone">Teléfono (Opcional)</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+56 9 1234 5678" aria-describedby="phone-error" />
        <div id="phone-error" aria-live="polite" className="text-sm text-destructive">
            {state.errors?.phone && <p>{state.errors.phone[0]}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">¿En qué podemos ayudarte?</Label>
        <Textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..." rows={5} required aria-describedby="message-error" />
        <div id="message-error" aria-live="polite" className="text-sm text-destructive">
            {state.errors?.message && <p>{state.errors.message[0]}</p>}
        </div>
      </div>
      <SubmitButton />
    </form>
  );
}
