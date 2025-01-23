import React from 'react';
import { calculatePointOnCircle } from '../../utils/geometry';

interface ColorWheelProps {
  radius: number;
  strokeWidth: number;
  onPositionSelect: (x: number, y: number) => void;
}

export function ColorWheel({ radius, strokeWidth, onPositionSelect }: ColorWheelProps) {
  const size = (radius + strokeWidth) * 2;
  const center = size / 2;
  
  const handleClick = (e: React.MouseEvent<SVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - center;
    const y = e.clientY - rect.top - center;
    onPositionSelect(x, y);
  };

  return (
    <svg 
      width={size} 
      height={size} 
      onClick={handleClick}
      className="cursor-pointer"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(0, 100%, 50%)" />
          <stop offset="16.67%" stopColor="hsl(60, 100%, 50%)" />
          <stop offset="33.33%" stopColor="hsl(120, 100%, 50%)" />
          <stop offset="50%" stopColor="hsl(180, 100%, 50%)" />
          <stop offset="66.67%" stopColor="hsl(240, 100%, 50%)" />
          <stop offset="83.33%" stopColor="hsl(300, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(360, 100%, 50%)" />
        </linearGradient>
      </defs>
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="url(#gradient)"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}