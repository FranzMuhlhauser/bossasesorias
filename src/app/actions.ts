"use server";

import { z } from "zod";
import { Resend } from "resend";
import { ContactFormEmail } from "@/components/emails/contact-form-email";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, introduce un email válido."),
  phone: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  } | undefined;
  success: boolean;
};

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.EMAIL_RECIPIENT;

  if (!resendApiKey || !recipientEmail) {
    console.error("Falta la clave de API de Resend o el email de destino.");
    return {
      message: "Error del servidor: La configuración para enviar correos está incompleta.",
      success: false,
    };
  }

  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Por favor, corrige los errores en el formulario.",
      success: false,
    };
  }
  
  try {
    const resend = new Resend(resendApiKey);
    const { name, email, phone, message } = validatedFields.data;
    const { data, error } = await resend.emails.send({
      from: 'BOSS Asesorías <onboarding@resend.dev>', // Este remitente debe ser verificado en Resend
      to: recipientEmail,
      reply_to: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      react: ContactFormEmail({ name, email, phone, message }),
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || 'No proporcionado'}\nMensaje: ${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        message: "Hubo un error al enviar tu mensaje. Por favor, inténtalo más tarde.",
        success: false,
      };
    }

    return {
      message: "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.",
      success: true,
      errors: {},
    };

  } catch (exception) {
    console.error("Exception sending email:", exception);
    return {
      message: "Hubo un error inesperado al enviar tu mensaje. Por favor, inténtalo más tarde.",
      success: false,
    };
  }
}
