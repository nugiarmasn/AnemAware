import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Activity, AlertCircle, FileText, Heart, TrendingDown } from 'lucide-react';

const AnemiaProfile = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const classifications = [
    {
      title: 'Anemia Defisiensi Besi',
      description: 'Kondisi paling umum, disebabkan oleh kekurangan zat besi dalam tubuh yang diperlukan untuk produksi hemoglobin.',
      prevalence: '50% dari kasus anemia global',
      icon: TrendingDown,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Anemia Megaloblastik',
      description: 'Disebabkan oleh defisiensi vitamin B12 atau asam folat, menghasilkan eritrosit berukuran besar dan tidak matang.',
      prevalence: '10-15% dari kasus anemia',
      icon: FileText,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Anemia Hemolitik',
      description: 'Kondisi dimana eritrosit dihancurkan lebih cepat dari produksinya, dapat bersifat herediter atau didapat.',
      prevalence: '5-10% dari kasus anemia',
      icon: AlertCircle,
      color: 'from-orange-500 to-pink-500'
    },
    {
      title: 'Anemia Aplastik',
      description: 'Gangguan sumsum tulang yang menyebabkan produksi sel darah merah, putih, dan trombosit menurun drastis.',
      prevalence: 'Jarang, 2-5 kasus per juta populasi',
      icon: Activity,
      color: 'from-pink-600 to-pink-400'
    }
  ];

  const symptoms = [
    'Kelelahan ekstrem dan kelemahan otot',
    'Pucat pada kulit, konjungtiva, dan mukosa',
    'Pusing dan sakit kepala berulang',
    'Sesak napas saat beraktivitas ringan',
    'Takikardia dan palpitasi',
    'Akral dingin pada ekstremitas',
    'Gangguan konsentrasi dan kognisi',
    'Glossitis dan stomatitis angular'
  ];

  const diagnosticCriteria = [
    {
      parameter: 'Hemoglobin (Hb)',
      male: '< 13 g/dL',
      female: '< 12 g/dL',
      pregnant: '< 11 g/dL'
    },
    {
      parameter: 'Hematokrit (Ht)',
      male: '< 40%',
      female: '< 36%',
      pregnant: '< 33%'
    },
    {
      parameter: 'Mean Corpuscular Volume (MCV)',
      male: '80-100 fL',
      female: '80-100 fL',
      pregnant: '80-100 fL'
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
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 border border-pink-300 rounded-full mb-6">
              <Activity size={20} className="text-accent" />
              <span className="text-accent text-sm font-semibold">Profil Medis</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Profil <span className="text-accent">Anemia</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Anemia adalah kondisi medis yang ditandai dengan penurunan konsentrasi hemoglobin 
              atau jumlah eritrosit dalam darah, mengakibatkan kapasitas transportasi oksigen berkurang.
            </p>
          </motion.div>

          {/* Definition Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl border-2 border-pink-200 mb-12"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-2xl flex items-center justify-center flex-shrink-0">
                <Heart size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Definisi Klinis</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Menurut World Health Organization (WHO), anemia didefinisikan sebagai kondisi dimana 
                  konsentrasi hemoglobin dalam darah berada di bawah nilai normal yang disesuaikan dengan 
                  usia, jenis kelamin, dan ketinggian tempat tinggal dari permukaan laut.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Anemia bukan merupakan diagnosis definitif, melainkan manifestasi klinis dari berbagai 
                  kondisi patologis yang mendasarinya, termasuk defisiensi nutrisi, gangguan genetik, 
                  penyakit kronis, atau keganasan hematologi.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Classification Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Klasifikasi <span className="text-accent">Anemia</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Anemia diklasifikasikan berdasarkan etiologi, morfologi eritrosit, dan mekanisme patofisiologi
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {classifications.map((classification, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${classification.color} rounded-xl flex items-center justify-center mb-4`}>
                  <classification.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {classification.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {classification.description}
                </p>
                <div className="bg-pink-50 rounded-lg p-3 border border-pink-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-accent">Prevalensi:</span> {classification.prevalence}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Clinical Manifestations */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-b from-white to-pink-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Manifestasi <span className="text-accent">Klinis</span>
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Gejala anemia bervariasi tergantung pada keparahan, kecepatan onset, dan mekanisme kompensasi 
                tubuh. Manifestasi klinis dapat berkisar dari asimtomatik hingga gejala berat yang mengancam jiwa.
              </p>

              <div className="space-y-3">
                {symptoms.map((symptom, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 bg-white p-4 rounded-xl border border-pink-200"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{symptom}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Kriteria <span className="text-accent">Diagnostik</span>
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Diagnosis anemia ditegakkan berdasarkan pemeriksaan laboratorium darah lengkap (complete blood count) 
                dengan nilai cut-off yang disesuaikan dengan populasi.
              </p>

              <div className="bg-white rounded-2xl shadow-xl border-2 border-pink-200 overflow-hidden">
                <div className="bg-gradient-to-r from-accent to-accent-light p-4">
                  <h3 className="text-white font-bold text-lg">Parameter Hematologi WHO</h3>
                </div>
                <div className="p-6">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-pink-200">
                        <th className="text-left py-3 text-gray-700 font-semibold">Parameter</th>
                        <th className="text-left py-3 text-gray-700 font-semibold">Laki-laki</th>
                        <th className="text-left py-3 text-gray-700 font-semibold">Perempuan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {diagnosticCriteria.map((criteria, index) => (
                        <tr key={index} className="border-b border-pink-100">
                          <td className="py-4 text-gray-700 font-medium">{criteria.parameter}</td>
                          <td className="py-4 text-accent font-semibold">{criteria.male}</td>
                          <td className="py-4 text-accent font-semibold">{criteria.female}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="mt-6 bg-pink-50 rounded-lg p-4 border border-pink-200">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-accent">Catatan:</span> Nilai normal dapat bervariasi 
                      tergantung metode laboratorium dan populasi studi.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pathophysiology */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Patofisiologi <span className="text-accent">Anemia</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-pink-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold">1</div>
                  Penurunan Produksi Eritrosit
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  Gangguan eritropoiesis di sumsum tulang akibat defisiensi nutrisi (besi, B12, folat), 
                  supresi sumsum tulang, atau infiltrasi maligna. Eritropoetin yang inadekuat pada penyakit 
                  ginjal kronik juga mengurangi stimulasi produksi eritrosit.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold">2</div>
                  Peningkatan Destruksi Eritrosit
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  Hemolisis intravaskular atau ekstravaskular memperpendek masa hidup eritrosit. Dapat disebabkan 
                  oleh defek membran eritrosit (sferositosis), defisiensi enzim (G6PD), hemoglobinopati (talasemia), 
                  atau autoimun.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold">3</div>
                  Kehilangan Darah
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  Perdarahan akut atau kronik menyebabkan deplesi iron stores dan penurunan kapasitas produksi 
                  hemoglobin. Perdarahan gastrointestinal, menstruasi berlebihan, atau trauma merupakan penyebab umum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default AnemiaProfile;