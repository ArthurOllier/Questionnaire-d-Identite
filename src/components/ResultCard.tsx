import React from 'react';

interface ResultCardProps {
  result: {
    name: string;
    flag: string;
    score: number;
    description: string;
  };
}

export function ResultCard({ result }: ResultCardProps) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <div className="flex items-center gap-4 mb-2">
        <img 
          src={result.flag} 
          alt={`Drapeau ${result.name}`}
          className="w-12 h-8 rounded object-cover"
        />
        <h3 className="text-lg font-medium text-white">{result.name}</h3>
        <div className="ml-auto text-white/60">
          {Math.round(result.score)}%
        </div>
      </div>
      <p className="text-white/80 text-sm">{result.description}</p>
    </div>
  );
}