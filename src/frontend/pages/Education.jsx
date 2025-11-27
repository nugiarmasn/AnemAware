import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Shield, Heart, Apple, Pill, Activity, AlertTriangle, CheckCircle } from 'lucide-react';

const Education = () => {
  const preventionStrategies = [
    {
      icon: Apple,
      title: 'Nutrisi Optimal',
      description: 'Konsumsi makanan kaya zat besi (daging merah, hati, sayuran hijau), vitamin B12 (produk hewani), dan asam folat (kacang-kacangan, sereal fortifikasi).',
      tips: [
        'Daging merah: 2-3x per minggu',
        'Sayuran hijau gelap setiap hari',
        'Vitamin C untuk meningkatkan absorpsi besi',
        'Hindari teh/kopi saat makan'
      ]
    },
    {
      icon: Pill,
      title: 'Suplementasi',
      description: 'Suplementasi profilaksis direkomendasikan untuk populasi berisiko tinggi seperti ibu hamil, anak-anak, dan vegetarian.',
      tips: [
        'Ibu hamil: 60 mg besi elemental/hari',
        'Vitamin B12: 2.4 mcg/hari',
        'Asam folat: 400 mcg/hari',
        'Konsultasi dokter sebelum suplementasi'
      ]
    },
    {
      icon: Shield,
      title: 'Skrining Rutin',
      description: 'Pemeriksaan hemoglobin berkala untuk deteksi dini terutama pada populasi rentan.',
      tips: [
        'Skrining tahunan untuk dewasa sehat',
        'Setiap trimester untuk ibu hamil',
        'Follow-up post-treatment',
        'Pemeriksaan complete blood count'
      ]
    },
    {
      icon: Heart,
      title: 'Manajemen Penyakit Dasar',
      description: 'Pengendalian komorbid penyebab anemia seperti CKD, inflamasi, dan infeksi.',
      tips: [
        'Kontrol rutin penyakit kronik',
        'Manajemen perdarahan gastrointestinal',
        'Pengobatan infeksi parasit',
        'Monitoring efek samping obat'
      ]
    }
  ];

  const managementApproaches = [
    {
      severity: 'Anemia Ringan',
      hbRange: 'Hb 10-12 g/dL',
      management: [
        'Suplementasi oral besi 150-200 mg/hari',
        'Modifikasi diet tinggi zat besi',
        'Monitoring Hb setiap 4-8 minggu',
        'Identifikasi dan koreksi penyebab'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      severity: 'Anemia Sedang',
      hbRange: 'Hb 7-10 g/dL',
      management: [
        'Suplementasi besi dosis tinggi',
        'Pertimbangkan besi intravena',
        'Evaluasi penyakit penyerta',
        'Monitoring ketat setiap 2-4 minggu'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      severity: 'Anemia Berat',
      hbRange: 'Hb < 7 g/dL',
      management: [
        'Transfusi PRC bila simtomatik',
        'Terapi besi parenteral',
        'Rawat inap & monitoring intensif',
        'Investigasi komprehensif etiologi'
      ],
      color: 'from-red-500 to-pink-500'
    }
  ];

  const complications = [
    {
      title: 'Komplikasi Kardiovaskular',
      description: 'Hipoksia kronik memicu takikardia, kardiomegali, serta gagal jantung.',
      icon: Heart,
      severity: 'Tinggi'
    },
    {
      title: 'Gangguan Kognitif',
      description: 'Kurangnya oksigenasi otak memengaruhi memori & konsentrasi.',
      icon: AlertTriangle,
      severity: 'Sedang'
    },
    {
      title: 'Komplikasi Kehamilan',
      description: 'Risiko prematur, BBLR, hingga mortalitas perinatal meningkat.',
      icon: Activity,
      severity: 'Tinggi'
    },
    {
      title: 'Penurunan Imunitas',
      description: 'Defisiensi besi menurunkan fungsi imun dan meningkatkan risiko infeksi.',
      icon: Shield,
      severity: 'Sedang'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-20 px-6 bg-gradient-to-b from-pink-50 to-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 border border-pink-300 rounded-full mb-6">
            <BookOpen size={20} className="text-accent" />
            <span className="text-accent text-sm font-semibold">Panduan Edukasi</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Edukasi <span className="text-accent">Anemia</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Panduan komprehensif berbasis EBM untuk pencegahan, manajemen, dan edukasi pasien anemia.
          </p>
        </div>
      </motion.section>

      {/* Prevention */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Strategi <span className="text-accent">Pencegahan</span></h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">Cara untuk mencegah anemia secara efektif.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {preventionStrategies.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-xl flex justify-center items-center">
                    <s.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{s.title}</h3>
                    <p className="text-gray-700">{s.description}</p>
                  </div>
                </div>

                {/* tips */}
                <div className="bg-pink-50 rounded-xl p-4 border border-pink-200">
                  <p className="text-accent font-semibold mb-2">Rekomendasi:</p>
                  <ul className="space-y-2">
                    {s.tips.map((tip, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-accent mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Management */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-b from-white to-pink-50">

        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Manajemen <span className="text-accent">Klinis</span></h2>
          <p className="text-gray-600 text-lg">Terapi sesuai derajat keparahan.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {managementApproaches.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-pink-200">

              <div className={`bg-gradient-to-r ${m.color} p-6 text-white`}>
                <h3 className="text-2xl font-bold">{m.severity}</h3>
                <p className="text-white/90">{m.hbRange}</p>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {m.management.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <div className="w-6 h-6 bg-pink-100 rounded-full flex justify-center items-center font-bold text-sm text-accent">
                        {idx + 1}
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Complications */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Komplikasi <span className="text-accent">Anemia</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Dampak sistemik jika tidak ditangani.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {complications.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border-2 border-pink-100">

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center">
                    <c.icon size={24} className="text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold">{c.title}</h3>

                      <span className={`px-3 py-1 text-xs rounded-full font-semibold 
                        ${c.severity === "Tinggi" ? "bg-red-100 text-red-600" : "bg-yellow-100 text-yellow-600"}`}>
                        {c.severity}
                      </span>
                    </div>

                    <p className="text-gray-700 leading-relaxed">{c.description}</p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Education;
