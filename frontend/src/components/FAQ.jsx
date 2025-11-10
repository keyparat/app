import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Apa yang dimaksud dengan Fakta Integritas?',
      answer: 'Fakta Integritas adalah filosofi kami yang menggabungkan dua unsur fundamental: Fakta sebagai representasi kebenaran objektif yang menjadi dasar argumentasi hukum, dan Integritas sebagai prinsip moral dalam menjalankan profesi secara jujur dan bertanggung jawab.'
    },
    {
      question: 'Bidang hukum apa saja yang ditangani?',
      answer: 'Kami menangani berbagai bidang hukum termasuk Hukum Perdata & Pertanahan, Hukum Pidana, Hukum Administrasi Negara, Hukum Bisnis & Korporasi, Hukum Ketenagakerjaan, serta Layanan Hukum Preventif seperti legal audit dan drafting dokumen.'
    },
    {
      question: 'Bagaimana sistem kerja tim di Fakta Integritas?',
      answer: 'Kami menerapkan sistem kerja berbasis kompetensi dengan pembagian tim yang terdiri dari Lead Lawyer (memimpin strategi), Associate Lawyer (menangani teknis), dan Legal Researcher (riset mendalam). Sistem ini memastikan penanganan perkara yang terkoordinasi dan berkualitas.'
    },
    {
      question: 'Berapa biaya konsultasi hukum?',
      answer: 'Biaya konsultasi bervariasi tergantung kompleksitas kasus. Kami menawarkan konsultasi awal untuk memahami kebutuhan Anda. Silakan hubungi kami melalui WhatsApp untuk informasi lebih detail mengenai biaya layanan.'
    },
    {
      question: 'Apakah tersedia konsultasi online?',
      answer: 'Ya, kami menyediakan konsultasi online melalui WhatsApp, video call, atau email untuk kemudahan klien. Anda dapat menghubungi kami kapan saja untuk membuat janji konsultasi.'
    },
    {
      question: 'Bagaimana proses penanganan kasus dilakukan?',
      answer: 'Proses dimulai dengan konsultasi awal untuk memahami kasus, dilanjutkan dengan analisis hukum, penyusunan strategi, eksekusi (litigasi/non-litigasi), dan pelaporan berkala kepada klien. Kami mengedepankan transparansi dan akuntabilitas di setiap tahap.'
    },
    {
      question: 'Apakah Fakta Integritas menangani kasus di luar kota?',
      answer: 'Ya, kami melayani klien dari berbagai kota di Indonesia. Tim kami berpengalaman dalam menangani kasus di berbagai wilayah hukum dan dapat melakukan perjalanan dinas sesuai kebutuhan kasus.'
    },
    {
      question: 'Apa keunggulan Fakta Integritas dibanding kantor hukum lain?',
      answer: 'Keunggulan kami meliputi: 1) Pendekatan berbasis evidence and integrity, 2) Orientasi pada preventive legal service, 3) Keterbukaan dan akuntabilitas penuh, 4) Pemanfaatan teknologi informasi modern, dan 5) Komitmen pada keadilan substantif, bukan hanya formalitas.'
    },
    {
      question: 'Bagaimana cara memulai konsultasi?',
      answer: 'Anda dapat memulai konsultasi dengan menghubungi kami melalui WhatsApp di nomor +62 823-1033-5547, atau mengisi formulir kontak di website ini. Tim kami akan segera merespons dan mengatur jadwal konsultasi yang sesuai.'
    },
    {
      question: 'Apakah informasi klien dijaga kerahasiaannya?',
      answer: 'Tentu saja. Kami menjunjung tinggi prinsip kerahasiaan klien (attorney-client privilege) sesuai kode etik advokat. Semua informasi yang Anda berikan akan dijaga kerahasiaannya dengan ketat dan hanya digunakan untuk kepentingan penanganan kasus Anda.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
              Pertanyaan <span className="text-gold-500">Yang Sering Diajukan</span>
            </h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan jawaban atas pertanyaan umum tentang layanan kami
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-0">
                  <AccordionTrigger className="text-left hover:text-gold-600 transition-colors duration-300 py-5">
                    <span className="font-semibold text-navy-900 pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Masih ada pertanyaan lain?</p>
            <button 
              onClick={() => window.open('https://wa.me/6282310335547?text=Halo,%20saya%20memiliki%20pertanyaan%20mengenai%20layanan%20hukum', '_blank')}
              className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;