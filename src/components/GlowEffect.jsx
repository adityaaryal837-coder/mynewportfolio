import React, { useState, useEffect } from 'react';

const GlowEffect = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="mouse-glow fixed top-0 left-0 hidden lg:block"
      style={{ 
        left: mousePos.x, 
        top: mousePos.y,
        transition: 'transform 0.1s ease-out'
      }}
    />
  );
};

export default GlowEffect;
