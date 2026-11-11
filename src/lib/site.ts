// Título y descripción de la portada. Viven aquí —y no dentro de page.tsx— para
// que el layout pueda reutilizar exactamente los mismos textos en Open Graph y
// Twitter sin duplicar la cadena (era justo lo que desalineaba og/twitter con el
// <title> real).

// TODO(provisional): texto pendiente de confirmar con el cliente. Mantener el
// límite de 60 caracteres para que Google no lo recorte en los resultados.
export const HOME_TITLE = 'BOSS Asesorías: Bienestar Laboral, Legal y Tecnología';

// Máximo 155 caracteres, por el mismo motivo.
export const HOME_DESCRIPTION =
  'Asesoría laboral y legal para empresas en Chile: bienestar laboral, cumplimiento normativo y soluciones tecnológicas para tu equipo.';
