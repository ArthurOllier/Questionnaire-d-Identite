import React from 'react';

interface BisexualTriangleProps {
  size: number;
  onSelect: (x: number, y: number) => void;
}

export function BisexualTriangle({ size, onSelect }: BisexualTriangleProps) {
  const height = size * Math.sqrt(3) / 2;
  
  const handleClick = (e: React.MouseEvent<SVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    onSelect(x, y);
  };

  return (
    <svg 
      width={size} 
      height={height} 
      onClick={handleClick}
      className="cursor-pointer"
    >
      <defs>
        <linearGradient id="biGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#D60270" /> {/* Rose */}
          <stop offset="50%" stopColor="#9B4F96" /> {/* Violet */}
          <stop offset="100%" stopColor="#0038A8" /> {/* Bleu */}
        </linearGradient>
      </defs>
      <path 
        d={`M${size/2},0 L${size},${height} L0,${height} Z`}
        fill="url(#biGradient)"
        className="transition-opacity hover:opacity-90"
      />
    </svg>
  );
}