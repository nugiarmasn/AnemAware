import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingBubbles from '../components/FloatingBubbles';
import { Heart, Activity, BookOpen, ArrowRight, Sparkles, AlertCircle, TrendingDown, FileText, Video, Shield, Apple, Pill, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import videoSrc from '../../assets/videos/anemia-background.mp4';

const HomeScreen = () => {
  const navigate = useNavigate();

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

  const preventionTips = [
    {
      icon: Apple,
      title: 'Nutrisi Seimbang',
      description: 'Konsumsi makanan kaya zat besi (daging merah, sayuran hijau), vitamin B12, dan asam folat'
    },
    {
      icon: Pill,
      title: 'Suplementasi',
      description: 'Suplementasi besi untuk ibu hamil (60mg/hari) dan populasi berisiko tinggi'
    },
    {
      icon: Shield,
      title: 'Skrining Rutin',
      description: 'Pemeriksaan hemoglobin berkala, terutama untuk ibu hamil setiap trimester'
    }
  ];

  const videos = [
    {
      id: 1,
      title: 'Memahami Anemia: Definisi dan Klasifikasi',
      youtubeId: 'Erexu1RxnLc',
      duration: '12:45'
    },
    {
      id: 2,
      title: 'Anemia Defisiensi Besi: Diagnosis dan Manajemen',
      youtubeId: 'kPRA0W1kECg',
      duration: '18:30'
    },
    {
      id: 3,
      title: 'Nutrisi untuk Pencegahan Anemia',
      youtubeId: '9v5FZwCeVWo',
      duration: '10:20'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50/30 to-white z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      <FloatingBubbles />
      <Navbar />

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative pt-32 pb-20 px-6 z-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gray-900">Memahami</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                  Anemia
                </span>
                <br />
                <span className="text-gray-900">Secara Medis</span>
              </h1>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Anemia adalah kondisi medis yang ditandai dengan penurunan konsentrasi hemoglobin atau 
                jumlah eritrosit dalam darah, mengakibatkan kapasitas transportasi oksigen berkurang. 
                Platform edukasi kesehatan berbasis evidence-based medicine untuk profesional kesehatan dan masyarakat umum.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('profil-anemia').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-accent/50 flex items-center gap-2 text-lg"
                >
                  <Heart size={20} />
                  Pelajari Anemia
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full max-w-md"
              >
                <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-[3rem] p-12 border-4 border-pink-200 shadow-2xl">
                  <Activity size={200} className="text-accent mx-auto" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* PROFIL ANEMIA SECTION */}
      <motion.section
        id="profil-anemia"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-20 px-6 bg-gradient-to-b from-white to-pink-50 z-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              Profil <span className="text-accent">Anemia</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg max-w-3xl mx-auto"
            >
              Informasi komprehensif tentang definisi, klasifikasi, dan manifestasi klinis anemia
            </motion.p>
          </div>

          {/* Definition Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border-2 border-pink-200 mb-12"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-2xl flex items-center justify-center flex-shrink-0">
                <Heart size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Definisi Klinis</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Menurut World Health Organization (WHO), anemia didefinisikan sebagai kondisi dimana 
                  konsentrasi hemoglobin dalam darah berada di bawah nilai normal: laki-laki dewasa &lt;13 g/dL, 
                  perempuan dewasa &lt;12 g/dL, dan ibu hamil &lt;11 g/dL.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Anemia bukan merupakan diagnosis definitif, melainkan manifestasi klinis dari berbagai 
                  kondisi patologis yang mendasarinya, termasuk defisiensi nutrisi, gangguan genetik, 
                  penyakit kronis, atau keganasan hematologi.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Classifications */}
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

      {/* GEJALA & DIAGNOSIS SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-20 px-6 bg-white z-20"
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
                    className="flex items-start gap-3 bg-pink-50 p-4 rounded-xl border border-pink-200"
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
                Diagnosis anemia ditegakkan berdasarkan pemeriksaan laboratorium darah lengkap (Complete Blood Count) 
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
                        <th className="text-left py-3 text-gray-700 font-semibold">Nilai Normal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-pink-100">
                        <td className="py-4 text-gray-700 font-medium">Hemoglobin (Hb) Pria</td>
                        <td className="py-4 text-accent font-semibold">&ge; 13 g/dL</td>
                      </tr>
                      <tr className="border-b border-pink-100">
                        <td className="py-4 text-gray-700 font-medium">Hemoglobin (Hb) Wanita</td>
                        <td className="py-4 text-accent font-semibold">&ge; 12 g/dL</td>
                      </tr>
                      <tr className="border-b border-pink-100">
                        <td className="py-4 text-gray-700 font-medium">Hematokrit (Ht) Pria</td>
                        <td className="py-4 text-accent font-semibold">&ge; 40%</td>
                      </tr>
                      <tr>
                        <td className="py-4 text-gray-700 font-medium">Hematokrit (Ht) Wanita</td>
                        <td className="py-4 text-accent font-semibold">&ge; 36%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* PENCEGAHAN SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-20 px-6 bg-gradient-to-b from-white to-pink-50 z-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Strategi <span className="text-accent">Pencegahan</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Pendekatan multifaktorial untuk mencegah anemia dan komplikasinya
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {preventionTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-pink-100 hover:border-pink-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-2xl flex items-center justify-center mb-6">
                  <tip.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {tip.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* VIDEO EDUKASI SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-20 px-6 bg-white z-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 border border-pink-300 rounded-full mb-6">
              <Video size={20} className="text-accent" />
              <span className="text-accent text-sm font-semibold">Multimedia Edukasi</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Video <span className="text-accent">Edukasi</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Koleksi video edukatif tentang anemia dan hematologi dari para ahli kesehatan
            </p>
          </div>

          {/* Featured Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-pink-200 mb-12"
          >
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videos[0].youtubeId}`}
                title={videos[0].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                {videos[0].title}
              </h3>
              <p className="text-gray-600">Duration: {videos[0].duration}</p>
            </div>
          </motion.div>

          {/* More Videos */}
          <div className="grid md:grid-cols-2 gap-8">
            {videos.slice(1).map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all"
              >
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600">Duration: {video.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CONTACT CTA SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-20 px-6 bg-gradient-to-b from-white to-pink-50 z-20"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent to-accent-light rounded-[3rem] p-12 text-center shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Butuh Informasi Lebih Lanjut?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Hubungi tim medis kami untuk konsultasi atau informasi lebih detail tentang anemia dan gangguan hematologi.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-white text-accent font-bold py-4 px-8 rounded-full text-lg inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all"
            >
              <Mail size={24} />
              Hubungi Kami
              <ArrowRight size={24} />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default HomeScreen;