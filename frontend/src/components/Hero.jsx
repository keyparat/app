import React from 'react';
import { Scale, Shield, Award } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6282310335547?text=Halo,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20hukum', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
          }}></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in-up">
            <img 
              src="https://customer-assets.emergentagent.com/job_a45d351f-8f1b-4fe4-bb14-538aa4471287/artifacts/g9hz1hzp_fakta%20integritas.png" 
              alt="Fakta Integritas Logo" 
              className="h-32 w-32 mx-auto object-contain"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-gold-400">FAKTA INTEGRITAS</span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Konsultan Hukum, Advokat, Mediator
          </p>

          {/* Tagline */}
          <p className="text-lg lg:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Menegakkan Kebenaran, Menjaga Keadilan Substantif dengan Integritas Moral dan Profesionalitas Tinggi
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Konsultasi via WhatsApp
            </Button>
            <Button 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-900 font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
            >
              Lihat Layanan Kami
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <Scale className="w-12 h-12 text-gold-400 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Berbasis Fakta</h3>
              <p className="text-gray-400 text-sm">Argumentasi hukum berdasarkan pembuktian faktual yang kuat</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <Shield className="w-12 h-12 text-gold-400 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Integritas Moral</h3>
              <p className="text-gray-400 text-sm">Kejujuran dan tanggung jawab dalam setiap langkah hukum</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <Award className="w-12 h-12 text-gold-400 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Profesional</h3>
              <p className="text-gray-400 text-sm">Tim berpengalaman dengan manajemen perkara modern</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;