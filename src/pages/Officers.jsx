import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOfficers, addOfficer, updateOfficer, deleteOfficer } from '../store/slices/officerSlice';
import DashboardLayout from '../components/templates/DashboardLayout';
import Card from '../components/atoms/Card';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import Modal from '../components/molecules/Modal';
import { UserPlus, Edit2, Trash2 } from 'lucide-react';

const Officers = () => {
  const dispatch = useDispatch();
  const { officers } = useSelector((state) => state.officer);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentOfficer, setCurrentOfficer] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: ''
  });

  useEffect(() => {
    dispatch(fetchOfficers());
  }, [dispatch]);

  const handleOpenModal = (officer = null) => {
    if (officer) {
      setIsEdit(true);
      setCurrentOfficer(officer);
      setFormData({
        name: officer.name,
        email: officer.email,
        phone: officer.phone,
        position: officer.position
      });
    } else {
      setIsEdit(false);
      setCurrentOfficer(null);
      setFormData({ name: '', email: '', phone: '', position: '' });
    }
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit && currentOfficer) {
      await dispatch(updateOfficer({ id: currentOfficer.id, data: formData }));
    } else {
      await dispatch(addOfficer(formData));
    }
    setIsModalOpen(false);
  };

  const handleDelete = async (id) => {
    if (confirm('Yakin ingin menghapus petugas ini?')) {
      await dispatch(deleteOfficer(id));
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-accent mb-2">Manajemen Petugas</h1>
            <p className="text-gray-400">Kelola data petugas kesehatan</p>
          </div>
          <Button onClick={() => handleOpenModal()} className="flex items-center gap-2">
            <UserPlus size={20} />
            Tambah Petugas
          </Button>
        </div>

        <Card>
          <h2 className="text-xl font-bold mb-4">Daftar Petugas ({officers.length})</h2>
          
          {officers.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              Belum ada data petugas
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold">Nama</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold">Email</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold">Telepon</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold">Jabatan</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {officers.map((officer) => (
                    <tr key={officer.id} className="border-b border-gray-800 hover:bg-dark transition-colors">
                      <td className="py-4 px-4">{officer.name}</td>
                      <td className="py-4 px-4">{officer.email}</td>
                      <td className="py-4 px-4">{officer.phone}</td>
                      <td className="py-4 px-4">{officer.position}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleOpenModal(officer)}
                            className="text-accent hover:text-accent-light transition-colors p-2"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(officer.id)}
                            className="text-danger hover:text-red-400 transition-colors p-2"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={isEdit ? 'Edit Petugas' : 'Tambah Petugas'}
          footer={
            <>
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Batal
              </Button>
              <Button onClick={handleSubmit}>
                {isEdit ? 'Update' : 'Simpan'}
              </Button>
            </>
          }
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Nama Lengkap"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Masukkan nama lengkap"
            />
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="email@example.com"
            />
            <Input
              label="Nomor Telepon"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="08xxxxxxxxxx"
            />
            <Input
              label="Jabatan"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              placeholder="Perawat / Dokter / Bidan"
            />
          </form>
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Officers;