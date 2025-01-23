import React from 'react';

interface TriangleProps {
  size: number;
  position: { x: number; y: number };
}

export function Triangle({ size, position }: TriangleProps) {
  const height = size * Math.sqrt(3) / 2;
  
  return (
    <div 
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{ 
        left: position.x, 
        top: position.y,
        width: size,
        height: height
      }}
    >
      <svg width={size} height={height}>
        <defs>
          <linearGradient id="saturationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="rgb(255,0,0)" />
          </linearGradient>
          <linearGradient id="brightnessGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
        </defs>
        <path 
          d={`M${size/2},0 L${size},${height} L0,${height} Z`}
          fill="url(#saturationGradient)"
        />
        <path 
          d={`M${size/2},0 L${size},${height} L0,${height} Z`}
          fill="url(#brightnessGradient)"
        />
      </svg>
    </div>
  );
}