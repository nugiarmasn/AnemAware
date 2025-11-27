import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Apa itu anemia dan bagaimana mendiagnosisnya?',
      answer: 'Anemia adalah kondisi medis dimana kadar hemoglobin dalam darah berada di bawah nilai normal (laki-laki <13 g/dLLContinue, perempuan <12 g/dL). Diagnosis ditegakkan melalui pemeriksaan darah lengkap (CBC) yang menunjukkan penurunan hemoglobin, hematokrit, atau jumlah eritrosit. Pemeriksaan lanjutan seperti serum ferritin, vitamin B12, dan asam folat diperlukan untuk identifikasi etiologi spesifik.'
    },
    {
      question: 'Apa perbedaan anemia defisiensi besi dengan anemia jenis lain?',
      answer: 'Anemia defisiensi besi ditandai dengan MCV rendah (mikrositik), feritin serum <30 ng/mL, dan transferrin saturation <20%. Berbeda dengan anemia megaloblastik (MCV tinggi/makrositik), anemia hemolitik (peningkatan bilirubin indirek dan LDH), atau anemia penyakit kronis (feritin normal/tinggi meskipun defisiensi besi fungsional).'
    },
    {
      question: 'Berapa lama waktu yang dibutuhkan untuk memperbaiki anemia?',
      answer: 'Dengan terapi suplementasi besi oral yang adekuat, hemoglobin biasanya meningkat 1-2 g/dL dalam 3-4 minggu. Normalisasi hemoglobin lengkap tercapai dalam 6-8 minggu, namun terapi dilanjutkan 3-6 bulan untuk replesi iron stores. Monitoring CBC dilakukan setiap 4-8 minggu untuk menilai respons terapi.'
    },
    {
      question: 'Apa makanan terbaik untuk mencegah anemia defisiensi besi?',
      answer: 'Sumber besi heme (absorpsi 15-35%): daging merah, hati, ayam, ikan. Sumber besi non-heme (absorpsi 2-20%): bayam, kacang-kacangan, sereal fortifikasi. Vitamin C (jeruk, tomat, paprika) meningkatkan absorpsi besi non-heme hingga 4x lipat. Hindari konsumsi teh/kopi bersamaan dengan makanan kaya besi karena tannin menghambat absorpsi.'
    },
    {
      question: 'Kapan harus konsultasi ke dokter tentang anemia?',
      answer: 'Segera konsultasi jika mengalami: fatigue ekstrem yang mengganggu aktivitas harian, sesak napas saat istirahat, palpitasi, pusing berulang, pucat signifikan pada konjungtiva/telapak tangan, atau riwayat perdarahan kronik. Skrining rutin direkomendasikan untuk ibu hamil (setiap trimester), wanita dengan menstruasi berat, dan individu dengan penyakit kronik.'
    },
    {
      question: 'Apakah anemia bisa menyebabkan komplikasi serius?',
      answer: 'Anemia berat (Hb <7 g/dL) dapat menyebabkan: gagal jantung kongestif akibat hipoksia dan high-output cardiac state, angina pada pasien penyakit jantung koroner, gangguan kognitif dan perkembangan pada anak, komplikasi kehamilan (prematuritas, BBLR), dan penurunan quality of life signifikan. Penanganan dini mencegah komplikasi long-term.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-20 px-6 bg-gradient-to-b from-pink-50 to-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 border border-pink-300 rounded-full mb-6">
              <HelpCircle size={20} className="text-accent" />
              <span className="text-accent text-sm font-semibold">Pertanyaan Umum</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              FAQ <span className="text-accent">Anemia</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Jawaban atas pertanyaan yang sering diajukan tentang anemia, diagnosis, dan manajemennya
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Content */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border-2 border-pink-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-pink-50 transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>

                  {openIndex === index ? (
                    <ChevronUp size={24} className="text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-accent flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default FAQ;
    