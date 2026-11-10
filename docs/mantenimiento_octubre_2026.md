# Mantenimiento Octubre 2026 — SEO técnico, AEO/GEO y datos estructurados

## Resumen

Sesión de trabajo sobre la rama `fix/seo-tecnico` (11 commits, sin push al momento de escribir este informe) centrada en SEO técnico, optimización para motores de respuesta (AEO) y para asistentes de IA (GEO).

**Documento:** nombrado «Octubre 2026» según lo solicitado; los commits de la rama están fechados el **10 de noviembre de 2026**.

**Alcance:** de 8 tareas encargadas, todas aplicadas. El criterio transversal fue no cambiar URLs, textos de artículos ni diseño visible, y no inventar ningún dato (nombres, fechas, testimonios, cifras, direcciones).

**Estado de verificación final:** `typecheck`, `lint` y `build` en verde (24 páginas estáticas).

---

## Cambios por tarea

### Tarea 1 — Imágenes sociales e iconos

#### Portada

| # | Cambio | Archivo |
|---|--------|---------|
| 1 | Imagen OG 1200×630 por convención de Next | `src/app/opengraph-image.png` + `.alt.txt` |
| 2 | Imagen Twitter 1200×630 | `src/app/twitter-image.png` + `.alt.txt` |
| 3 | Eliminadas las entradas `openGraph.images` y `twitter.images` que competían con esos archivos | `src/app/layout.tsx` |

**Decisión:** las imágenes se compusieron con Pillow porque `require('sharp')` fallaba en este entorno (`Cannot read properties of undefined (reading 'output')`); no se añadió ninguna dependencia (sharp ya estaba en `devDependencies`).

**Verificado:** `og:image` y `twitter:image` absolutas, HTTP 200 `image/png`, 583.693 B, md5 del archivo servido igual al local.

Commit: `d83a6f7`.

#### Favicon e iconos

| Problema | Solución |
|----------|----------|
| `public/favicon.ico` era en realidad un WebP de 410 B servido como `image/x-icon` | Archivo eliminado; Next sirve el ICO real de `src/app/favicon.ico` (15.086 B, 16/32/48 px) |
| Icono WebP declarado como `any` | `sizes: '150x150'` en `layout.tsx` |
| Manifest apuntando a un archivo inexistente | `/icon-192.png` (192×192) + WebP 150×150 en `src/app/manifest.ts` |

Commit: `c2d5aaf`.

#### Imágenes sociales de los artículos

| # | Cambio | Detalle |
|---|--------|---------|
| 1 | `twitter:image` propia en cada artículo | Antes solo existía `og:image` |
| 2 | Encuadres 1200×630 | `public/images/og/news-40-hrs.jpg` (131 KB), `news-ley-karin.jpg` (186 KB), `news-ciberseguridad.jpg` (259 KB), `news-ia-cultura.jpg` (148 KB) |
| 3 | Metadatos con `width`, `height` y `alt` | Los 4 `src/app/blog/*/page.tsx` |

Las imágenes originales de 1024×1024 (`public/images/news-*.webp`) se mantienen intactas para la cabecera de cada artículo. Los recortes se revisaron visualmente y se corrigieron los offsets (40 hrs 175, ciber 175, karin 320, ia 250).

Commits: `e4f2d20`, `c18ee10`.

---

### Tarea 2 — Respuestas de las FAQ en el HTML

**Problema:** Radix desmonta el contenido del acordeón cerrado, así que las respuestas no existían en el HTML; los rastreadores que no ejecutan JavaScript (GPTBot, ClaudeBot, PerplexityBot) solo las veían en el JSON-LD.

**Solución:** `AccordionContent` usa `forceMount` y se oculta por estado con `data-[state=closed]:hidden` (`src/components/ui/accordion.tsx`). Cerrado queda con `display:none`: invisible y fuera del árbol de accesibilidad, igual que antes para el visitante.

Además, `/soluciones` tenía sus 4 FAQ escritas dos veces (JSX y JSON-LD); ahora hay una constante `faqsSoluciones` que alimenta ambas.

Commit: `9ad5f6b`.

**Verificado:** script que extrae los `FAQPage` del HTML y comprueba que cada respuesta aparece literalmente en el texto visible:

| Ruta | FAQPage | Resultado |
|------|---------|-----------|
| `/` | 4 | OK |
| `/empresa/por-que-boss` | 3 | OK |
| `/empresa/areas` | 3 | OK |
| `/soluciones` | 4 | OK |
| `/blog/ley-40-horas`, `/blog/ley-karin` | 4 y 4 | OK |
| `/contacto` | 3 | OK |

**Pendiente detectado:** `/soluciones/tecnologia`, `/soluciones/gestion-legal` y `/soluciones/bienestar-seguridad` declaran un `FAQPage` de 3 preguntas que **no tiene FAQ visible** en la página (su acordeón es de servicios). No se tocó porque las dos salidas posibles cambian diseño o eliminan datos.

---

### Tarea 3 — Título de la portada y mensaje principal

**Problema:** la home declaraba un título completo y el layout le añadía la plantilla `%s | BOSS` → «BOSS Asesorías | Asesoría Laboral y Legal | BOSS».

| # | Cambio | Archivo |
|---|--------|---------|
| 1 | `title: { absolute: HOME_TITLE }`, que desactiva la plantilla | `src/app/page.tsx` |
| 2 | Constantes compartidas `HOME_TITLE` (53 caracteres) y `HOME_DESCRIPTION` (132) | `src/lib/site.ts` (nuevo) |
| 3 | `openGraph.title` y `twitter.title` usan `HOME_TITLE` | `src/app/layout.tsx` |
| 4 | Eliminado el array `keywords` del layout (los buscadores lo ignoran) | `src/app/layout.tsx` |
| 5 | `lang="es"` → `lang="es-CL"` | `src/app/layout.tsx` |

`title.default` del layout no se tocó: las 14 rutas exportan su propio `title`, así que hoy solo sirve de reserva para 404/errores.

Commit: `87aa8d1`.

**Verificado:** `<title>` aparece una sola vez y sin sufijo duplicado; `og:title` y `twitter:title` con el mismo mensaje; sin `meta keywords`; títulos del resto de rutas intactos.

**Pendiente:** `HOME_TITLE` es provisional (marcado con `TODO`); falta confirmación del cliente.

---

### Tarea 4 — Grafo global de datos estructurados

**Problema:** la empresa se declaraba hasta cuatro veces: `Organization` mínima en el layout, `LocalBusiness` en `/contacto` con `@id` igual a la home, `Organization` dentro de un `WebSite` en `/empresa/areas/layout.tsx` y objetos sueltos como `publisher`/`provider`.

| # | Cambio | Archivo |
|---|--------|---------|
| 1 | `@graph` con nodo empresa (`['Organization','LocalBusiness']`, `@id …/#organization`) y nodo sitio (`@id …/#website`, `publisher` → empresa) | `src/lib/schema.ts` (nuevo) |
| 2 | Grafo inyectado una sola vez | `src/app/layout.tsx` |
| 3 | Eliminado el `LocalBusiness` de contacto (queda `FAQPage`) | `src/app/contacto/page.tsx` |
| 4 | Eliminado el `WebSite`/`Organization` local | `src/app/empresa/areas/layout.tsx` |
| 5 | `author`/`publisher`/`provider`/`mainEntity` pasan a `organizationRef` | 4 artículos, `/blog`, portada, `por-que-boss`, 4 páginas de servicio |
| 6 | `jsonLdHtml()` serializa con `JSON.stringify` escapando `<` | todas las inyecciones tocadas |

**Datos tomados de `/contacto`** (ninguno inventado): nombre, URL, logo, descripción, teléfono, correo, dirección en Viña del Mar, coordenadas, horario 09:00–18:00, `areaServed` Chile y `sameAs` (Facebook, Instagram, LinkedIn). Se conservaron además `slogan` y `foundingDate: 2019` (estaban en `por-que-boss`) y `priceRange` del `LocalBusiness`.

**Nota:** en `/contacto` no existía un nodo `Service` suelto; los cuatro `Service` estaban dentro de `hasOfferCatalog` del `LocalBusiness`, así que ese catálogo pasó al nodo global para no perder datos.

Commit: `08d3f61`.

**Verificado:** 12 rutas con JSON válido, cero `@id` duplicados y cero referencias sin nodo; no queda ningún `Organization`/`LocalBusiness`/`WebSite` fuera de `schema.ts`.

---

### Tarea 5 — Datos de los artículos (`Article`)

| # | Cambio | Archivo |
|---|--------|---------|
| 1 | Campo opcional `updated` (fecha ISO de revisión real) y `getArticleDates(slug)`: `dateModified` = `updated ?? date` | `src/lib/blog-posts.ts` |
| 2 | `absoluteUrl()` para publicar `image` con dominio y esquema | `src/lib/schema.ts` |
| 3 | Registro de autores vacío con tipo `Author`, ejemplo comentado y `TODO`; `authorNode()` emite `Person` si hay autor y la referencia a la organización si no | `src/lib/authors.ts` (nuevo) |
| 4 | Los 4 artículos usan las tres piezas anteriores | `src/app/blog/*/page.tsx` |

No se añadió ningún autor ni fecha inventada. La firma visible («Por …») y «Actualizado el …» **no** se renderizan todavía: dependen de datos reales.

Commit: `c5e9851`.

**Verificado:** `image` absoluta en los 4 artículos; `datePublished`/`dateModified` = `2026-08-15T10:00:00Z` mientras no haya `updated`; `author` = `{"@id": "https://www.bossasesorias.cl/#organization"}`. La rama con revisión se probó con un `updated` temporal en local (devolvió `modified 2026-09-02`) y se revirtió antes del commit.

---

### Tarea 6 — `lastModified` del sitemap

| # | Cambio |
|---|--------|
| 1 | Artículos: fecha `updated ?? date` de su ficha |
| 2 | `/blog`: la revisión más reciente del blog |
| 3 | Resto de páginas: mapa `LAST_MODIFIED` con fecha fija por ruta y comentario de actualización manual |
| 4 | Eliminados `changeFrequency` y `priority` (Google ignora ambos; Bing/Yandex también ignoran `priority`) |

Antes todas las URLs declaraban `new Date()`, es decir, la fecha del build.

Commit: `c824584`.

**Verificado:** XML válido con 14 `<loc>`; artículos y `/blog` en `2026-08-15T10:00:00.000Z`; páginas estáticas en `2026-11-10T10:00:00.000Z`.

**Aviso:** las fechas del mapa son una **suposición** inicial (fecha de la sesión) porque no hay historial de revisión; deben sustituirse por las reales.

---

### Tarea 7 — Estructura de señales de confianza sin contenido inventado

| # | Cambio | Archivo |
|---|--------|---------|
| 1 | Tipos y arreglos **vacíos** para testimonios, casos y equipo | `src/lib/trust.ts` (nuevo) |
| 2 | `TestimonialsSection`, `CaseStudiesSection`, `TeamSection`: devuelven `null` si su arreglo está vacío | `src/components/trust-sections.tsx` (nuevo) |
| 3 | Secciones montadas (portada y `/empresa/por-que-boss`) sin alterar el HTML actual | `src/app/page.tsx`, `src/app/empresa/por-que-boss/page.tsx` |
| 4 | Página de equipo completa (Breadcrumb + `Person` en JSON-LD) **sin archivo de ruta** | `src/components/team-page.tsx` (nuevo) |
| 5 | `/empresa/equipo` solo se añade al sitemap y a `/llms.txt` si hay equipo | `src/app/sitemap.ts`, `src/app/llms.txt/route.ts` |

Sin `Review` ni `AggregateRating` en JSON-LD: exigirían reseñas verificables en la propia página.

Commit: `98b259b`.

**Hallazgo relevante:** en esta versión de Next, una página existente que se corta con `notFound()` —y también con `redirect()`— responde **200 con el cuerpo de «página no encontrada»** (soft 404), incluso con `dynamic = 'force-dynamic'` y desde `generateMetadata`. Por eso, mientras no haya equipo, la ruta no existe (404 real) y el código queda en `team-page.tsx` con el snippet exacto para publicarla.

**Verificado:** con arreglos vacíos, `/empresa/equipo` → 404, sitemap con 14 URLs (sin equipo), `/llms.txt` sin la URL y ninguna sección de confianza en el HTML. Con un dato ficticio local (testimonio, caso y persona) se comprobó el camino completo: página 200, `Person` con imagen absoluta y `worksFor`, sitemap con 15 URLs y secciones visibles; después se eliminó todo y se repitió el build.

---

### Tarea 8 — Configuración y `llms.txt`

| # | Cambio | Archivo |
|---|--------|---------|
| 1 | `tools=self()` en `Permissions-Policy` se conserva y se documenta | `next.config.ts` |
| 2 | `frame-src 'self' https://www.googletagmanager.com` solo si `NEXT_PUBLIC_GTM_ID` está configurado | `next.config.ts` |
| 3 | Sección «Datos clave» con datos ya publicados | `src/app/llms.txt/route.ts` |
| 4 | Línea «Última actualización: 2026-11-10» + nota de mantenimiento | `src/app/llms.txt/route.ts` |

**`tools=self()` es intencional:** habilita la API WebMCP en el mismo origen y está respaldado por `.kilo/plans/1788481289569-webmcp-llmstxt-implementation.md` (§4) y `docs/mantenimiento_agosto_2026.md` (ítem 16). El formulario de contacto usa `toolname`/`tooldescription` y el hook `useWebMCPContactTool`.

**Datos clave** (todos ya presentes en el sitio): nombre comercial, dirección en Viña del Mar, teléfono, correo, horario, cobertura nacional y año de inicio (2019).

**Nota:** no existe `public/llms.txt`; el índice se genera en `src/app/llms.txt/route.ts` con `force-static`. Se editó ahí para no romper la actualización automática de los artículos.

Commit: `e69cb69`.

**Verificado:** CSP sin GTM termina en `connect-src …;` (sin `frame-src`); con `NEXT_PUBLIC_GTM_ID` añade `frame-src 'self' https://www.googletagmanager.com;`. `/llms.txt` sirve la sección nueva y el pie con la fecha, sin cambios en URLs ni descripciones existentes.

---

## Verificación global

| Check | Estado |
|-------|--------|
| `npm run typecheck` | ✅ 0 errores |
| `npm run lint` | ✅ 0 warnings (solo el aviso inofensivo de `.eslintignore`) |
| `npm run build` | ✅ 24 páginas estáticas |
| JSON-LD en 12 rutas | ✅ JSON válido, sin `@id` duplicados ni refs rotas |
| Sitemap | ✅ 14 URLs con `lastmod` real por fuente |
| `/llms.txt` | ✅ Datos clave + fecha de actualización |

**Nota de entorno:** ejecutar `npm run build` después de un `next dev`/`next start` puede fallar con `module-not-found` en el CSS de las fuentes por artefactos en `.next`. Solución: `rm -rf .next` y volver a compilar.

---

## Pendientes

| # | Pendiente | Depende de |
|---|-----------|------------|
| 1 | Confirmar el título y la descripción de la portada (`HOME_TITLE` / `HOME_DESCRIPTION`) | Cliente |
| 2 | Fechas reales de revisión de cada artículo (`updated`) | Cliente |
| 3 | Autores reales (nombre, cargo, perfil) y firma visible «Por …» / «Actualizado el …» | Cliente |
| 4 | Fechas reales del mapa `LAST_MODIFIED` del sitemap | Cliente / historial |
| 5 | Testimonios, casos de éxito y equipo; al cargar equipo, crear `src/app/empresa/equipo/page.tsx` | Cliente |
| 6 | Decidir qué hacer con el `FAQPage` huérfano de las 3 páginas de servicio | Cliente |
| 7 | Actualizar `docs/mantenimiento_agosto_2026.md`, que aún menciona `public/llms.txt` | Equipo |
| 8 | Push de la rama `fix/seo-tecnico` (11 commits) y despliegue en Vercel | Equipo |

**Fuera de alcance:** el archivo `.~lock.servicios boss.xlsx#` aparece como borrado en `git status` desde antes de esta sesión; no se tocó ni se commiteó.

---

## Commits de la sesión

| Commit | Descripción |
|--------|-------------|
| `d83a6f7` | Añade las imágenes Open Graph y Twitter que faltaban |
| `c2d5aaf` | Corrige el favicon roto y los tamaños declarados de los iconos |
| `e4f2d20` | Añade `twitter:image` propia a cada artículo del blog |
| `c18ee10` | Recorta a 1200×630 las imágenes sociales de los artículos |
| `9ad5f6b` | Renderiza las respuestas de las FAQ aunque el acordeón esté cerrado |
| `87aa8d1` | Elimina la marca duplicada del título de la portada |
| `08d3f61` | Agrupa los datos de la marca en un `@graph` único |
| `c5e9851` | Mejora los datos estructurados de los artículos |
| `c824584` | Da al sitemap fechas de modificación reales por ruta |
| `98b259b` | Prepara secciones de confianza sin publicar contenido inventado |
| `e69cb69` | Ajusta la CSP al iframe de GTM y amplía `llms.txt` con los datos clave |

---

## Auditorías y documentos anteriores

- `docs/mantenimiento_agosto_2026.md` — Auditoría Web Premium (3 de septiembre de 2026)
- `docs/seo-aeo-geo-optimization_septiembre_2026.md` — Optimización SEO/AEO/GEO
- `docs/seo-aeo-geo-guidelines.md` — Guías del proyecto
- `docs/manual_buenas_practicas_ia.md` — Manual de buenas prácticas
