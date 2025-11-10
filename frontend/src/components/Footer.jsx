import React from 'react';
import { Scale, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-navy-900 to-navy-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* About Section */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="https://customer-assets.emergentagent.com/job_a45d351f-8f1b-4fe4-bb14-538aa4471287/artifacts/g9hz1hzp_fakta%20integritas.png" 
                  alt="Fakta Integritas Logo" 
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3 className="text-gold-400 font-bold text-lg">FAKTA INTEGRITAS</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Kantor hukum profesional yang mengedepankan kebenaran faktual dan integritas moral dalam setiap penanganan kasus.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Navigasi Cepat</h4>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-left">
                    Beranda
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-left">
                    Tentang Kami
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-left">
                    Layanan
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('team')} className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-left">
                    Tim Kami
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-left">
                    Testimoni
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-left">
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Layanan Hukum</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-gold-400 transition-colors duration-300 cursor-pointer">Hukum Perdata</li>
                <li className="hover:text-gold-400 transition-colors duration-300 cursor-pointer">Hukum Pidana</li>
                <li className="hover:text-gold-400 transition-colors duration-300 cursor-pointer">Hukum Administrasi</li>
                <li className="hover:text-gold-400 transition-colors duration-300 cursor-pointer">Hukum Bisnis</li>
                <li className="hover:text-gold-400 transition-colors duration-300 cursor-pointer">Hukum Ketenagakerjaan</li>
                <li className="hover:text-gold-400 transition-colors duration-300 cursor-pointer">Konsultasi Preventif</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Hubungi Kami</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">Jakarta, Indonesia</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                  <a href="https://wa.me/6282310335547" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                    +62 823-1033-5547
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                  <a href="mailto:info@faktaintegritas.com" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                    info@faktaintegritas.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; {currentYear} <span className="text-gold-400 font-semibold">Fakta Integritas</span>. Hak Cipta Dilindungi.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">Kebijakan Privasi</a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">Syarat & Ketentuan</a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">Kode Etik</a>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-500 text-xs text-center leading-relaxed">
              Kantor Hukum Fakta Integritas adalah kantor hukum yang terdaftar dan diakui oleh organisasi advokat Indonesia. 
              Semua layanan dilakukan sesuai dengan kode etik advokat dan peraturan perundang-undangan yang berlaku.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;