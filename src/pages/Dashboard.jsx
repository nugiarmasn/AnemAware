import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchScreenings } from '../store/slices/screeningSlice';
import DashboardLayout from '../components/templates/DashboardLayout';
import StatCard from '../components/molecules/StatCard';
import Card from '../components/atoms/Card';
import ScreeningTable from '../components/organisms/ScreeningTable';
import { Activity, AlertCircle, CheckCircle, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { stats, screenings } = useSelector((state) => state.screening);

  useEffect(() => {
    dispatch(fetchScreenings());
  }, [dispatch]);

  const recentScreenings = screenings.slice(0, 5);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-accent mb-2">Dashboard</h1>
          <p className="text-gray-400">Ringkasan data skrining anemia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Skrining"
            value={stats.total}
            icon={Activity}
            color="accent"
          />
          <StatCard
            title="Anemia Ringan"
            value={stats.ringan}
            icon={CheckCircle}
            color="success"
          />
          <StatCard
            title="Anemia Sedang"
            value={stats.sedang}
            icon={AlertCircle}
            color="warning"
          />
          <StatCard
            title="Anemia Berat"
            value={stats.berat}
            icon={TrendingUp}
            color="danger"
          />
        </div>

        <Card>
          <h2 className="text-xl font-bold text-accent mb-4">Skrining Terbaru</h2>
          <ScreeningTable data={recentScreenings} />
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;