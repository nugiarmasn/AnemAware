import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../../services/firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { User, Mail, LogOut, Activity, Calendar, CheckCircle } from 'lucide-react';

const UserProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({ total: 0, pending: 0, approved: 0 });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchUserStats(currentUser.uid);
      } else {
        navigate('/admin/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const fetchUserStats = async (userId) => {
    try {
      const q = query(collection(db, 'screenings'), where('userId', '==', userId));
      const snapshot = await getDocs(q);
      const screenings = snapshot.docs.map(doc => doc.data());

      setStats({
        total: screenings.length,
        pending: screenings.filter(s => s.status === 'pending').length,
        approved: screenings.filter(s => s.status === 'approved').length
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogout = async () => {
    if (confirm('Yakin ingin keluar?')) {
      await signOut(auth);
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-6">
              <User size={48} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-2">{user?.displayName || 'User'}</h1>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Mail size={16} />
              <span>{user?.email}</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card text-center"
            >
              <Activity size={32} className="text-accent mx-auto mb-3" />
              <p className="text-4xl font-bold text-accent mb-1">{stats.total}</p>
              <p className="text-gray-400 text-sm">Total Skrining</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card text-center"
            >
              <Calendar size={32} className="text-yellow-400 mx-auto mb-3" />
              <p className="text-4xl font-bold text-yellow-400 mb-1">{stats.pending}</p>
              <p className="text-gray-400 text-sm">Menunggu</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card text-center"
            >
              <CheckCircle size={32} className="text-green-400 mx-auto mb-3" />
              <p className="text-4xl font-bold text-green-400 mb-1">{stats.approved}</p>
              <p className="text-gray-400 text-sm">Disetujui</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogout}
              className="card w-full flex items-center justify-between group hover:border-danger/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-danger/20 rounded-xl flex items-center justify-center">
                  <LogOut size={24} className="text-danger" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">Keluar</h3>
                  <p className="text-sm text-gray-400">Logout dari akun Anda</p>
                </div>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfile;