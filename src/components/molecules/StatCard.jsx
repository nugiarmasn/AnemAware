import React from 'react';
import Card from '../atoms/Card';

const StatCard = ({ title, value, icon: Icon, color = 'accent' }) => {
  const colorClass = {
    accent: 'text-accent',
    success: 'text-green-400',
    warning: 'text-yellow-400',
    danger: 'text-red-400'
  }[color];

  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm mb-1">{title}</p>
          <p className={`text-3xl font-bold ${colorClass}`}>{value}</p>
        </div>
        {Icon && (
          <div className={`${colorClass} opacity-20`}>
            <Icon size={64} />
          </div>
        )}
      </div>
    </Card>
  );
};

export default StatCard;