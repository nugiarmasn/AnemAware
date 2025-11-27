import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Video, Play, Clock, Eye } from 'lucide-react';

const VideoEducation = () => {
  const videos = [
    {
      id: 1,
      title: 'Memahami Anemia: Definisi dan Klasifikasi',
      description: 'Video edukatif tentang definisi anemia, klasifikasi berdasarkan morfologi dan etiologi, serta prevalensi global anemia.',
      youtubeId: 'Erexu1RxnLc',
      duration: '12:45',
      views: '45.2K',
      category: 'Dasar Hematologi'
    },
    {
      id: 2,
      title: 'Anemia Defisiensi Besi: Diagnosis dan Manajemen',
      description: 'Penjelasan komprehensif tentang patofisiologi, gejala klinis, pemeriksaan laboratorium, dan terapi anemia defisiensi besi.',
      youtubeId: 'kPRA0W1kECg',
      duration: '18:30',
      views: '62.8K',
      category: 'Hematologi Klinis'
    },
    {
      id: 3,
      title: 'Nutrisi untuk Pencegahan Anemia',
      description: 'Panduan praktis tentang makanan kaya zat besi, vitamin B12, asam folat, dan strategi meningkatkan absorpsi nutrisi.',
      youtubeId: '9v5FZwCeVWo',
      duration: '10:20',
      views: '38.5K',
      category: 'Nutrisi Medis'
    },
    {
      id: 4,
      title: 'Anemia pada Kehamilan: Risiko dan Pencegahan',
      description: 'Diskusi mendalam tentang anemia maternal, komplikasi kehamilan, dan protokol suplementasi prenatal.',
      youtubeId: 'mXVGIb3bzHc',
      duration: '15:45',
      views: '51.3K',
      category: 'Obstetri'
    },
    {
      id: 5,
      title: 'Talasemia: Genetika dan Manajemen',
      description: 'Penjelasan tentang inheritance pattern talasemia, skrining carrier, dan pendekatan terapi transfusi.',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '20:15',
      views: '29.7K',
      category: 'Genetika Medis'
    },
    {
      id: 6,
      title: 'Interpretasi Complete Blood Count (CBC)',
      description: 'Tutorial praktis membaca hasil CBC, parameter penting untuk diagnosis anemia, dan clinical correlation.',
      youtubeId: 'QH2-TGUlwu4',
      duration: '14:30',
      views: '73.1K',
      category: 'Laboratorium Klinis'
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
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 border border-pink-300 rounded-full mb-6">
              <Video size={20} className="text-accent" />
              <span className="text-accent text-sm font-semibold">Multimedia Edukasi</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Video <span className="text-accent">Edukasi</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Koleksi video edukatif tentang anemia dan hematologi dari para ahli kesehatan
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Video */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Play className="text-accent" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Video Unggulan</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-pink-200"
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
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {videos[0].category}
                </span>
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{videos[0].duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye size={16} />
                    <span>{videos[0].views} views</span>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                {videos[0].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {videos[0].description}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Video Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-b from-white to-pink-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Semua Video</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.slice(1).map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all cursor-pointer"
              >
                <div className="relative aspect-video bg-gray-900">
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
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-accent font-semibold text-sm">{video.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed text-sm">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-4 text-gray-500 text-sm pt-4 border-t border-pink-100">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{video.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{video.views}</span>
                    </div>
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

export default VideoEducation;