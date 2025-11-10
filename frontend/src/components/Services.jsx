import React from 'react';
import { Scale, Gavel, FileText, Briefcase, Users, Building } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scale className="w-12 h-12" />,
      title: 'Hukum Perdata & Pertanahan',
      description: 'Penyelesaian sengketa kepemilikan, ganti rugi, dan masalah pertanahan lainnya dengan pendekatan komprehensif',
      features: ['Sengketa Kepemilikan', 'Ganti Rugi', 'Sertifikat Tanah']
    },
    {
      icon: <Gavel className="w-12 h-12" />,
      title: 'Hukum Pidana',
      description: 'Pembelaan (defense) dan pendampingan korban (victim assistance) dengan strategi hukum yang kuat',
      features: ['Pembelaan Terdakwa', 'Pendampingan Korban', 'Pra Peradilan']
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: 'Hukum Administrasi Negara',
      description: 'Penanganan sengketa tata usaha negara dan administrasi pemerintahan dengan profesional',
      features: ['Sengketa TUN', 'Gugatan PTUN', 'Judicial Review']
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: 'Hukum Bisnis & Korporasi',
      description: 'Konsultasi hukum bisnis, korporasi, dan investasi untuk mendukung pertumbuhan usaha Anda',
      features: ['Kontrak Bisnis', 'Perizinan', 'Due Diligence']
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Hukum Ketenagakerjaan',
      description: 'Penyelesaian perburuhan dan hubungan industrial untuk perusahaan dan karyawan',
      features: ['PHK & Pesangon', 'Perjanjian Kerja', 'Sengketa Industrial']
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Layanan Preventif',
      description: 'Konsultasi hukum preventif untuk mencegah potensi masalah hukum di masa depan',
      features: ['Legal Audit', 'Drafting Dokumen', 'Legal Opinion']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
              Layanan <span className="text-gold-500">Hukum Kami</span>
            </h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi hukum komprehensif untuk berbagai kebutuhan Anda dengan pendekatan profesional dan berintegritas
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gold-300 group hover:-translate-y-2"
              >
                <div className="text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="border-t border-gray-200 pt-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="text-gold-500 mr-2 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-white mb-4">Butuh Konsultasi Hukum?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Tim kami siap membantu menyelesaikan masalah hukum Anda dengan profesional dan berintegritas
              </p>
              <button 
                onClick={() => window.open('https://wa.me/6282310335547?text=Halo,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20hukum', '_blank')}
                className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Konsultasi Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;