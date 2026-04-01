"use server";

import { z } from "zod";

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
  const formspreeId = process.env.FORMSPREE_ID; // Obtener de https://formspree.io

  if (!formspreeId) {
    console.error("Falta la configuración de FORMSPREE_ID en el archivo .env.");
    return {
      message: "Error del servidor: La configuración de contacto no está completa.",
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
    const { name, email, phone, message } = validatedFields.data;
    
    // Determinamos el endpoint: si es un email (contiene @), usamos el endpoint directo (legacy).
    // Si es un ID de formulario, usamos el endpoint recomendado /f/
    const endpoint = formspreeId.includes('@') 
      ? `https://formspree.io/${formspreeId}` 
      : `https://formspree.io/f/${formspreeId}`;
    
    // Enviamos a Formspree usando fetch
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || 'No proporcionado',
        message,
        _subject: `Nuevo mensaje de contacto de ${name} (BOSS Asesorías)`,
      }),
    });

    if (!response.ok) {
       const result = await response.json();
       console.error("Formspree error:", result);
       return {
         message: "Hubo un error al enviar tu consulta. Por favor, inténtalo más tarde.",
         success: false,
       };
    }

    return {
      message: "¡Gracias por tu mensaje! Lo hemos recibido correctamente y nos contactaremos pronto.",
      success: true,
      errors: {},
    };

  } catch (exception) {
    console.error("Exception sending email via Formspree:", exception);
    return {
      message: "Hubo un error inesperado al enviar tu mensaje. Por favor, inténtalo más tarde.",
      success: false,
    };
  }
}
