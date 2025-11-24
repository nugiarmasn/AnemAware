import React from 'react';
import { getRiskBadgeClass } from '../../utils/helpers';

const Badge = ({ children, variant = 'default', className = '' }) => {
  if (variant === 'risk') {
    return (
      <span className={`${getRiskBadgeClass(children)} ${className}`}>
        {children}
      </span>
    );
  }

  const variantClass = {
    default: 'bg-gray-500/20 text-gray-400',
    success: 'bg-green-500/20 text-green-400',
    warning: 'bg-yellow-500/20 text-yellow-400',
    danger: 'bg-red-500/20 text-red-400',
    primary: 'bg-accent/20 text-accent'
  }[variant] || 'bg-gray-500/20 text-gray-400';

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${variantClass} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;