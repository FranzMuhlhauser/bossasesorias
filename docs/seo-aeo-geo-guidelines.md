AEO/GEO & SEO checklist guidance

To reach AEO and GEO optimization required by the 15-point checklist:

1. AEO (Answer Engine Optimization)
- Add FAQ sections on key pages (home, soluciones, contacto) in a Q/A format.
- Include FAQPage Schema (JSON-LD) for each FAQ block.
- Keep answers 40-60 words and use concise question headings.

2. GEO (geographic optimization)
- Add location-specific pages or sections with structured data for LocalBusiness or Organization with `areaServed` and addresses.
- Embed clear NAP (Name, Address, Phone) and use `sameAs` links to social profiles.

3. How to add an FAQ JSON-LD snippet (example):

{
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
   {
     "@type": "Question",
     "name": "¿Qué servicios ofrece BOSS Asesorías?",
     "acceptedAnswer": {
       "@type": "Answer",
       "text": "Descripción concisa de 40-60 palabras que responde directamente la pregunta."
     }
   }
 ]
}

4. Implementation steps to reach 10/10:
- Add at least 3 high-quality FAQ entries per key page.
- Ensure each FAQ is rendered on the page and includes JSON-LD.
- Validate markup with Google Rich Results Test.
- Run Lighthouse and verify LCP <2.5s and CLS <0.1; if not, optimize images and critical CSS.

