'use client';

import dynamic from 'next/dynamic';

export const DynamicWhatsappButton = dynamic(() => 
  import('@/components/whatsapp-button').then(mod => mod.WhatsappButton),
  { ssr: false }
);
