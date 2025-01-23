import React from 'react';

interface GenderTriangleProps {
  size: number;
  onSelect: (coordinates: { x: number; y: number }) => void;
}

export function GenderTriangle({ size, onSelect }: GenderTriangleProps) {
  const height = size * Math.sqrt(3) / 2;
  
  const handleClick = (e: React.MouseEvent<SVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / size;
    const y = (e.clientY - rect.top) / height;
    onSelect({ x, y });
  };

  return (
    <svg 
      width={size} 
      height={height} 
      onClick={handleClick}
      className="cursor-pointer"
    >
      <defs>
        <radialGradient id="blueCorner" cx="0%" cy="100%" r="100%">
          <stop offset="0%" stopColor="#0038A8" /> {/* Bleu bisexuel */}
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="pinkCorner" cx="100%" cy="100%" r="100%">
          <stop offset="0%" stopColor="#D60270" /> {/* Rose bisexuel */}
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="blackCorner" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#000000" /> {/* Noir */}
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      
      {/* Triangle de base avec fond violet */}
      <path 
        d={`M${size/2},0 L${size},${height} L0,${height} Z`}
        fill="#9B4F96" // Violet bisexuel comme couleur de base
      />
      
      {/* Superposition des coins avec dégradés radiaux */}
      <path 
        d={`M${size/2},0 L${size},${height} L0,${height} Z`}
        fill="url(#blueCorner)"
      />
      <path 
        d={`M${size/2},0 L${size},${height} L0,${height} Z`}
        fill="url(#pinkCorner)"
      />
      <path 
        d={`M${size/2},0 L${size},${height} L0,${height} Z`}
        fill="url(#blackCorner)"
      />
    </svg>
  );
}