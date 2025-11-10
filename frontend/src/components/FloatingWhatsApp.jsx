import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after button appears
      setTimeout(() => setShowTooltip(true), 500);
      // Hide tooltip after 3 seconds
      setTimeout(() => setShowTooltip(false), 5000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6282310335547?text=Halo,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20hukum', '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-20 right-0 bg-white text-navy-900 px-4 py-3 rounded-lg shadow-xl mb-2 min-w-[200px] animate-fade-in-up">
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X size={14} />
            </button>
            <p className="text-sm font-medium mb-1">Butuh Bantuan Hukum?</p>
            <p className="text-xs text-gray-600">Chat dengan kami sekarang!</p>
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-slow"
          aria-label="Chat via WhatsApp"
        >
          {/* Ripple Effect */}
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></span>
          
          {/* Icon */}
          <MessageCircle size={28} className="relative z-10" />
          
          {/* Badge */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
            1
          </span>
        </button>
      </div>
    </>
  );
};

export default FloatingWhatsApp;