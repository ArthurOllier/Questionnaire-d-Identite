import React from 'react';
import { ResultCard } from './ResultCard';

interface ResultsSectionProps {
  title: string;
  results: Array<{
    name: string;
    flag: string;
    score: number;
    description: string;
  }>;
}

export function ResultsSection({ title, results }: ResultsSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
      {results.map((result, index) => (
        <ResultCard key={index} result={result} />
      ))}
    </div>
  );
}