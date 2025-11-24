import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addScreening } from '../store/slices/screeningSlice';
import DashboardLayout from '../components/templates/DashboardLayout';
import Card from '../components/atoms/Card';
import ScreeningForm from '../components/organisms/ScreeningForm';
import { SCREENING_STATUS } from '../utils/constants';

const ScreeningManual = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.screening);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (formData) => {
    try {
      await dispatch(addScreening({
        ...formData,
        status: SCREENING_STATUS.APPROVED,
        source: 'manual'
      })).unwrap();
      
      setSuccessMessage('Data skrining berhasil disimpan!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-accent mb-2">Skrining Manual</h1>
          <p className="text-gray-400">Input data skrining offline</p>
        </div>

        {successMessage && (
          <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg">
            {successMessage}
          </div>
        )}

        <Card>
          <h2 className="text-xl font-bold mb-6">Form Skrining</h2>
          <ScreeningForm onSubmit={handleSubmit} loading={loading} />
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ScreeningManual;