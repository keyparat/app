import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Ahmad Rizki, S.H., M.H.',
      position: 'Managing Partner',
      specialization: 'Hukum Pidana & Litigasi',
      image: 'https://images.unsplash.com/photo-1752118464953-74e7ddb9c74f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxJbmRvbmVzaWFuJTIwbGF3eWVyJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc2Mjc1MjY1MXww&ixlib=rb-4.1.0&q=85',
      description: 'Pengalaman lebih dari 15 tahun dalam menangani kasus pidana kompleks'
    },
    {
      name: 'Siti Nurhaliza, S.H., M.H.',
      position: 'Senior Partner',
      specialization: 'Hukum Perdata & Pertanahan',
      image: 'https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwbGF3eWVyJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc2Mjc1MjY1MXww&ixlib=rb-4.1.0&q=85',
      description: 'Spesialis dalam penyelesaian sengketa pertanahan dan property'
    },
    {
      name: 'Budi Santoso, S.H., M.H.',
      position: 'Partner',
      specialization: 'Hukum Bisnis & Korporasi',
      image: 'https://images.unsplash.com/photo-1752118464953-74e7ddb9c74f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxJbmRvbmVzaWFuJTIwbGF3eWVyJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc2Mjc1MjY1MXww&ixlib=rb-4.1.0&q=85',
      description: 'Ahli dalam hukum perusahaan dan transaksi bisnis lintas negara'
    },
    {
      name: 'Maya Kusuma, S.H., M.H.',
      position: 'Associate Partner',
      specialization: 'Hukum Ketenagakerjaan',
      image: 'https://images.unsplash.com/photo-1649399046939-7b8112221151?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxJbmRvbmVzaWFuJTIwbGF3eWVyJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc2Mjc1MjY1MXww&ixlib=rb-4.1.0&q=85',
      description: 'Berpengalaman dalam penyelesaian hubungan industrial dan PHK'
    }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
              Tim <span className="text-gold-500">Profesional Kami</span>
            </h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Para ahli hukum berpengalaman dengan latar belakang akademik dan praktis yang luas
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-gold-400 text-sm font-medium">{member.position}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-gold-100 text-gold-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {member.specialization}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.description}</p>
                  <div className="flex space-x-3">
                    <button className="p-2 bg-gray-100 hover:bg-gold-100 text-gray-600 hover:text-gold-600 rounded-lg transition-colors duration-300">
                      <Linkedin size={18} />
                    </button>
                    <button className="p-2 bg-gray-100 hover:bg-gold-100 text-gray-600 hover:text-gold-600 rounded-lg transition-colors duration-300">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Management Info */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-6 text-center">Sistem Kerja Tim Berbasis Kompetensi</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold-600">01</span>
                </div>
                <h4 className="font-bold text-navy-900 mb-2">Lead Lawyer</h4>
                <p className="text-gray-600 text-sm">Memimpin strategi hukum dan koordinasi tim</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold-600">02</span>
                </div>
                <h4 className="font-bold text-navy-900 mb-2">Associate Lawyer</h4>
                <p className="text-gray-600 text-sm">Menangani aspek teknis dan dokumentasi</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold-600">03</span>
                </div>
                <h4 className="font-bold text-navy-900 mb-2">Legal Researcher</h4>
                <p className="text-gray-600 text-sm">Riset hukum mendalam dan analisis kasus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;