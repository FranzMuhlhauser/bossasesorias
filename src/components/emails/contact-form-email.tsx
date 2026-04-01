import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  phone,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, color: '#333' }}>
    <h1 style={{ color: '#1A2E40' }}>Nuevo Mensaje del Formulario de Contacto</h1>
    <p>Has recibido un nuevo mensaje a través del sitio web de BOSS Asesorías.</p>
    <hr style={{ borderColor: '#dddddd', margin: '20px 0' }} />
    <h2 style={{ color: '#1A2E40' }}>Detalles del Contacto</h2>
    <ul>
      <li><strong>Nombre:</strong> {name}</li>
      <li><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></li>
      {phone && <li><strong>Teléfono:</strong> {phone}</li>}
    </ul>
    <h2 style={{ color: '#1A2E40' }}>Mensaje</h2>
    <div style={{ borderLeft: '3px solid #FF6B00', paddingLeft: '15px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
      <p style={{ whiteSpace: 'pre-wrap', margin: 0, padding: '10px' }}>{message}</p>
    </div>
    <hr style={{ borderColor: '#dddddd', margin: '20px 0' }} />
    <p style={{ fontSize: '12px', color: '#777' }}>
      Este correo fue enviado automáticamente desde el formulario de contacto de bossasesorias.cl.
    </p>
  </div>
);
