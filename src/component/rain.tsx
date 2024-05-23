import React from 'react';

const RainEffect: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {Array.from({ length: 100 }).map((_, index) => (
        <i key={index} className="raindrop" />
      ))}
    </div>
  );
};

export default RainEffect;
