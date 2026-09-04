# Plan: Implementación de WebMCP y llms.txt en BOSS Asesorías

## Resumen
Implementar optimización para agentes de IA en el sitio web de BOSS Asesorías basándose en los estándares emergentes WebMCP (Web Machine Context Protocol) y llms.txt. El sitio actualmente no cuenta con ninguna de estas implementaciones.

## Estado actual
- **Formularios**: Solo existe `src/components/contact-form.tsx` (usado en `/` y `/contacto`). No tiene anotaciones WebMCP.
- **WebMCP**: No existe ninguna herramienta registrada ni API de `modelContext`.
- **llms.txt**: No existe en `public/`.
- **robots.ts**: Solo permite `*` genérico, sin reglas específicas para crawlers de IA.
- **next.config.ts**: No incluye `tools` en `Permissions-Policy`.

## Tareas

### 1. Crear `public/llms.txt`
Crear el archivo siguiendo la especificación v2 de llmstxt.org.

**Especificación**:
- Ruta: `public/llms.txt`
- Formato: Markdown plano
- Obligatorio: Encabezado H1 con el nombre del sitio
- Opcional: Blockquote de resumen, secciones H2 con enlaces curados
- Enlaces: Formato `- [Título](URL): descripción`
- No usar HTML, no usar listas anidadas, no usar URLs relativas

**Contenido propuesto**:
```markdown
# BOSS Asesorías

> Consultoría integral en bienestar laboral, gestión legal y soluciones tecnológicas para empresas en Chile. Transformamos organizaciones protegiendo equipos, optimizando procesos y fortaleciendo la cultura empresarial.

## Servicios

- [Bienestar Laboral y Seguridad Ocupacional](/soluciones/bienestar-seguridad): Evaluaciones ergonómicas, protocolos de salud mental, auditorías de gestión y vigilancia de la salud.
- [Gestión Legal y Administrativa](/soluciones/gestion-legal): Contratos, remuneraciones, finiquitos, planificación tributaria y administración de activos.
- [Soluciones Tecnológicas Estratégicas](/soluciones/tecnologia): Desarrollo web, integración de IA, soporte técnico, recuperación de datos y ciberseguridad.
- [Cultura y Desarrollo Organizacional](/soluciones/capacitaciones): Diagnóstico de clima, gestión del cambio, coaching de liderazgo y evaluación 360°.

## Empresa

- [Sobre BOSS Asesorías](/empresa/por-que-boss): Nuestra historia, metodología y compromiso con la transformación empresarial en Chile.
- [Nuestras Áreas de Especialización](/empresa/areas): Conoce los ejes estratégicos que integran bienestar, legalidad y tecnología.

## Blog

- [Ley de 40 Horas en Chile 2026](/blog/ley-40-horas): Guía completa sobre implementación, plazos y cumplimiento de la Ley 21.561.
- [Ley Karin: Obligaciones para Empresas](/blog/ley-karin): Protocolos de salud mental y prevención de acoso laboral según la Ley 21.643.
- [Ciberseguridad en Chile 2026](/blog/ciberseguridad-chile): Ley Marco 21.663, obligaciones y protección contra ransomware.
- [IA y Cultura Organizacional](/blog/ia-cultura-organizacional): Cómo integrar inteligencia artificial en la cultura empresarial.

## Contacto

- [Contacto](/contacto): Formulario de contacto para asesorías estratégicas personalizadas.
```

### 2. Modificar `src/components/contact-form.tsx` — WebMCP Declarativo + Imperativo

**Objetivo**: Anotar el formulario con atributos WebMCP declarativos y registrar la herramienta imperativamente para control total del esquema.

**Cambios**:
1. Añadir atributos declarativos al `<form>`:
   - `toolname="submit_contact_form"`
   - `tooldescription="Submit a contact request to BOSS Asesorías for a strategic advisory consultation."`
   - `toolparamdescription` en cada `<Input>` / `<Textarea>` para describir parámetros en el esquema JSON generado

2. Añadir hook `useWebMCPContactTool` que:
   - Verifica disponibilidad de `document.modelContext` (feature detection)
   - Registra herramienta imperativa `submit_contact_form` con esquema JSON explícito
   - Maneja eventos `toolactivated` y `toolcanceled` para UX (scroll al formulario, resaltado)
   - Maneja envíos invocados por agente mediante `SubmitEvent.respondWith()` cuando `agentInvoked === true`

3. Esquema JSON explícito (imperativo):
```typescript
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
```

4. NO incluir `toolautosubmit` (el envío de formulario de contacto es una acción de alto impacto según las recomendaciones de WebMCP).

**Validación de esquema**:
- Verificar en desarrollo que el esquema cumple JSON Schema Draft 2020-12
- Asegurar que `required` coincide con los campos `required` del formulario
- Asegurar que los `name` de los parámetros coinciden con los atributos `name` de los inputs

### 3. Modificar `src/app/robots.ts` — Reglas para crawlers de IA

**Objetivo**: Permitir explícitamente el acceso de bots de búsqueda y recuperación de IA, bloquear solo los de entrenamiento.

**Cambios**:
```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "Claude-User",
        allow: "/",
      },
      {
        userAgent: "Claude-SearchBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
    ],
    sitemap: "https://www.bossasesorias.cl/sitemap.xml",
  };
}
```

**Nota**: Se permite acceso a todos los bots de recuperación y búsqueda de IA. Los bots de entrenamiento (`GPTBot`, `ClaudeBot`, `Google-Extended`) se permiten por ahora; si el usuario prefiere bloquear entrenamiento, se pueden cambiar a `disallow: ["/"]`.

### 4. Modificar `next.config.ts` — Permissions-Policy para `tools`

**Objetivo**: Asegurar que la API WebMCP esté disponible en contextos de mismo origen (top-level + same-origin iframes) y deshabilitada en cross-origin iframes.

**Cambios**:
```typescript
{
  key: 'Permissions-Policy',
  value: 'camera=(), microphone=(), geolocation=(), tools=self()',
},
```

**Nota**: El valor por defecto de `tools` ya es `self`, pero lo declaramos explícitamente para claridad y para garantizar el comportamiento en todos los navegadores.

## Consideraciones técnicas

### Compatibilidad de navegadores
- WebMCP está en **origin trial** en Chrome 149+ (mid-2026).
- Se implementará con **feature detection** (`'modelContext' in document`).
- Navegadores sin soporte ignorarán los atributos `tool*` y el hook JavaScript, manteniendo el formulario funcional.

### Seguridad
- WebMCP está diseñado para flujos humano-en-el-bucle (human-in-the-loop).
- No exponer datos sensibles en el esquema de la herramienta.
- El formulario de contacto ya tiene validación Zod en el server action; la herramienta WebMCP delega en esa validación existente.

### Próximos pasos (fuera de scope inicial)
- Añadir `Link: <llms.txt>; rel="describedby"` en headers cuando el sitio sirva HTML.
- Evaluar la necesidad de `llms-full.txt` (archivo compañero con contenido concatenado).
- Considerar registro de herramientas adicionales si se agregan más formularios o funcionalidades interactivas.

## Validación
1. `npm run lint`
2. `npm run typecheck`
3. `npm run build`
4. Verificar manualmente en Chrome 149+ con el inspector de WebMCP que la herramienta aparece registrada.
5. Verificar que `/llms.txt` se sirve con `Content-Type: text/plain` o `text/markdown`.
