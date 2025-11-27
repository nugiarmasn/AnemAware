import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, BookOpen, Video, Users, Mail, Menu, X, Activity } from 'lucide-react';
import logo from '../../assets/images/logo-anemaware.png';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/anemia-profile', icon: Activity, label: 'Profil Anemia' },
    { path: '/education', icon: BookOpen, label: 'Edukasi' },
    { path: '/articles', icon: FileText, label: 'Artikel' },
    { path: '/videos', icon: Video, label: 'Video Edukasi' },
    { path: '/about', icon: Users, label: 'Tentang Kami' },
    { path: '/contact', icon: Mail, label: 'Kontak' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-pink-200 z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12"
              >
                <img 
                  src={logo}
                  alt="AnemAware Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <span className="text-2xl font-bold text-accent">AnemAware</span>
            </Link>

            <div className="hidden lg:flex items-center gap-4">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-accent to-accent-light text-white'
                          : 'text-gray-600 hover:text-accent hover:bg-pink-50'
                      }`}
                    >
                      <item.icon size={16} />
                      <span className="font-semibold text-sm">{item.label}</span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-accent"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed inset-0 bg-white z-40 lg:hidden pt-20"
        >
          <div className="flex flex-col gap-4 p-6">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-accent to-accent-light text-white'
                        : 'bg-pink-50 text-gray-600'
                    }`}
                  >
                    <item.icon size={24} />
                    <span className="text-lg font-semibold">{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;