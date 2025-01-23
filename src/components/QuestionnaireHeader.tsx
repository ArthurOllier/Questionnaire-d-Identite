import React from 'react';

interface QuestionnaireHeaderProps {
  showResults: boolean;
  questionType: 'gender' | 'romantic' | 'ally';
  currentQuestion: number;
  totalQuestions: number;
}

export function QuestionnaireHeader({ showResults, questionType, currentQuestion, totalQuestions }: QuestionnaireHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
        {showResults ? "Vos Résultats" : 
         questionType === 'gender' ? "Questions sur le Genre" :
         questionType === 'romantic' ? "Questions sur l'Attirance Romantique" :
         "Évaluation du Soutien"}
      </h1>
      {!showResults && (
        <div className="text-white/60 text-sm">
          Question {currentQuestion + 1} / {totalQuestions}
        </div>
      )}
    </div>
  );
}