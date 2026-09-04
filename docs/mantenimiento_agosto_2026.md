# Mantenimiento Agosto 2026 — Auditoría Web Premium

## Resumen

Auditoría completa del sistema web BOSS Asesorías (Next.js 16) ejecutada el 3 de septiembre de 2026 siguiendo el **Sistema de Auditoría Web Premium** (3 fases) y el **Manual de Buenas Prácticas para Desarrollo de Software por IA v3**.

**Resultado:** 🟡 CONDICIONAL → **84/100** (antes: 81/100, +3 puntos)

---

## Cambios Realizados

### 🔴 Errores Críticos Corregidos

| # | Problema | Archivo | Solución |
|---|----------|---------|----------|
| 1 | Logo JSON-LD roto (`/icon.png` inexistente) | `src/app/layout.tsx` | Cambiado a `/images/logo_boss.webp` |
| 2 | Página `/empresa/areas` sin metadata SEO | `src/app/empresa/areas/page.tsx` | Agregado `export const metadata` con title, description, keywords, canonical |
| 3 | Título `/contacto` excedía 60 caracteres | `src/app/contacto/page.tsx` | Acortado a `'Contacto BOSS Asesorías | Solicita Asesoría Estratégica'` |

### 🟡 Optimizaciones Aplicadas

| # | Mejora | Archivos | Beneficio |
|---|--------|----------|-----------|
| 4 | Eliminación de 7 dependencias no usadas | `package.json` | Bundle reducido (react-email, resend, dotenv, genkit, @genkit-ai/google-genai, @genkit-ai/next, patch-package) |
| 5 | Eliminación de archivos huérfanos | `src/components/ui/chart.tsx`, `src/ai/` | Mantenibilidad, reducción de código muerto |
| 6 | FAQ schema agregado a 2 páginas | `src/app/empresa/por-que-boss/page.tsx`, `src/app/empresa/areas/page.tsx` | AEO: de 6/9 a 9/9 páginas con FAQPage schema |
| 7 | Canonical dinámico en 8 sub-rutas | Todas las páginas con metadata | SEO: prevención de contenido duplicado |
| 8 | Eliminación de `.env` duplicado | `.env` eliminado, `.env.local` conservado | Seguridad: una sola fuente de verdad |
| 9 | Imagen renombrada a minúsculas | `public/images/`, `src/app/soluciones/capacitaciones/page.tsx` | Mantenibilidad: consistencia de naming |

---

## Eliminación de Dependencias

### Paquetes eliminados de `package.json`

```
react-email        → No importado en ningún componente
resend             → No importado en ningún componente
dotenv             → Next.js maneja .env internamente
genkit             → Código en src/ai/ no utilizado
@genkit-ai/google-genai → Código en src/ai/ no utilizado
@genkit-ai/next    → Código en src/ai/ no utilizado
patch-package      → Sin scripts postinstall que lo usen
genkit-cli (dev)   → Código en src/ai/ no utilizado
```

### Archivos eliminados

```
src/ai/dev.ts              → Genkit dev server (no utilizado)
src/ai/genkit.ts           → Genkit config (no utilizado)
src/components/ui/chart.tsx → Componente shadcn/ui (no importado)
```

### Scripts eliminados de `package.json`

```
genkit:dev   → "genkit start -- tsx src/ai/dev.ts"
genkit:watch → "genkit start -- tsx --watch src/ai/dev.ts"
```

---

## Metadata SEO Corregida

### Canonical dinámico agregado

| Ruta | Canonical |
|------|-----------|
| `/contacto` | `/contacto` |
| `/soluciones` | `/soluciones` |
| `/soluciones/bienestar-seguridad` | `/soluciones/bienestar-seguridad` |
| `/soluciones/gestion-legal` | `/soluciones/gestion-legal` |
| `/soluciones/tecnologia` | `/soluciones/tecnologia` |
| `/soluciones/capacitaciones` | `/soluciones/capacitaciones` |
| `/empresa/por-que-boss` | `/empresa/por-que-boss` |
| `/empresa/areas` | `/empresa/areas` |

### Página `/empresa/areas` — Metadata agregada

```typescript
export const metadata: Metadata = {
  title: 'Áreas de Especialización | Industrial, Legal, Tech y Cultura',
  description: 'Conoce nuestras 4 áreas de especialización: seguridad industrial, gestión legal, tecnología digital y cultura organizacional para empresas en Chile.',
  keywords: ['áreas especialización empresas', 'consultoría industrial chile', 'gestión legal empresas', 'tecnología empresarial', 'cultura organizacional'],
  alternates: {
    canonical: '/empresa/areas',
  },
};
```

### Título `/contacto` acortado

```
Antes: "Contacto BOSS Asesorías | Solicita una Asesoría Estratégica Personalizada" (76 chars)
Ahora: "Contacto BOSS Asesorías | Solicita Asesoría Estratégica" (55 chars)
```

---

## Schema JSON-LD Corregido

### Logo en Organization schema (`layout.tsx`)

```json
// Antes
"logo": "https://www.bossasesorias.cl/icon.png"

// Ahora
"logo": "https://www.bossasesorias.cl/images/logo_boss.webp"
```

### FAQPage schema agregado

| Página | Schema | Preguntas |
|--------|--------|-----------|
| `/empresa/por-que-boss` | FAQPage | 3 (significado BOSS, trayectoria, enfoque integral) |
| `/empresa/areas` | FAQPage | 3 (cómo determinar áreas, contratación por separado, sectores) |

---

## Verificación

| Check | Estado |
|-------|--------|
| `npm run typecheck` | ✅ Pass (0 errores) |
| `npm run lint` | ✅ Pass (0 warnings) |
| `npm run build` | ✅ Pass (19 páginas generadas) |

---

## Optimización para Agentes de IA — WebMCP y llms.txt

### Cambios Realizados

| # | Mejora | Archivo | Detalle |
|---|--------|---------|---------|
| 10 | Archivo `llms.txt` creado | `public/llms.txt` | Índice LLM-friendly con H1, blockquote resumen y 4 secciones H2 curadas (Servicios, Empresa, Blog, Contacto) |
| 11 | Anotaciones WebMCP declarativas | `src/components/contact-form.tsx` | Atributos `toolname`, `tooldescription` y `toolparamdescription` en formulario e inputs |
| 12 | Registro imperativo WebMCP | `src/components/contact-form.tsx` | Hook `useWebMCPContactTool` registra herramienta `submit_contact_form` con esquema JSON explícito |
| 13 | Manejo de envíos por agente | `src/components/contact-form.tsx` | Handler `SubmitEvent.respondWith()` para respuestas estructuradas cuando `agentInvoked === true` |
| 14 | Eventos WebMCP | `src/components/contact-form.tsx` | Listeners `toolactivated` / `toolcanceled` con scroll al formulario |
| 15 | Reglas robots.txt para IA | `src/app/robots.ts` | `allow: /` para GPTBot, ChatGPT-User, ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot, Google-Extended, CCBot, OAI-SearchBot |
| 16 | Permissions-Policy actualizada | `next.config.ts` | Agregado `tools=self()` para habilitar API WebMCP en same-origin |

### Especificación Técnica

#### llms.txt (`public/llms.txt`)

- Formato: Markdown plano según especificación v2 de llmstxt.org
- Encabezado H1 obligatorio con nombre del sitio
- Blockquote resumen del proyecto
- Secciones H2: Servicios, Empresa, Blog, Contacto
- 14 enlaces absolutos con descripciones orientadas a IA
- Sin HTML, sin listas anidadas, sin URLs relativas

#### WebMCP en `contact-form.tsx`

**Esquema JSON de la herramienta:**

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string", "description": "Nombre completo del consultor o representante de la empresa" },
    "email": { "type": "string", "format": "email", "description": "Correo electrónico de contacto válido" },
    "phone": { "type": "string", "description": "Número de teléfono con código de país (opcional)" },
    "message": { "type": "string", "description": "Descripción detallada de la necesidad de asesoría estratégica" }
  },
  "required": ["name", "email", "message"]
}
```

**Características:**
- Feature detection: `'modelContext' in document` para navegadores sin soporte
- Registro condicional de herramienta solo cuando `document.modelContext.registerTool` está disponible
- Sin `toolautosubmit` (formulario de alto impacto según recomendaciones WebMCP)
- Manejo seguro de tipos con interfaces locales `ModelContext` y `WebMCPSubmitEvent`
- Compatible con SSR/SSG de Next.js (feature detection en `useEffect`)

#### robots.ts — Bots de IA permitidos

```typescript
{ userAgent: 'GPTBot', allow: '/' },
{ userAgent: 'ChatGPT-User', allow: '/' },
{ userAgent: 'ClaudeBot', allow: '/' },
{ userAgent: 'Claude-User', allow: '/' },
{ userAgent: 'Claude-SearchBot', allow: '/' },
{ userAgent: 'PerplexityBot', allow: '/' },
{ userAgent: 'Google-Extended', allow: '/' },
{ userAgent: 'CCBot', allow: '/' },
{ userAgent: 'OAI-SearchBot', allow: '/' },
```

#### next.config.ts — Permissions-Policy

```typescript
{
  key: 'Permissions-Policy',
  value: 'camera=(), microphone=(), geolocation=(), tools=self()',
}
```

### Validación

| Check | Estado |
|-------|--------|
| `npm run lint` | ✅ Pass (0 warnings) |
| `npm run typecheck` | ✅ Pass (0 errores) |
| `npm run build` | ✅ Pass (19 páginas generadas) |

### Notas de Compatibilidad

- WebMCP está en **origin trial** en Chrome 149+ (mid-2026)
- Navegadores sin soporte ignoran los atributos `tool*` y el hook JavaScript
- El formulario mantiene funcionalidad completa como fallback
- No se introdujeron dependencias nuevas

---

## Pendiente Para Alcanzar ≥90 (APROBADO)

| # | Tarea | Impacto Estimado |
|---|-------|-----------------|
| 1 | Crear `opengraph-image.png` (1200×630px) en `public/` | +2-3 puntos SEO |
| 2 | Crear `twitter-image.png` (1200×630px) en `public/` | +1-2 puntos SEO |
| 3 | Optimizar LCP del hero (dimensiones explícitas o preload) | +1-2 puntos CWV |

**Una vez completados estos 3 puntos, el proyecto debería alcanzar ≥90/100 (🟢 APROBADO).**

---

## Estructura del Proyecto (Post-Mantenimiento)

```
src/
├── app/
│   ├── layout.tsx          ← Metadata base, JSON-LD Organization (logo corregido)
│   ├── page.tsx            ← Home (FAQ, News, Schema)
│   ├── actions.ts          ← Server actions (Formspree)
│   ├── sitemap.ts          ← Sitemap dinámico
│   ├── robots.ts           ← Robots.txt (NUEVO: reglas para crawlers IA)
│   ├── globals.css         ← Theme variables, dark mode
│   ├── error.tsx           ← Error boundary
│   ├── loading.tsx         ← Skeleton loader
│   ├── not-found.tsx       ← 404 page
│   ├── manifest.ts         ← PWA manifest
│   ├── contacto/           ← Contact form + LocalBusiness schema + FAQ + WebMCP
│   ├── empresa/
│   │   ├── areas/          ← 4 áreas + FAQ (NUEVO: metadata + FAQ schema)
│   │   └── por-que-boss/   ← About + FAQ (NUEVO: FAQ schema)
│   └── soluciones/
│       ├── page.tsx        ← Tabs con 4 categorías + FAQ
│       ├── bienestar-seguridad/  ← Service + HowTo + FAQ
│       ├── gestion-legal/        ← Service + HowTo + FAQ
│       ├── tecnologia/           ← Service + HowTo + FAQ
│       └── capacitaciones/       ← Service + HowTo
├── components/
│   ├── header.tsx          ← Mobile menu con focus trap
│   ├── navigation.tsx      ← Desktop/mobile nav
│   ├── footer.tsx          ← Social links + CTA
│   ├── contact-form.tsx    ← Form con validación Zod + WebMCP (NUEVO)
│   ├── whatsapp-button.tsx ← Popover interactivo por categoría
│   ├── dynamic-whatsapp-button.tsx ← Dynamic import (SSR disabled)
│   ├── analytics-provider.tsx      ← Pageview tracking
│   ├── stats-counter.tsx   ← Animated stats
│   ├── breadcrumb.tsx      ← Breadcrumb + JSON-LD
│   ├── logo.tsx            ← Text logo
│   ├── icons/
│   │   └── whatsapp-icon.tsx
│   └── ui/                 ← 35 shadcn/ui primitives (chart.tsx ELIMINADO)
├── hooks/
│   ├── use-toast.ts
│   └── use-mobile.tsx
└── lib/
    ├── utils.ts            ← cn() utility
    ├── analytics.ts        ← gtag + dataLayer
    ├── placeholder-images.ts
    └── placeholder-images.json
```

**Nuevos archivos agregados:**
```
public/llms.txt             ← Índice LLM-friendly (NUEVO)
```

---

## Auditorías Anteriores

| Fecha | Fase | Archivo |
|-------|------|---------|
| Agosto 2026 | Fase 1 (Análisis) | `audits/fase1-reporte.xml` |
| Agosto 2026 | Fase 3 (Puntuación) | `audits/fase3-puntuacion-final.xml` |
| Septiembre 2026 | Fase 1+2+3 (Completa) | Este documento |

---

## Puntuación Comparativa

| Categoría | Antes | Después | Cambio |
| |-----------|-------|---------|--------|
| SEO Técnico | 7/10 | 8/10 | +1 |
| AEO | 8/10 | 9/10 | +1 |
| GEO | 8/10 | 9/10 | +1 |
| Performance & Build | 7/10 | 8/10 | +1 |
| Core Web Vitals | 7/10 | 7/10 | — |
| Optimización Medios | 9/10 | 9/10 | — |
| Responsive & UX Móvil | 9/10 | 9/10 | — |
| UX General | 9/10 | 9/10 | — |
| Accesibilidad | 8/10 | 8/10 | — |
| Seguridad | 9/10 | 9/10 | — |
| **TOTAL** | **81/100** | **85/100** | **+4** |

**Estado:** 🟡 CONDICIONAL (85/100) → Pendiente creación de imágenes OG/Twitter y optimización LCP para alcanzar 🟢 APROBADO (≥90)
