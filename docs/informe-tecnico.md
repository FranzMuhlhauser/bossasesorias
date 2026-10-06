# Informe Técnico del Sitio Web: BOSS Asesorías

## 1. Resumen Ejecutivo

Este documento describe la arquitectura técnica, tecnologías utilizadas y funcionalidades implementadas en el sitio web corporativo de BOSS Asesorías. El objetivo del proyecto fue desarrollar una presencia digital profesional, moderna y optimizada que sirva como principal canal de comunicación y captación de clientes.

El sitio fue construido utilizando un stack tecnológico moderno, enfocado en el rendimiento, la experiencia de usuario y la mantenibilidad a largo plazo.

---

## 2. Arquitectura y Tecnologías

El proyecto se basa en el framework **Next.js 15** con el **App Router**, lo que permite una estructura de rutas basada en el sistema de archivos y optimizaciones de renderizado avanzadas.

- **Framework Principal:** Next.js 15 (React 18)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS, complementado con la biblioteca de componentes **ShadCN/UI** para una base de UI consistente y personalizable.
- **Componentes:** Se utilizan Server Components por defecto para mejorar el rendimiento y Client Components (`'use client'`) para las secciones que requieren interactividad.
- **Formularios:** Se gestionan a través de **Server Actions** de Next.js, lo que permite procesar la lógica del backend directamente sin necesidad de crear endpoints de API explícitos.
- **Envío de Correos:** Integración con **Resend** para el envío de notificaciones por correo electrónico desde el formulario de contacto.
- **Hosting:** Preparado para despliegue en **Firebase App Hosting**.

---

## 3. Estructura de Páginas y Rutas

La estructura del sitio sigue las convenciones del App Router de Next.js:

- **/ (Página de Inicio):** `src/app/page.tsx`
  - La página principal que presenta un resumen de la empresa, los ejes de transformación y acceso a las secciones clave.

- **/soluciones:** `src/app/soluciones/page.tsx`
  - Hub central que detalla los servicios, agrupados en pestañas interactivas.
  - **Rutas Anidadas (Detalle por área):**
    - `/soluciones/bienestar-seguridad`
    - `/soluciones/gestion-legal`
    - `/soluciones/tecnologia`
    - `/soluciones/capacitaciones`

- **/empresa:**
  - `/empresa/por-que-boss`
  - `/empresa/areas`

- **/contacto:** `src/app/contacto/page.tsx`
  - Página con información de contacto y formulario.

- **/layout.tsx:** Define la estructura principal de la aplicación, incluyendo el `Header`, `Footer` y metadatos globales.

- **/not-found.tsx:** Página 404 personalizada.

---

## 4. Funcionalidades Destacadas

### a. Diseño Responsivo y Moderno
El sitio es completamente adaptable a dispositivos móviles, tabletas y computadoras de escritorio gracias a Tailwind CSS. La interfaz utiliza componentes de ShadCN/UI, personalizados con una paleta de colores corporativa definida en `src/app/globals.css`.

### b. Navegación Intuitiva
- **Header Fijo y Dinámico:** El encabezado cambia de transparente a sólido al hacer scroll, mejorando la usabilidad.
- **Menú Móvil:** Un menú optimizado para pantallas pequeñas asegura una navegación fluida en cualquier dispositivo.

### c. Formulario de Contacto Funcional
- **Componente Reutilizable:** `src/components/contact-form.tsx`.
- **Procesamiento Seguro:** Utiliza una Server Action (`src/app/actions.ts`) para validar los datos con Zod y procesar el envío.
- **Notificación por Correo:** Envía un email profesionalmente formateado al destinatario configurado usando el servicio Resend.
- **Feedback al Usuario:** Muestra notificaciones (toasts) de éxito o error tras el envío, mejorando la experiencia del usuario.

### d. Asistente Interactivo de WhatsApp
- **Componente Flotante:** `src/components/whatsapp-button.tsx`.
- **Menú Multi-paso:**
  1. El usuario selecciona una categoría general de servicio.
  2. Se muestra una lista de servicios específicos para esa categoría.
  3. Al elegir un servicio, se abre WhatsApp con un mensaje pre-configurado, facilitando el primer contacto.
- **Opción de Consulta Abierta:** Incluye una opción para "Otro tipo de consulta" para capturar leads que no encajan en las categorías predefinidas.

### e. Gestión de Contenido Visual
- **Imágenes Optimizadas:** Uso del componente `<Image>` de Next.js para optimizar la carga y el rendimiento de las imágenes.
- **Contenido Personalizado:** Se reemplazaron imágenes de stock por imágenes corporativas proporcionadas, unificando la identidad visual de la marca en todas las secciones.

---

## 5. Próximos Pasos y Escalabilidad

El proyecto está construido sobre una base sólida que permite futuras expansiones:

- **Integración con un CMS:** La estructura de componentes facilita la conexión con un Headless CMS (como Sanity, Strapi o Contentful) para gestionar el contenido de las páginas dinámicamente.
- **Blog o Sección de Noticias:** Se puede desarrollar la sección de noticias para que sea dinámica, consumiendo artículos desde un backend o CMS.
- **Área de Clientes:** La arquitectura permite añadir funcionalidades de autenticación (por ejemplo, con Firebase Auth) para crear un portal privado para clientes.

Este informe resume el estado técnico del sitio web de BOSS Asesorías, destacando una implementación robusta, escalable y centrada en el usuario.