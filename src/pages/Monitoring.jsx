import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase';
import { setLiveScreenings } from '../store/slices/screeningSlice';
import DashboardLayout from '../components/templates/DashboardLayout';
import Card from '../components/atoms/Card';
import ScreeningTable from '../components/organisms/ScreeningTable';
import { COLLECTIONS } from '../utils/constants';
import { Activity } from 'lucide-react';

const Monitoring = () => {
  const dispatch = useDispatch();
  const { screenings } = useSelector((state) => state.screening);

  useEffect(() => {
    const q = query(collection(db, COLLECTIONS.SCREENINGS), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      dispatch(setLiveScreenings(data));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Activity className="text-accent animate-pulse" size={32} />
          <div>
            <h1 className="text-3xl font-bold text-accent">Live Monitoring</h1>
            <p className="text-gray-400">Data real-time skrining anemia</p>
          </div>
        </div>

        <Card>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Data Skrining Real-Time</h2>
            <div className="flex items-center gap-2 text-green-400">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Live</span>
            </div>
          </div>
          <ScreeningTable data={screenings} />
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Monitoring;