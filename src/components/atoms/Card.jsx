import React from 'react';

const Card = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`card-primary ${onClick ? 'cursor-pointer hover:border-accent transition-colors' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;