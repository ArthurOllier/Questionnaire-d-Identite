import React from 'react';
import { QuestionnaireHeader } from './QuestionnaireHeader';
import { QuestionCard } from './QuestionCard';
import { ResultsSection } from './ResultsSection';
import { AllyScoreCard } from './AllyScoreCard';
import { ResultsFooter } from './ResultsFooter';
import { useQuestionnaireState } from '../hooks/useQuestionnaireState';
import { useQuestionnaireLogic } from '../hooks/useQuestionnaireLogic';

function GenderQuestionnaire() {
  const state = useQuestionnaireState();
  const { currentQuestions, calculateResults } = useQuestionnaireLogic(state);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...state.answers, answerIndex];
    state.setAnswers(newAnswers);

    if (state.currentQuestion < currentQuestions.length - 1) {
      state.setCurrentQuestion(state.currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const handleBack = () => {
    if (state.currentQuestion > 0) {
      state.setCurrentQuestion(state.currentQuestion - 1);
      state.setAnswers(state.answers.slice(0, -1));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#2a1b3d] to-[#1a1a2e] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10">
        <QuestionnaireHeader 
          showResults={state.showResults}
          questionType={state.questionType}
          currentQuestion={state.currentQuestion}
          totalQuestions={currentQuestions.length}
        />

        {!state.showResults ? (
          <QuestionCard
            question={currentQuestions[state.currentQuestion]}
            currentQuestion={state.currentQuestion}
            totalQuestions={currentQuestions.length}
            onAnswer={handleAnswer}
            onBack={handleBack}
            shuffledOptions={state.shuffledOptions[state.currentQuestion] || []}
          />
        ) : (
          <div className="space-y-8">
            <ResultsSection 
              title="Identité de Genre"
              results={state.genderResults}
            />
            <ResultsSection 
              title="Identité Romantique"
              results={state.romanticResults}
            />
            <AllyScoreCard score={state.allyScore} />
            <ResultsFooter onRestart={state.reset} />
          </div>
        )}
      </div>
    </div>
  );
}

export default GenderQuestionnaire;