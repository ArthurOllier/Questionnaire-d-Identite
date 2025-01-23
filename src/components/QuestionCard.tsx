import React from 'react';
import { ChevronLeft } from 'lucide-react';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (index: number) => void;
  onBack: () => void;
  shuffledOptions: number[];
}

export function QuestionCard({ 
  question, 
  currentQuestion, 
  totalQuestions, 
  onAnswer, 
  onBack,
  shuffledOptions 
}: QuestionCardProps) {
  if (!question || !question.options) {
    return (
      <div className="bg-white/10 rounded-xl p-6 mb-6">
        <p className="text-white text-lg">Chargement de la question...</p>
      </div>
    );
  }

  const optionIndices = shuffledOptions?.length > 0 
    ? shuffledOptions 
    : [...Array(question.options.length)].map((_, index) => index);

  return (
    <div className="space-y-6">
      <div className="bg-white/10 rounded-xl p-6 mb-6">
        <p className="text-white text-lg mb-2">{question.text}</p>
        <div className="w-full bg-white/10 rounded-full h-1 mb-4">
          <div 
            className="bg-gradient-to-r from-purple-400 to-pink-400 h-1 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid gap-4">
        {optionIndices.map((optionIndex) => (
          question.options[optionIndex] && (
            <button
              key={optionIndex}
              onClick={() => onAnswer(optionIndex)}
              className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 text-white/90 hover:text-white border border-white/5 hover:border-white/20"
            >
              {question.options[optionIndex].text}
            </button>
          )
        ))}
      </div>

      {currentQuestion > 0 && (
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white/60 hover:text-white/80 transition-colors mt-4"
        >
          <ChevronLeft size={16} />
          Question précédente
        </button>
      )}
    </div>
  );
}