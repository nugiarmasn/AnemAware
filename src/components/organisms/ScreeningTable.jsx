import React from 'react';
import Badge from '../atoms/Badge';
import { formatDateShort } from '../../utils/helpers';

const ScreeningTable = ({ data = [], onActionClick }) => {
  if (data.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        Tidak ada data skrining
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="text-left py-4 px-4 text-gray-400 font-semibold">Nama</th>
            <th className="text-left py-4 px-4 text-gray-400 font-semibold">Usia</th>
            <th className="text-left py-4 px-4 text-gray-400 font-semibold">Gender</th>
            <th className="text-left py-4 px-4 text-gray-400 font-semibold">Hb Level</th>
            <th className="text-left py-4 px-4 text-gray-400 font-semibold">Tingkat Risiko</th>
            <th className="text-left py-4 px-4 text-gray-400 font-semibold">Tanggal</th>
            {onActionClick && (
              <th className="text-left py-4 px-4 text-gray-400 font-semibold">Aksi</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b border-gray-800 hover:bg-dark transition-colors">
              <td className="py-4 px-4">{item.name}</td>
              <td className="py-4 px-4">{item.age}</td>
              <td className="py-4 px-4">{item.gender}</td>
              <td className="py-4 px-4">{item.hbLevel} g/dL</td>
              <td className="py-4 px-4">
                <Badge variant="risk">{item.riskLevel}</Badge>
              </td>
              <td className="py-4 px-4 text-gray-400">{formatDateShort(item.createdAt)}</td>
              {onActionClick && (
                <td className="py-4 px-4">
                  <button
                    onClick={() => onActionClick(item)}
                    className="text-accent hover:text-accent-light transition-colors"
                  >
                    Detail
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScreeningTable;