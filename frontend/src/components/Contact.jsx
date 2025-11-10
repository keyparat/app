import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
              Hubungi <span className="text-gold-500">Kami</span>
            </h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami siap membantu menyelesaikan masalah hukum Anda dengan profesional dan berintegritas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Informasi Kontak</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">Alamat Kantor</h4>
                      <p className="text-gray-600">Jakarta, Indonesia</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">WhatsApp</h4>
                      <a href="https://wa.me/6282310335547" className="text-gold-600 hover:text-gold-700 transition-colors">
                        +62 823-1033-5547
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">Email</h4>
                      <a href="mailto:info@faktaintegritas.com" className="text-gold-600 hover:text-gold-700 transition-colors">
                        info@faktaintegritas.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">Jam Operasional</h4>
                      <p className="text-gray-600">Senin - Jumat: 09:00 - 17:00</p>
                      <p className="text-gray-600">Sabtu: 09:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Konsultasi Cepat</h3>
                <p className="text-gray-300 mb-6">Hubungi kami sekarang untuk konsultasi hukum</p>
                <button 
                  onClick={() => window.open('https://wa.me/6282310335547?text=Halo,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20hukum', '_blank')}
                  className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Chat via WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full">
                <div className="h-full min-h-[500px]">
                  <iframe
                    src="https://www.google.com/maps?q=-6.36526042823802,106.26821995767081&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '500px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Kantor Fakta Integritas"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;