import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPendingScreenings, updateScreeningStatus } from '../store/slices/screeningSlice';
import DashboardLayout from '../components/templates/DashboardLayout';
import Card from '../components/atoms/Card';
import Button from '../components/atoms/Button';
import Badge from '../components/atoms/Badge';
import Modal from '../components/molecules/Modal';
import { formatDate } from '../utils/helpers';
import { SCREENING_STATUS } from '../utils/constants';
import { CheckCircle, XCircle } from 'lucide-react';

const ScreeningOnline = () => {
  const dispatch = useDispatch();
  const { pendingScreenings } = useSelector((state) => state.screening);
  const [selectedScreening, setSelectedScreening] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchPendingScreenings());
  }, [dispatch]);

  const handleViewDetail = (screening) => {
    setSelectedScreening(screening);
    setIsModalOpen(true);
  };

  const handleApprove = async () => {
    if (selectedScreening) {
      await dispatch(updateScreeningStatus({
        id: selectedScreening.id,
        status: SCREENING_STATUS.APPROVED
      }));
      setIsModalOpen(false);
      dispatch(fetchPendingScreenings());
    }
  };

  const handleReject = async () => {
    if (selectedScreening) {
      await dispatch(updateScreeningStatus({
        id: selectedScreening.id,
        status: SCREENING_STATUS.REJECTED
      }));
      setIsModalOpen(false);
      dispatch(fetchPendingScreenings());
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-accent mb-2">Skrining Online</h1>
          <p className="text-gray-400">Konfirmasi request skrining dari aplikasi mobile</p>
        </div>

        <Card>
          <h2 className="text-xl font-bold mb-4">Request Pending ({pendingScreenings.length})</h2>
          
          {pendingScreenings.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              Tidak ada request pending
            </div>
          ) : (
            <div className="space-y-4">
              {pendingScreenings.map((screening) => (
                <div
                  key={screening.id}
                  className="bg-dark p-4 rounded-lg border border-gray-800 hover:border-accent transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{screening.name}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-400">
                        <span>Usia: {screening.age} tahun</span>
                        <span>Gender: {screening.gender}</span>
                        <span>Hb: {screening.hbLevel} g/dL</span>
                        <span>Risiko: <Badge variant="risk">{screening.riskLevel}</Badge></span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">{formatDate(screening.createdAt)}</p>
                    </div>
                    <Button onClick={() => handleViewDetail(screening)} variant="primary">
                      Detail
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Detail Skrining"
          footer={
            <>
              <Button variant="danger" onClick={handleReject} className="flex items-center gap-2">
                <XCircle size={20} />
                Tolak
              </Button>
              <Button variant="primary" onClick={handleApprove} className="flex items-center gap-2">
                <CheckCircle size={20} />
                Setujui
              </Button>
            </>
          }
        >
          {selectedScreening && (
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">Nama Lengkap</label>
                <p className="font-semibold text-lg">{selectedScreening.name}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400">Usia</label>
                  <p className="font-semibold">{selectedScreening.age} tahun</p>
                </div>
                <div>
                  <label className="text-sm text-gray-400">Jenis Kelamin</label>
                  <p className="font-semibold">{selectedScreening.gender}</p>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-400">Kadar Hemoglobin</label>
                <p className="font-semibold text-xl text-accent">{selectedScreening.hbLevel} g/dL</p>
              </div>
              <div>
                <label className="text-sm text-gray-400">Tingkat Risiko</label>
                <div className="mt-1">
                  <Badge variant="risk">{selectedScreening.riskLevel}</Badge>
                </div>
              </div>
              {selectedScreening.symptoms && (
                <div>
                  <label className="text-sm text-gray-400">Gejala</label>
                  <p className="mt-1">{selectedScreening.symptoms}</p>
                </div>
              )}
              <div>
                <label className="text-sm text-gray-400">Waktu Request</label>
                <p>{formatDate(selectedScreening.createdAt)}</p>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default ScreeningOnline;