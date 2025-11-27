import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Heart, Target, Award, BookOpen, Activity } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Prof. Dr. Ahmad Setiawan, Sp.PD-KHOM',
      role: 'Konsultan Hematologi-Onkologi Medik',
      education: 'FKUI, Fellowship Hematology Mayo Clinic USA',
      expertise: 'Anemia, Leukemia, Lymphoma',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400'
    },
    {
      name: 'Dr. Sarah Kusuma, Sp.PK',
      role: 'Spesialis Patologi Klinik',
      education: 'FKUI, Subspecialist Clinical Hematology',
      expertise: 'Diagnostik Hematologi, Transfusi',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400'
    },
    {
      name: 'Dr. Bambang Wijaya, Sp.PD',
      role: 'Spesialis Penyakit Dalam',
      education: 'FK Universitas Airlangga',
      expertise: 'Anemia, Penyakit Kronis',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400'
    },
    {
      name: 'Dr. Linda Dewi, M.Gizi, Sp.GK',
      role: 'Spesialis Gizi Klinik',
      education: 'FKUI, MS Nutritional Science',
      expertise: 'Nutrisi Anemia, Diet Terapeutik',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Komitmen Medis',
      description: 'Dedikasi penuh terhadap standar pelayanan kesehatan dan evidence-based medicine dalam edukasi anemia.'
    },
    {
      icon: Target,
      title: 'Akurasi Informasi',
      description: 'Menyajikan informasi medis yang terverifikasi, akurat, dan sesuai guidelines internasional terkini.'
    },
    {
      icon: BookOpen,
      title: 'Edukasi Berkelanjutan',
      description: 'Program edukasi kesehatan yang komprehensif dan mudah dipahami untuk semua kalangan.'
    },
    {
      icon: Award,
      title: 'Profesionalisme',
      description: 'Tim medis bersertifikat dengan pengalaman klinis dan akademis di bidang hematologi.'
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
              <Users size={20} className="text-accent" />
              <span className="text-accent text-sm font-semibold">
                Tim Medis Profesional
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Tentang <span className="text-accent">AnemAware</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Platform edukasi kesehatan yang didedikasikan untuk meningkatkan pemahaman
              masyarakat tentang anemia melalui informasi medis berbasis evidence-based
              medicine.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Statement */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent to-accent-light rounded-3xl p-12 text-white text-center shadow-2xl"
          >
            <Activity size={64} className="mx-auto mb-6" />

            <h2 className="text-4xl font-bold mb-6">Visi & Misi</h2>

            <p className="text-xl leading-relaxed mb-8">
              Menjadi platform edukasi kesehatan terdepan dalam penyebaran informasi medis
              tentang anemia, dengan misi meningkatkan literasi kesehatan masyarakat dan
              mendukung upaya pencegahan serta manajemen anemia melalui pendekatan holistik
              dan berbasis bukti ilmiah.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Values */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-b from-white to-pink-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Nilai <span className="text-accent">Kami</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Prinsip fundamental yang memandu setiap aspek layanan edukasi kesehatan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mb-4">
                  <value.icon size={28} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Tim <span className="text-accent">Medis</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Para ahli kesehatan berpengalaman di bidang hematologi dan nutrisi medis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>

                  <p className="text-accent font-semibold text-sm mb-3">
                    {member.role}
                  </p>

                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="leading-relaxed">{member.education}</p>

                    <div className="pt-3 border-t border-pink-100">
                      <p className="font-semibold text-gray-700">Keahlian:</p>
                      <p>{member.expertise}</p>
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

export default About;
