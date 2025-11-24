import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, AlertCircle, Heart, Apple } from 'lucide-react';

const Education = () => {
  const content = [
    {
      icon: AlertCircle,
      title: 'Apa itu Anemia?',
      description: 'Anemia adalah kondisi dimana tubuh kekurangan sel darah merah atau hemoglobin yang sehat untuk membawa oksigen ke seluruh tubuh.'
    },
    {
      icon: Heart,
      title: 'Gejala Anemia',
      description: 'Lemas, pusing, pucat, sesak napas, detak jantung tidak teratur, sakit kepala, dan tangan-kaki terasa dingin.'
    },
    {
      icon: Apple,
      title: 'Pencegahan',
      description: 'Konsumsi makanan kaya zat besi seperti daging merah, bayam, kacang-kacangan, dan suplemen vitamin C untuk penyerapan zat besi optimal.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <BookOpen size={64} className="text-accent mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">Edukasi Anemia</h1>
            <p className="text-gray-400 text-lg">Pelajari lebih lanjut tentang anemia dan pencegahannya</p>
          </motion.div>

          <div className="space-y-8">
            {content.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <item.icon size={32} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Education;