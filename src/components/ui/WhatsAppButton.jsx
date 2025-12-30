import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/918107121701" 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-50 animate-bounce hover:animate-none"
    >
      <div className="w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 hover:shadow-green-400/50 transition-all duration-300">
        <MessageCircle size={32} fill="currentColor" />
      </div>
    </a>
  );
};

export default WhatsAppButton;