import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Budi Hartono',
      role: 'Direktur PT Maju Sejahtera',
      content: 'Fakta Integritas membantu perusahaan kami menyelesaikan sengketa kontrak yang kompleks. Profesionalisme dan integritas tim mereka sangat luar biasa. Kami sangat merekomendasikan jasa mereka.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1752118464953-74e7ddb9c74f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxJbmRvbmVzaWFuJTIwbGF3eWVyJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc2Mjc1MjY1MXww&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Siti Rahmawati',
      role: 'Pengusaha',
      content: 'Saya sangat puas dengan layanan konsultasi hukum pertanahan dari tim Fakta Integritas. Mereka memberikan solusi yang jelas, tepat, dan selalu transparan dalam setiap proses.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwbGF3eWVyJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc2Mjc1MjY1MXww&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Ahmad Fauzi',
      role: 'Klien Pribadi',
      content: 'Terima kasih kepada tim Fakta Integritas yang telah membantu saya dalam kasus pidana. Pendampingan mereka sangat profesional dan memberikan ketenangan pikiran selama proses hukum berlangsung.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1752118464953-74e7ddb9c74f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxJbmRvbmVzaWFuJTIwbGF3eWVyJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc2Mjc1MjY1MXww&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Linda Kusuma',
      role: 'HR Manager',
      content: 'Penanganan kasus ketenagakerjaan oleh Fakta Integritas sangat memuaskan. Mereka memahami kompleksitas hubungan industrial dan memberikan solusi yang win-win untuk semua pihak.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1649399046939-7b8112221151?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxJbmRvbmVzaWFuJTIwbGF3eWVyJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc2Mjc1MjY1MXww&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Rudi Wijaya',
      role: 'Komisaris PT Global Investment',
      content: 'Saya menghargai pendekatan berbasis fakta dan integritas yang diterapkan oleh kantor hukum ini. Mereka tidak hanya fokus pada kemenangan, tapi juga pada keadilan yang sesungguhnya.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1752118464953-74e7ddb9c74f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxJbmRvbmVzaWFuJTIwbGF3eWVyJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc2Mjc1MjY1MXww&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Dewi Permata',
      role: 'Pemilik Usaha',
      content: 'Layanan legal audit dan drafting dokumen dari Fakta Integritas sangat membantu bisnis saya. Mereka proaktif dalam mengidentifikasi potensi masalah hukum sebelum terjadi.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1649399046939-7b8112221151?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxJbmRvbmVzaWFuJTIwbGF3eWVyJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc2Mjc1MjY1MXww&ixlib=rb-4.1.0&q=85'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
              Testimoni <span className="text-gold-500">Klien Kami</span>
            </h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kepercayaan dan kepuasan klien adalah prioritas utama kami
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gold-300 relative group hover:-translate-y-2"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-gold-200 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <Quote size={40} fill="currentColor" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-gold-200"
                  />
                  <div>
                    <h4 className="font-bold text-navy-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gold-400 mb-2">500+</div>
                <div className="text-gray-300">Kasus Diselesaikan</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gold-400 mb-2">95%</div>
                <div className="text-gray-300">Tingkat Kepuasan</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gold-400 mb-2">15+</div>
                <div className="text-gray-300">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gold-400 mb-2">300+</div>
                <div className="text-gray-300">Klien Terpercaya</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;