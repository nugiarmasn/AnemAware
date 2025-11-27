import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi pengiriman form
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message setelah 5 detik
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@anemaware.com',
      subContent: 'media@anemaware.com',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: '+62 21 1234 5678',
      subContent: '+62 812 3456 7890 (WhatsApp)',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Gedung Medika Tower Lt. 12',
      subContent: 'Jl. Kesehatan Raya No. 123, Jakarta 12345',
      color: 'from-pink-600 to-pink-400'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Senin - Jumat: 08.00 - 17.00 WIB',
      subContent: 'Sabtu: 08.00 - 13.00 WIB',
      color: 'from-accent to-accent-light'
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
              <Mail size={20} className="text-accent" />
              <span className="text-accent text-sm font-semibold">Hubungi Kami</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Kontak <span className="text-accent">AnemAware</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hubungi tim medis kami untuk konsultasi, pertanyaan, atau informasi lebih lanjut tentang anemia dan layanan edukasi kesehatan
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4`}>
                  <info.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-700 font-semibold mb-1">
                  {info.content}
                </p>
                <p className="text-gray-600 text-sm">
                  {info.subContent}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Kirim <span className="text-accent">Pesan</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Tim medis kami siap menjawab pertanyaan Anda tentang anemia, nutrisi, 
                atau informasi kesehatan lainnya. Isi formulir di samping atau hubungi 
                kami melalui kontak yang tersedia.
              </p>

              <div className="space-y-6">
                <div className="bg-pink-50 rounded-2xl p-6 border-2 border-pink-200">
                  <h3 className="font-bold text-gray-900 mb-3">Informasi Penting</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Respons email dalam 1-2 hari kerja</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Konsultasi medis memerlukan jadwal appointment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Layanan edukasi gratis untuk semua kalangan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Data pribadi dijamin kerahasiaannya</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-accent to-accent-light rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-3">Darurat Medis?</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Untuk kondisi darurat medis, segera hubungi layanan gawat darurat 
                    terdekat atau rumah sakit rujukan Anda.
                  </p>
                  <p className="font-bold">☎ 119 (Ambulans)</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-6 flex items-start gap-4"
                >
                  <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-700 mb-1">Pesan Terkirim!</h4>
                    <p className="text-sm text-green-600">
                      Terima kasih telah menghubungi kami. Tim kami akan merespons dalam 1-2 hari kerja.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl border-2 border-pink-200">
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Nama Lengkap <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Dr. Ahmad Setiawan"
                      className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-accent focus:outline-none text-gray-700 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ahmad.setiawan@email.com"
                      className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-accent focus:outline-none text-gray-700 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Subjek <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Konsultasi Anemia Defisiensi Besi"
                      className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-accent focus:outline-none text-gray-700 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Pesan <span className="text-accent">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-accent focus:outline-none text-gray-700 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-accent/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Kirim Pesan
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section (Optional) */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-b from-white to-pink-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lokasi <span className="text-accent">Kantor</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Kunjungi kantor kami untuk konsultasi langsung (dengan appointment)
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-pink-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666666666667!2d106.8166!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzEuNyJTIDEwNsKwNDgnNTkuOCJF!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi AnemAware"
            ></iframe>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Contact;