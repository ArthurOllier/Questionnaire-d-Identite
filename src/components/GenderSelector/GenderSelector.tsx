import React, { useState } from 'react';
import { GenderTriangle } from './GenderTriangle';
import { calculateTriangleColor } from '../../utils/color';

interface GenderCoordinates {
  x: number;
  y: number;
}

export function GenderSelector() {
  const [selectedPoint, setSelectedPoint] = useState<GenderCoordinates | null>(null);
  const [currentColor, setCurrentColor] = useState<string | null>(null);

  const handleSelect = (coordinates: GenderCoordinates) => {
    setSelectedPoint(coordinates);
    const color = calculateTriangleColor(coordinates.x, coordinates.y);
    setCurrentColor(color);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Sélecteur d'Expression de Genre
        </h1>
        <div className="relative">
          <GenderTriangle size={400} onSelect={handleSelect} />
          {selectedPoint && currentColor && (
            <div 
              className="absolute w-6 h-6 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
              style={{ 
                left: `${selectedPoint.x * 400}px`,
                top: `${selectedPoint.y * (400 * Math.sqrt(3) / 2)}px`,
                backgroundColor: currentColor
              }}
            />
          )}
        </div>
        {currentColor && (
          <div className="mt-6 p-4 bg-white/5 rounded-lg">
            <div className="flex items-center justify-center gap-3">
              <span className="text-white">Expression sélectionnée</span>
              <div 
                className="w-6 h-6 rounded-full border-2 border-white/50"
                style={{ backgroundColor: currentColor }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}