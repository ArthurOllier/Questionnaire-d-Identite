import { useCallback, useEffect } from 'react';
import { questions, romanticQuestions, allyQuestions } from '../data/questions';
import { genderIdentities, romanticIdentities } from '../data/identities';
import type { Result, Question } from '../types';

function shuffleArray(array: number[]): number[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function useQuestionnaireLogic({
  questionType,
  answers,
  setGenderResults,
  setRomanticResults,
  setAllyScore,
  setShowResults,
  setQuestionType,
  setCurrentQuestion,
  setAnswers,
  setShuffledOptions
}: any) {
  const getCurrentQuestions = (): Question[] => {
    switch (questionType) {
      case 'gender':
        return questions;
      case 'romantic':
        return romanticQuestions;
      case 'ally':
        return allyQuestions;
      default:
        return questions;
    }
  };

  const currentQuestions = getCurrentQuestions();

  useEffect(() => {
    if (currentQuestions && currentQuestions.length > 0) {
      const newShuffledOptions = currentQuestions.map(question => 
        shuffleArray([...Array(question.options.length)].map((_, i) => i))
      );
      setShuffledOptions(newShuffledOptions);
    }
  }, [questionType, currentQuestions]);

  const calculateResults = useCallback(() => {
    if (questionType === 'ally') {
      let totalScore = 0;
      let maxPossibleScore = 0;

      answers.forEach((answerIndex, questionIndex) => {
        const question = allyQuestions[questionIndex];
        if (question?.options?.[answerIndex]?.weight?.ally !== undefined) {
          totalScore += question.options[answerIndex].weight.ally;
          maxPossibleScore += 1;
        }
      });
      
      const percentageScore = maxPossibleScore > 0 
        ? (totalScore / maxPossibleScore) * 100 
        : 0;
      
      setAllyScore(percentageScore);
      setShowResults(true);
      return;
    }

    const scores: { [key: string]: number } = {};
    const currentIdentities = questionType === 'gender' ? genderIdentities : romanticIdentities;
    
    Object.keys(currentIdentities).forEach(identity => {
      scores[identity] = 0;
    });

    answers.forEach((answerIndex, questionIndex) => {
      const question = currentQuestions[questionIndex];
      if (question?.options?.[answerIndex]?.weight) {
        const weights = question.options[answerIndex].weight;
        Object.entries(weights).forEach(([identity, weight]) => {
          scores[identity] = (scores[identity] || 0) + weight;
        });
      }
    });

    const maxScore = Math.max(...Object.values(scores));
    const normalizedResults = Object.entries(scores)
      .map(([identity, score]) => ({
        ...currentIdentities[identity],
        score: maxScore > 0 ? (score / maxScore) * 100 : 0
      }))
      .sort((a, b) => b.score - a.score);

    // Si une identité a un score de 100%, ne garder que celle-là
    const perfectMatch = normalizedResults.find(result => result.score === 100);
    const results = perfectMatch 
      ? [perfectMatch]
      : normalizedResults.filter(result => result.score > 30);

    if (questionType === 'gender') {
      setGenderResults(results);
      setQuestionType('romantic');
      setCurrentQuestion(0);
      setAnswers([]);
    } else if (questionType === 'romantic') {
      setRomanticResults(results);
      setQuestionType('ally');
      setCurrentQuestion(0);
      setAnswers([]);
    }
  }, [questionType, answers, currentQuestions, setGenderResults, setRomanticResults, setAllyScore, setShowResults, setQuestionType, setCurrentQuestion, setAnswers]);

  return {
    currentQuestions,
    calculateResults
  };
}