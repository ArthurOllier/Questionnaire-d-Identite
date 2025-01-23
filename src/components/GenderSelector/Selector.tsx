import React from 'react';

interface SelectorProps {
  position: { x: number; y: number };
  color: string;
}

export function Selector({ position, color }: SelectorProps) {
  return (
    <div 
      className="absolute w-4 h-4 rounded-full border-2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
      style={{ 
        left: position.x, 
        top: position.y,
        borderColor: color,
        backgroundColor: 'transparent'
      }}
    />
  );
}