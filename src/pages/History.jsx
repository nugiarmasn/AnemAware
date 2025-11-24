import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchScreenings } from '../store/slices/screeningSlice';
import DashboardLayout from '../components/templates/DashboardLayout';
import Card from '../components/atoms/Card';
import ScreeningTable from '../components/organisms/ScreeningTable';
import Select from '../components/atoms/Select';
import Input from '../components/atoms/Input';
import { RISK_LEVELS } from '../utils/constants';

const History = () => {
  const dispatch = useDispatch();
  const { screenings } = useSelector((state) => state.screening);
  const [filteredData, setFilteredData] = useState([]);
  const [filterRisk, setFilterRisk] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    dispatch(fetchScreenings());
  }, [dispatch]);

  useEffect(() => {
    let filtered = [...screenings];

    if (filterRisk) {
      filtered = filtered.filter(s => s.riskLevel === filterRisk);
    }

    if (searchName) {
      filtered = filtered.filter(s => 
        s.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }, [screenings, filterRisk, searchName]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-accent mb-2">Riwayat Skrining</h1>
          <p className="text-gray-400">Data lengkap skrining anemia</p>
        </div>

        <Card>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <Input
              placeholder="Cari nama..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="flex-1"
            />
            <Select
              value={filterRisk}
              onChange={(e) => setFilterRisk(e.target.value)}
              options={[
                { value: '', label: 'Semua Risiko' },
                { value: RISK_LEVELS.RINGAN, label: 'Ringan' },
                { value: RISK_LEVELS.SEDANG, label: 'Sedang' },
                { value: RISK_LEVELS.BERAT, label: 'Berat' }
              ]}
              className="md:w-48"
            />
          </div>

          <div className="mb-4 text-sm text-gray-400">
            Menampilkan {filteredData.length} dari {screenings.length} data
          </div>

          <ScreeningTable data={filteredData} />
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default History;