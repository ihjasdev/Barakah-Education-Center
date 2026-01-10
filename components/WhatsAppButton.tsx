
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[90] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 transform hover:scale-110 transition-all duration-300 animate-bounce-subtle flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Chat with an Advisor
      </span>
    </a>
  );
};

export default WhatsAppButton;
