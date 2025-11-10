import React from 'react';
import { BookOpen, Target, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
              Tentang <span className="text-gold-500">Fakta Integritas</span>
            </h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kantor hukum yang berdiri atas kesadaran bahwa hukum adalah instrumen moral dan sosial untuk menegakkan kebenaran
            </p>
          </div>

          {/* Main Content */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
              <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-6">Filosofi Kami</h3>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Kantor Hukum <span className="font-semibold text-gold-600">Fakta Integritas</span> lahir dari kesadaran bahwa hukum tidak hanya menjadi perangkat normatif, tetapi juga instrumen moral dan sosial untuk menegakkan kebenaran serta menjaga keadilan substantif.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-gradient-to-br from-gold-50 to-amber-50 p-6 rounded-xl border border-gold-200">
                    <h4 className="text-xl font-bold text-navy-900 mb-3 flex items-center">
                      <BookOpen className="w-6 h-6 text-gold-500 mr-2" />
                      Fakta
                    </h4>
                    <p className="text-gray-700">
                      Representasi kebenaran objektif yang menjadi dasar setiap argumentasi hukum
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-navy-50 to-slate-50 p-6 rounded-xl border border-navy-200">
                    <h4 className="text-xl font-bold text-navy-900 mb-3 flex items-center">
                      <Target className="w-6 h-6 text-navy-600 mr-2" />
                      Integritas
                    </h4>
                    <p className="text-gray-700">
                      Prinsip moral yang mengikat setiap advokat dalam menjalankan profesinya secara jujur dan bertanggung jawab
                    </p>
                  </div>
                </div>

                <p className="text-lg">
                  Kantor Hukum Fakta Integritas berpegang teguh pada keyakinan bahwa <span className="font-semibold text-navy-900">hukum tanpa integritas hanyalah teks tanpa jiwa</span>. Integritas menjadi fondasi utama yang membedakan antara praktik hukum yang beretika dan praktik hukum yang oportunistik.
                </p>
              </div>
            </div>
          </div>

          {/* Commitments */}
          <div className="mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-8 text-center">Komitmen Kami</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Kejujuran',
                  description: 'Menjaga kejujuran terhadap klien dan lembaga peradilan',
                  icon: <Target className="w-8 h-8" />
                },
                {
                  title: 'Konflik Kepentingan',
                  description: 'Menghindari segala bentuk konflik kepentingan',
                  icon: <Users className="w-8 h-8" />
                },
                {
                  title: 'Keadilan Substantif',
                  description: 'Mengedepankan keadilan substantif di atas formalitas',
                  icon: <BookOpen className="w-8 h-8" />
                },
                {
                  title: 'Anti Manipulasi',
                  description: 'Menolak rekayasa hukum, suap, atau praktik manipulatif',
                  icon: <TrendingUp className="w-8 h-8" />
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold-300 group">
                  <div className="text-gold-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Statement */}
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 lg:p-12 text-center">
            <p className="text-xl lg:text-2xl text-white font-medium italic">
              "Nama Fakta Integritas bukan sekadar identitas lembaga, tetapi juga <span className="text-gold-400 font-bold">janji moral</span> kepada klien dan masyarakat bahwa setiap tindakan hukum yang dilakukan akan berakar pada kebenaran faktual dan dijalankan dengan kejujuran serta tanggung jawab."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;