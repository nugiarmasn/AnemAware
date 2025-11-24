import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingBubbles from '../components/FloatingBubbles';
import { Heart, Activity, BookOpen, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import videoSrc from "../../assets/videos/anemia-background.mp4";
const HomeScreen = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Activity,
      title: 'Skrining Cepat',
      description: 'Deteksi anemia dengan hasil instan dan akurat',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Shield,
      title: 'Data Aman',
      description: 'Privasi Anda terlindungi dengan teknologi enkripsi',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Real-time',
      description: 'Pantau kesehatan Anda kapan saja, dimana saja',
      color: 'from-pink-600 to-pink-400'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

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
            className="w-full h-full object-cover opacity-50">
  <source src={videoSrc} type="video/mp4" />
</video>
      </div>

      <FloatingBubbles />
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative pt-32 pb-20 px-6 z-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div   
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 border border-pink-300 rounded-full mb-6"
              >
                <Sparkles size={16} className="text-accent" />
                <span className="text-accent text-sm font-semibold">Inovasi Kesehatan Digital</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gray-900">Deteksi</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                  Anemia
                </span>
                <br />
                <span className="text-gray-900">Lebih Mudah</span>
              </h1>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Platform digital untuk deteksi dini anemia dengan teknologi modern. 
                Pantau kesehatan Anda dengan mudah, cepat, dan akurat.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/user-screening')}
                  className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform shadow-lg hover:shadow-accent/50 flex items-center gap-2 text-lg"
                >
                  <Heart size={20} />
                  Mulai Sekarang
                  <ArrowRight size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/education')}
                  className="bg-white hover:bg-pink-50 text-accent font-bold py-4 px-8 rounded-full transition-all duration-300 border-2 border-accent flex items-center gap-2 text-lg"
                >
                  <BookOpen size={20} />
                  Pelajari Lebih Lanjut
                </motion.button>
              </div>

              {/* Stats */}
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-pink-200"
              >
                <motion.div variants={item}>
                  <h3 className="text-3xl font-bold text-accent mb-1">1000+</h3>
                  <p className="text-gray-600 text-sm">Pengguna Aktif</p>
                </motion.div>
                <motion.div variants={item}>
                  <h3 className="text-3xl font-bold text-accent mb-1">95%</h3>
                  <p className="text-gray-600 text-sm">Akurasi</p>
                </motion.div>
                <motion.div variants={item}>
                  <h3 className="text-3xl font-bold text-accent mb-1">24/7</h3>
                  <p className="text-gray-600 text-sm">Support</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Simple Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
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

      {/* Features Section */}
      <motion.section
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
              Mengapa <span className="text-accent">AnemAware</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              Solusi terpercaya untuk deteksi dan monitoring anemia
            </motion.p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-pink-100 hover:border-pink-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-20 px-6 bg-white z-20"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent to-accent-light rounded-[3rem] p-12 text-center shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Siap Mulai Perjalanan Sehat Anda?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pengguna yang telah merasakan manfaat AnemAware. 
              Mulai deteksi anemia Anda sekarang!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/user-screening')}
              className="bg-white text-accent font-bold py-4 px-8 rounded-full text-lg inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all"
            >
              <Heart size={24} />
              Mulai Skrining Gratis
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