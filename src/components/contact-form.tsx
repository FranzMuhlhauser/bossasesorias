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

const contactToolSchema = {
  type: "object" as const,
  properties: {
    name: { type: "string", description: "Nombre completo del consultor o representante de la empresa" },
    email: { type: "string", format: "email", description: "Correo electrónico de contacto válido" },
    phone: { type: "string", description: "Número de teléfono con código de país (opcional)" },
    message: { type: "string", description: "Descripción detallada de la necesidad de asesoría estratégica" },
  },
  required: ["name", "email", "message"],
};

async function executeContactTool(_agent: unknown, args: Record<string, unknown>) {
  const formData = new FormData();
  formData.append("name", String(args.name ?? ""));
  formData.append("email", String(args.email ?? ""));
  formData.append("phone", String(args.phone ?? ""));
  formData.append("message", String(args.message ?? ""));

  const result = await submitContactForm(initialState, formData);

  return {
    success: result.success,
    message: result.message,
    errors: result.errors,
  };
}

interface ModelContext {
  registerTool: (name: string, options: Record<string, unknown>) => Promise<void>;
}

interface WebMCPSubmitEvent extends Event {
  agentInvoked: boolean;
  respondWith(promise: Promise<Record<string, unknown>>): void;
}

function useWebMCPContactTool() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const ctx = (document as unknown as Record<string, unknown>).modelContext as ModelContext | undefined;
    if (!ctx?.registerTool || typeof ctx.registerTool !== "function") return;

    let cancelled = false;

    async function register() {
      if (!ctx) return;
      try {
        await ctx.registerTool("submit_contact_form", {
          description: "Submit a contact request to BOSS Asesorías for a strategic advisory consultation.",
          inputSchema: contactToolSchema,
          execute: executeContactTool,
          readOnlyHint: false,
          idempotentHint: false,
          destructiveHint: false,
        });
      } catch {
        // Tool may already be registered in strict environments.
      }

      const handleActivated = () => {
        const form = document.getElementById("contacto-form") || document.querySelector("[data-contact-form]");
        form?.scrollIntoView({ behavior: "smooth", block: "center" });
      };

      const handleCanceled = () => {
        // Optional: restore UI state if needed.
      };

      window.addEventListener("toolactivated", handleActivated);
      window.addEventListener("toolcanceled", handleCanceled);

      return () => {
        window.removeEventListener("toolactivated", handleActivated);
        window.removeEventListener("toolcanceled", handleCanceled);
      };
    }

    const cleanupPromise = register().then((cleanup) => () => {
      if (cleanup) cleanup();
      if (cancelled) return;
    });

    return () => {
      cancelled = true;
      cleanupPromise.then((cleanup) => cleanup && cleanup());
    };
  }, []);
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useWebMCPContactTool();

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Mensaje Enviado",
        description: state.message,
      });
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const submitEvent = event.nativeEvent as SubmitEvent;
    const webmcpEvent = submitEvent as unknown as WebMCPSubmitEvent;
    if (webmcpEvent.agentInvoked) {
      event.preventDefault();
      const form = event.currentTarget;
      const formData = new FormData(form);
      const result = await submitContactForm(initialState, formData);
      webmcpEvent.respondWith(
        Promise.resolve({
          success: result.success,
          message: result.message,
        })
      );
    }
  };

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={handleSubmit}
      data-contact-form
      {...{
        toolname: "submit_contact_form",
        tooldescription: "Submit a contact request to BOSS Asesorías for a strategic advisory consultation.",
      } as React.FormHTMLAttributes<HTMLFormElement>}
      className="space-y-6"
    >
      <div className="space-y-2">
        <Label htmlFor="name">Nombre Completo</Label>
        <Input id="name" name="name" placeholder="Tu nombre completo" required aria-describedby="name-error" {...{ toolparamdescription: "Nombre completo del consultor o representante de la empresa" } as React.InputHTMLAttributes<HTMLInputElement>} />
        <div id="name-error" aria-live="polite" className="text-sm text-destructive">
            {state.errors?.name && <p>{state.errors.name[0]}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Correo Electrónico</Label>
        <Input id="email" name="email" type="email" placeholder="tu@email.com" required aria-describedby="email-error" {...{ toolparamdescription: "Correo electrónico de contacto válido" } as React.InputHTMLAttributes<HTMLInputElement>} />
        <div id="email-error" aria-live="polite" className="text-sm text-destructive">
            {state.errors?.email && <p>{state.errors.email[0]}</p>}
        </div>
      </div>
       <div className="space-y-2">
        <Label htmlFor="phone">Teléfono (Opcional)</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+56 9 1234 5678" aria-describedby="phone-error" {...{ toolparamdescription: "Número de teléfono con código de país (opcional)" } as React.InputHTMLAttributes<HTMLInputElement>} />
        <div id="phone-error" aria-live="polite" className="text-sm text-destructive">
            {state.errors?.phone && <p>{state.errors.phone[0]}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">¿En qué podemos ayudarte?</Label>
        <Textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..." rows={5} required aria-describedby="message-error" {...{ toolparamdescription: "Descripción detallada de la necesidad de asesoría estratégica" } as React.TextareaHTMLAttributes<HTMLTextAreaElement>} />
        <div id="message-error" aria-live="polite" className="text-sm text-destructive">
            {state.errors?.message && <p>{state.errors.message[0]}</p>}
        </div>
      </div>
      <SubmitButton />
    </form>
  );
}
