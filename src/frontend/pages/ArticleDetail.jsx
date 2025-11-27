import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Clock, Calendar, User, Share2, BookOpen } from 'lucide-react';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Data artikel (dalam praktik nyata, fetch dari database/API)
  const article = {
    id: id,
    title: 'Pendekatan Diagnostik Anemia Defisiensi Besi pada Populasi Dewasa',
    author: 'Dr. Sarah Wijaya, Sp.PK',
    date: '15 November 2024',
    readTime: '8 menit',
    category: 'Hematologi Klinis',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200',
    content: [
      {
        type: 'text',
        content: 'Anemia defisiensi besi (ADB) merupakan bentuk anemia nutrisional yang paling prevalent secara global, mempengaruhi lebih dari 1 miliar individu worldwide. Kondisi ini ditandai dengan deplesi iron stores yang mengakibatkan penurunan sintesis hemoglobin dan produksi eritrosit yang inadekuat.'
      },
      {
        type: 'heading',
        content: 'Patofisiologi dan Etiologi'
      },
      {
        type: 'text',
        content: 'Defisiensi besi berkembang secara bertahap melalui tiga stadium: deplesi iron stores, iron-deficient erythropoiesis, dan anemia defisiensi besi manifes. Etiologi primer meliputi inadequate dietary intake, malabsorpsi gastrointestinal, dan kehilangan darah kronik—terutama dari saluran gastrointestinal atau menstruasi berlebihan pada wanita usia reproduktif.'
      },
      {
        type: 'heading',
        content: 'Manifestasi Klinis'
      },
      {
        type: 'text',
        content: 'Gejala ADB bervariasi dari asimtomatik pada anemia ringan hingga fatigue ekstrem, palpitasi, dan dyspnea pada anemia berat. Manifestasi khas mencakup koilonychia (spoon nails), glossitis atrofik, angular cheilitis, dan pica (keinginan mengonsumsi substansi non-nutritif seperti es atau tanah).'
      },
      {
        type: 'heading',
        content: 'Algoritma Diagnostik'
      },
      {
        type: 'text',
        content: 'Diagnosis ADB memerlukan pendekatan sistematis:'
      },
      {
        type: 'list',
        items: [
          'Complete Blood Count (CBC): Hb rendah, MCV menurun (anemia mikrositik), MCH dan MCHC rendah (hipokromik)',
          'Serum Ferritin: Gold standard untuk assessment iron stores; nilai <30 ng/mL mengindikasikan deplesi besi',
          'Serum Iron dan TIBC: Serum iron rendah dengan TIBC meningkat (transferrin saturation <20%)',
          'Peripheral Blood Smear: Anisositosis, poikilositosis, dan sel target dapat tervisualisasi',
          'Investigasi Etiologi: Endoskopi gastrointestinal untuk mengidentifikasi sumber perdarahan occult'
        ]
      },
      {
        type: 'heading',
        content: 'Interpretasi Parameter Besi'
      },
      {
        type: 'text',
        content: 'Feritin serum merupakan acute phase reactant yang dapat falsely elevated pada kondisi inflamasi kronis, keganasan, atau penyakit hati. Dalam konteks inflamasi, feritin >100 ng/mL tidak selalu mengeksklusi defisiensi besi. Soluble transferrin receptor (sTfR) dapat membantu diferensiasi ADB dari anemia penyakit kronis, namun availability terbatas di sebagian besar laboratorium klinik.'
      },
      {
        type: 'heading',
        content: 'Manajemen Terapi'
      },
      {
        type: 'text',
        content: 'Terapi ADB mencakup dua komponen esensial: koreksi defisiensi besi dan identifikasi serta manajemen penyebab underlying. Suplementasi besi oral (ferrous sulfate 325 mg, mengandung 65 mg elemental iron, 2-3x/hari) merupakan first-line therapy. Respons terapeutik ditandai dengan peningkatan reticulocyte count dalam 5-10 hari dan kenaikan Hb 1-2 g/dL dalam 3-4 minggu.'
      },
      {
        type: 'text',
        content: 'Besi intravena diindikasikan pada kasus intoleransi gastrointestinal terhadap besi oral, malabsorpsi intestinal, atau kebutuhan replesi cepat (misal: pre-operatif atau trimester ketiga kehamilan). Formulasi available meliputi iron sucrose, ferric carboxymaltose, dan iron dextran.'
      },
      {
        type: 'heading',
        content: 'Monitoring dan Follow-up'
      },
      {
        type: 'text',
        content: 'Pemeriksaan CBC follow-up dilakukan setelah 4-8 minggu terapi untuk assess respons. Suplementasi dilanjutkan 3-6 bulan post-normalisasi Hb untuk replesi iron stores. Feritin serum target post-treatment adalah >50 ng/mL. Failure to respond terhadap terapi oral mengindikasikan non-compliance, continued blood loss, malabsorpsi, atau misdiagnosis (misal: talasemia trait atau anemia sideroblastik).'
      },
      {
        type: 'heading',
        content: 'Kesimpulan'
      },
      {
        type: 'text',
        content: 'ADB merupakan kondisi yang highly treatable namun memerlukan diagnostic accuracy dan identifikasi etiologi underlying. Pendekatan diagnostik yang sistematis, kombinasi parameter laboratorium yang appropriate, dan investigasi komprehensif untuk mengidentifikasi sumber defisiensi besi adalah kunci keberhasilan manajemen klinis.'
      }
    ],
    references: [
      'Camaschella C. Iron deficiency. Blood. 2019;133(1):30-39.',
      'World Health Organization. Iron deficiency anaemia: assessment, prevention and control. Geneva: WHO; 2001.',
      'Lopez A, Cacoub P, Macdougall IC, Peyrin-Biroulet L. Iron deficiency anaemia. Lancet. 2016;387(10021):907-916.',
      'Kassebaum NJ, et al. A systematic analysis of global anemia burden from 1990 to 2010. Blood. 2014;123(5):615-624.'
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-12 px-6 bg-gradient-to-b from-pink-50 to-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/articles')}
            className="flex items-center gap-2 text-accent font-semibold mb-8 hover:underline"
          >
            <ArrowLeft size={20} />
            Kembali ke Artikel
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 border border-pink-300 rounded-full mb-6">
              <BookOpen size={16} className="text-accent" />
              <span className="text-accent text-sm font-semibold">{article.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User size={18} className="text-accent" />
                <span className="font-semibold">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-accent" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-accent" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <div className="flex gap-3 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-accent/50 transition-all"
              >
                <Share2 size={18} />
                Bagikan
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Image */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="px-6 mb-12"
      >
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-200">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Article Content */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="px-6 pb-20"
      >
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {article.content.map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-6"
              >
                {block.type === 'heading' && (
                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
                    {block.content}
                  </h2>
                )}
                {block.type === 'text' && (
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {block.content}
                  </p>
                )}
                {block.type === 'list' && (
                  <ul className="space-y-3 ml-6">
                    {block.items.map((item, idx) => (
                      <li key={idx} className="text-gray-700 leading-relaxed text-lg flex items-start gap-3">
                        <span className="text-accent font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* References */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t-2 border-pink-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Referensi</h3>
            <ol className="space-y-3">
              {article.references.map((ref, index) => (
                <li key={index} className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-semibold text-accent">[{index + 1}]</span> {ref}
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8 border-2 border-pink-200"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tentang Penulis</h3>
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center flex-shrink-0">
                <User size={40} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-lg text-gray-900 mb-2">{article.author}</p>
                <p className="text-gray-600 leading-relaxed">
                  Spesialis Patologi Klinik dengan fokus pada hematologi diagnostik. 
                  Berpengalaman lebih dari 15 tahun dalam diagnostik laboratorium dan 
                  penelitian anemia. Alumni FKUI dengan subspecialist training di bidang hematologi klinis.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ArticleDetail;