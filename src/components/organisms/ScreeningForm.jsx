import React, { useState } from 'react';
import Input from '../atoms/Input';
import Select from '../atoms/Select';
import Button from '../atoms/Button';

const ScreeningForm = ({ onSubmit, loading = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    hbLevel: '',
    symptoms: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      age: parseInt(formData.age),
      hbLevel: parseFloat(formData.hbLevel)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Nama Lengkap"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Masukkan nama lengkap"
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Usia"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
          placeholder="Masukkan usia"
        />

        <Select
          label="Jenis Kelamin"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          options={[
            { value: 'Pria', label: 'Pria' },
            { value: 'Wanita', label: 'Wanita' }
          ]}
        />
      </div>

      <Input
        label="Kadar Hemoglobin (g/dL)"
        name="hbLevel"
        type="number"
        step="0.1"
        value={formData.hbLevel}
        onChange={handleChange}
        required
        placeholder="Contoh: 12.5"
      />

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-300">
          Gejala (Opsional)
        </label>
        <textarea
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          placeholder="Masukkan gejala yang dialami"
          className="input-primary min-h-[100px] resize-none"
        />
      </div>

      <Button type="submit" fullWidth disabled={loading}>
        {loading ? 'Menyimpan...' : 'Simpan Skrining'}
      </Button>
    </form>
  );
};

export default ScreeningForm;