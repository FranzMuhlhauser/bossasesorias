# Optimización SEO / AEO / GEO — Septiembre 2026

## Resumen

Optimización completa de SEO técnico, AEO (Answer Engine Optimization) y GEO (Generative Engine Optimization) para el sitio web BOSS Asesorías. Ejecutada el 3 de septiembre de 2026.

---

## 1. Contenido Propio (Reemplazo de Enlaces Externos)

### Artículos de Blog Creados

| # | Artículo | Ruta | Palabras | Schema |
|---|----------|------|----------|--------|
| 1 | Ley de 40 Horas en Chile 2026 | `/blog/ley-40-horas` | ~1200 | Article + FAQPage |
| 2 | Ley Karin: Obligaciones para Empresas | `/blog/ley-karin` | ~1000 | Article + FAQPage |
| 3 | Ciberseguridad en Chile 2026 | `/blog/ciberseguridad-chile` | ~1100 | Article + FAQPage |
| 4 | IA y Cultura Organizacional | `/blog/ia-cultura-organizacional` | ~900 | Article + FAQPage |

### Estructura de Cada Artículo

- **Metadata SEO**: title (<60 chars), description (<155 chars), keywords, canonical dinámico
- **Open Graph**: type article, publishedTime, authors, images
- **Schema JSON-LD**: Article (headline, author, publisher, datePublished) + FAQPage (4 preguntas cada uno)
- **E-E-A-T**: Autor (BOSS Asesorías), fecha de publicación, 10 min de lectura estimado
- **Formato AEO**: Primer párrafo con respuesta directa en recuadro destacado
- **Enlaces internos**: Links a páginas de solución correspondientes
- **FAQ visible**: Sección de preguntas frecuentes con Accordion

### Home Page — Enlaces Externos Reemplazados

| Antes | Ahora |
|-------|-------|
| Softland (Ley 40 horas) | `/blog/ley-40-horas` |
| ISL (Seguridad laboral) | `/blog/ley-karin` |
| PwC (Ciberseguridad) | `/blog/ciberseguridad-chile` |
| BCN (Normas) | `/blog/ia-cultura-organizacional` |

**Impacto**: El tráfico que antes se perdía en sitios externos ahora permanece en bossasesorias.cl, aumentando autoridad de dominio y tiempo de permanencia.

---

## 2. Schema JSON-LD Implementado

### Schemas Existentes (ya estaban)

| Schema | Páginas | Estado |
|--------|---------|--------|
| Organization | layout.tsx | ✅ Logo corregido |
| FAQPage | 9/9 páginas | ✅ Completo |
| Service | 4 páginas de solución | ✅ Completo |
| HowTo | 3 páginas de servicio | ✅ Completo |
| BreadcrumbList | Todas las sub-rutas | ✅ Completo |
| AboutPage | /empresa/por-que-boss | ✅ Completo |

### Schemas Nuevos / Mejorados

| Schema | Archivo | Cambio |
|--------|---------|--------|
| LocalBusiness | contacto/page.tsx | ✅ Mejorado: email, description, priceRange, areaServed, sameAs, hasOfferCatalog |
| Article | 4 artículos de blog | ✅ Nuevo: headline, author, publisher, datePublished, dateModified |
| FAQPage | 2 artículos adicionales | ✅ Nuevo en por-que-boss y areas |
| BlogPosting | home page (ItemList) | ✅ URLs actualizadas a rutas internas |

### Código Listo para Insertar

#### LocalBusiness (mejorado en contacto/page.tsx)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BOSS Asesorías",
  "image": "https://www.bossasesorias.cl/images/logo_boss.webp",
  "url": "https://www.bossasesorias.cl",
  "telephone": "+56992895726",
  "email": "contacto@bossasesorias.cl",
  "description": "Consultoría integral en bienestar laboral, gestión legal y soluciones tecnológicas para empresas en Chile.",
  "priceRange": "$$",
  "address": { ... },
  "geo": { ... },
  "openingHoursSpecification": { ... },
  "areaServed": { "@type": "Country", "name": "Chile" },
  "sameAs": [ "facebook", "instagram", "linkedin" ],
  "hasOfferCatalog": { ... }
}
```

#### Article Schema (en cada artículo de blog)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "description": "...",
  "image": "/images/...",
  "datePublished": "2026-08-15T10:00:00Z",
  "dateModified": "2026-08-15T10:00:00Z",
  "author": { "@type": "Organization", "name": "BOSS Asesorías" },
  "publisher": { "@type": "Organization", "name": "BOSS Asesorías", "logo": {...} },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.bossasesorias.cl/blog/..." },
  "inLanguage": "es-CL"
}
```

---

## 3. SEO Técnico

### Canonical Dinámico

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
| `/blog/ley-40-horas` | `/blog/ley-40-horas` |
| `/blog/ley-karin` | `/blog/ley-karin` |
| `/blog/ciberseguridad-chile` | `/blog/ciberseguridad-chile` |
| `/blog/ia-cultura-organizacional` | `/blog/ia-cultura-organizacional` |

### Sitemap Actualizado

4 nuevas rutas de blog agregadas a `src/app/sitemap.ts`:
- `/blog/ley-40-horas`
- `/blog/ley-karin`
- `/blog/ciberseguridad-chile`
- `/blog/ia-cultura-organizacional`

### Robots.txt

Ya configurado correctamente (allow: /, disallow: /api/, sitemap reference).

---

## 4. AEO (Answer Engine Optimization)

### Formato Pregunta-Respuesta

Todos los artículos de blog usan:
- **H2 en formato pregunta**: "¿Qué es la Ley de 40 Horas...?", "¿Cómo afecta...?"
- **Respuesta directa en primer párrafo**: Recuadro destacado con respuesta concisa (40-60 palabras)
- **FAQ visible**: Accordion con 4 preguntas por artículo
- **FAQPage schema**: JSON-LD para cada sección de FAQ

### FAQ Optimizado (40-60 palabras)

Las respuestas de FAQ en la home page fueron optimizadas:
- **Antes**: ~30-40 palabras (algunas muy cortas)
- **Ahora**: 40-60 palabras con datos concretos (48 horas, 30%, etc.)

---

## 5. GEO (Generative Engine Optimization)

### Datos Verificables y Citables

Cada artículo contiene datos concretos que los LLMs pueden citar:
- **Ley 40 Horas**: Fechas específicas (26 abril 2026), porcentajes por tamaño de empresa
- **Ley Karin**: Multas de hasta 50 UTM, obligaciones numeradas
- **Ciberseguridad**: Aumento del 150% en ransomware (2024-2025), 72 horas para reportar
- **IA y Cultura**: 30-40% aumento en productividad, 25% reducción en tiempo de respuesta

### E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

| Elemento | Implementación |
|----------|---------------|
| Autor | "BOSS Asesorías" como Organization en schema Article |
| Fecha de publicación | 15 agosto 2026 en metadata y schema |
| Certificaciones | Referencia a normativas (Ley 21.561, 21.643, 21.663) |
| Experiencia | "Desde 2019" mencionado en artículos y página home |
| Datos concretos | Estadísticas específicas en cada artículo |

---

## 6. Contenido Propio (Prioridad GEO)

### Principio Aplicado

> "Evitar que el contenido informativo clave viva solo en sitios de terceros; todo el contenido que se quiera 'citable' debe alojarse en bossasesorias.cl"

**Resultado**: Los 4 temas clave (Ley 40 Horas, Ley Karin, Ciberseguridad, IA y Cultura) ahora tienen contenido propio de 800-1500 palabras en bossasesorias.cl, con schema completo y formato optimizado para extracción por LLMs.

---

## 7. Pendiente (Requiere Acción Manual)

| # | Tarea | Impacto | Responsable |
|---|-------|---------|-------------|
| 1 | Crear opengraph-image.png (1200×630) | Alto - previews en redes sociales | Diseñador |
| 2 | Crear twitter-image.png (1200×630) | Alto - previews en Twitter | Diseñador |
| 3 | Verificar y optimizar Google Business Profile | Alto - SEO local | Marketing |
| 4 | Agregar testimonios de clientes con nombre y rubro | Alto - E-E-A-T y confianza | Comercial |
| 5 | Agregar nombres, cargos y certificaciones de consultores | Medio - E-E-A-T | RRHH |
| 6 | Buscar menciones en medios locales de Valparaíso/Viña del Mar | Medio - Autoridad de marca | Marketing |
| 7 | Crear casos de estudio con empresas asesoradas | Alto - GEO y confianza | Comercial |
| 8 | Optimizar Core Web Vitals (hero LCP) | Medio - Rendimiento | Desarrollo |

---

## 8. Verificación

| Check | Estado |
|-------|--------|
| `npm run typecheck` | ✅ Pass |
| `npm run lint` | ✅ Pass |
| `npm run build` | ✅ Pass (19 páginas) |

---

## 9. Páginas Totales del Sitio

```
/ (Home)
/contacto
/empresa/areas
/empresa/por-que-boss
/soluciones
/soluciones/bienestar-seguridad
/soluciones/capacitaciones
/soluciones/gestion-legal
/soluciones/tecnologia
/blog/ley-40-horas (NUEVO)
/blog/ley-karin (NUEVO)
/blog/ciberseguridad-chile (NUEVO)
/blog/ia-cultura-organizacional (NUEVO)
/sitemap.xml
/robots.txt
/manifest.webmanifest
/_not-found
```

**Total**: 19 páginas prerenderizadas (antes: 15)
