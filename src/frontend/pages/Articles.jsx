import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText, Search, Clock, ArrowRight, TrendingUp } from 'lucide-react';

const Articles = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const articles = [
    {
      id: 1,
      title: 'Pendekatan Diagnostik Anemia Defisiensi Besi pada Populasi Dewasa',
      excerpt: 'Tinjauan komprehensif tentang algoritma diagnostik anemia defisiensi besi, termasuk interpretasi parameter besi serum, feritin, dan TIBC dalam konteks klinis.',
      category: 'Hematologi Klinis',
      author: 'Dr. Sarah Wijaya, Sp.PK',
      date: '15 November 2024',
      readTime: '8 menit',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      featured: true
    },
    {
      id: 2,
      title: 'Manajemen Anemia pada Penyakit Ginjal Kronik: Update Terkini',
      excerpt: 'Panduan evidence-based untuk pengelolaan anemia pada pasien gagal ginjal kronik, termasuk indikasi erythropoietin stimulating agents dan target hemoglobin optimal.',
      category: 'Nefrologi',
      author: 'Prof. Dr. Ahmad Budiman, Sp.PD-KGH',
      date: '10 November 2024',
      readTime: '12 menit',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800',
      featured: true
    },
    {
      id: 3,
      title: 'Anemia Megaloblastik: Diagnosis Diferensial dan Terapi',
      excerpt: 'Eksplorasi mendalam tentang defisiensi vitamin B12 dan asam folat, termasuk manifestasi neurologis, pemeriksaan laboratorium, dan strategi suplementasi.',
      category: 'Hematologi',
      author: 'Dr. Linda Kusuma, Sp.PD-KHOM',
      date: '5 November 2024',
      readTime: '10 menit',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
      featured: false
    },
    {
      id: 4,
      title: 'Anemia dalam Kehamilan: Implikasi Maternal dan Fetal',
      excerpt: 'Analisis risiko anemia pada ibu hamil, dampak terhadap outcome kehamilan, dan protokol suplementasi besi pada trimester pertama hingga postpartum.',
      category: 'Obstetri',
      author: 'Dr. Ratna Dewi, Sp.OG',
      date: '1 November 2024',
      readTime: '9 menit',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800',
      featured: false
    },
    {
      id: 5,
      title: 'Talasemia: Skrining, Konseling Genetik, dan Manajemen Komprehensif',
      excerpt: 'Pendekatan multidisiplin untuk talasemia mayor dan minor, termasuk transfusi rutin, chelation therapy, dan konseling pranikah.',
      category: 'Genetika Medis',
      author: 'Prof. Dr. Bambang Sutrisno, Sp.A(K)',
      date: '28 Oktober 2024',
      readTime: '15 menit',
      image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800',
      featured: false
    },
    {
      id: 6,
      title: 'Anemia Hemolitik Autoimun: Patogenesis dan Imunoterapi',
      excerpt: 'Mekanisme molekuler hemolisis autoimun, pemeriksaan Coombs test, dan terapi imunosupresif berbasis kortikosteroid dan rituximab.',
      category: 'Imunohematologi',
      author: 'Dr. Maya Sari, Sp.PK-KHOM',
      date: '25 Oktober 2024',
      readTime: '11 menit',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800',
      featured: false
    }
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

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
              <FileText size={20} className="text-accent" />
              <span className="text-accent text-sm font-semibold">Publikasi Ilmiah</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Artikel <span className="text-accent">Medis</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Publikasi terkini tentang hematologi, anemia, dan gangguan darah dari perspektif evidence-based medicine
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari artikel berdasarkan judul, kategori, atau topik..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-pink-200 focus:border-accent focus:outline-none text-gray-700 bg-white shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <TrendingUp className="text-accent" size={32} />
              <h2 className="text-4xl font-bold text-gray-900">Artikel Unggulan</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => navigate(`/articles/${article.id}`)}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-pink-200 hover:border-accent transition-all cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-accent font-semibold text-sm">{article.category}</span>
                      <span className="text-gray-400">•</span>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Clock size={16} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-pink-100">
                      <div>
                        <p className="text-sm text-gray-700 font-semibold">{article.author}</p>
                        <p className="text-xs text-gray-500">{article.date}</p>
                      </div>
                      <button className="text-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        Baca <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Regular Articles */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-b from-white to-pink-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Semua Artikel</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => navigate(`/articles/${article.id}`)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-accent font-semibold text-sm">{article.category}</span>
                    <span className="text-gray-400">•</span>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed text-sm">
                    {article.excerpt}
                  </p>
                  <div className="pt-4 border-t border-pink-100">
                    <p className="text-sm text-gray-700 font-semibold">{article.author}</p>
                    <p className="text-xs text-gray-500">{article.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <FileText size={64} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Tidak ada artikel yang sesuai dengan pencarian Anda</p>
            </div>
          )}
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Articles;