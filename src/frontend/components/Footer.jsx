import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-anemaware.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-pink-50 border-t border-pink-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12">
                <img 
                  src={logo}
                  alt="AnemAware Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-accent">AnemAware</span>
            </div>
            <p className="text-gray-600 text-sm">
              Platform digital untuk deteksi dini anemia dengan teknologi modern.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Menu Cepat</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/education" className="text-gray-600 hover:text-accent transition-colors">Edukasi</Link></li>
              <li><Link to="/user-screening" className="text-gray-600 hover:text-accent transition-colors">Skrining</Link></li>
              <li><Link to="/user-profile" className="text-gray-600 hover:text-accent transition-colors">Profil</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <Mail size={16} className="text-accent" />
                <span>info@anemaware.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <Phone size={16} className="text-accent" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600 text-sm">
                <MapPin size={16} className="text-accent mt-1" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Ikuti Kami</h3>
            <div className="flex gap-3 mb-4">
              <a href="#" className="w-10 h-10 bg-pink-100 hover:bg-accent rounded-full flex items-center justify-center text-accent hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-100 hover:bg-accent rounded-full flex items-center justify-center text-accent hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-100 hover:bg-accent rounded-full flex items-center justify-center text-accent hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
            <Link to="/admin/login" className="text-sm text-gray-500 hover:text-accent transition-colors">
              Admin Login →
            </Link>
          </div>
        </div>

        <div className="border-t border-pink-200 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 <span className="font-bold text-accent">AnemAware</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;