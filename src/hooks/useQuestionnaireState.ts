import { useState } from 'react';
import type { Result } from '../types';

export function useQuestionnaireState() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [genderResults, setGenderResults] = useState<Result[]>([]);
  const [romanticResults, setRomanticResults] = useState<Result[]>([]);
  const [allyScore, setAllyScore] = useState<number>(0);
  const [questionType, setQuestionType] = useState<'gender' | 'romantic' | 'ally'>('gender');
  const [shuffledOptions, setShuffledOptions] = useState<number[][]>([]);

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setGenderResults([]);
    setRomanticResults([]);
    setAllyScore(0);
    setQuestionType('gender');
    setShuffledOptions([]);
  };

  return {
    currentQuestion,
    setCurrentQuestion,
    answers,
    setAnswers,
    showResults,
    setShowResults,
    genderResults,
    setGenderResults,
    romanticResults,
    setRomanticResults,
    allyScore,
    setAllyScore,
    questionType,
    setQuestionType,
    shuffledOptions,
    setShuffledOptions,
    reset
  };
}