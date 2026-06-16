
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5d]"
      aria-label="Contact on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-8 w-8 fill-current"
      >
        <path d="M19.11 17.22c-.27-.14-1.58-.78-1.82-.87-.24-.09-.41-.14-.59.14-.18.27-.68.87-.84 1.05-.15.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.33-.8-.71-1.34-1.59-1.5-1.86-.15-.27-.02-.42.12-.56.12-.12.27-.31.41-.46.14-.15.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.59-1.43-.81-1.96-.21-.5-.43-.43-.59-.44h-.5c-.18 0-.46.07-.7.34-.24.27-.92.9-.92 2.19 0 1.29.94 2.53 1.07 2.71.14.18 1.84 2.81 4.45 3.94.62.27 1.11.43 1.49.55.63.2 1.21.17 1.67.1.51-.08 1.58-.64 1.8-1.25.22-.61.22-1.14.15-1.25-.06-.11-.23-.18-.5-.32Z" />
        <path d="M16.02 3.2c-7.07 0-12.8 5.7-12.8 12.73 0 2.25.6 4.45 1.75 6.39L3.1 28.8l6.68-1.75a12.9 12.9 0 0 0 6.24 1.59h.01c7.07 0 12.8-5.7 12.8-12.73 0-3.4-1.33-6.6-3.76-9-2.42-2.4-5.64-3.72-9.05-3.71Zm0 23.28h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-3.96 1.04 1.06-3.84-.26-.4a10.53 10.53 0 0 1-1.65-5.65c0-5.82 4.76-10.56 10.63-10.56 2.83 0 5.49 1.09 7.48 3.07a10.46 10.46 0 0 1 3.11 7.49c0 5.82-4.77 10.57-10.56 10.57Z" />
      </svg>
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Chat with an Advisor
      </span>
    </a>
  );
};

export default WhatsAppButton;
