import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

interface Questions {
  category: string; 
  type: string; 
  difficulty: string; 
  question: string; 
  correct_answer: string; 
  incorrect_answers: string[];
  id?: string; 
}

interface QuizContext {
  questions: Questions[];
  addQuiz(item: Questions[]): void;
  removeAllQuiz(): void;
  hasAQuiz(): void; 
}

const QuizContext = createContext<QuizContext | null>(null);

const QuizProvider: React.FC = ({ children }) => {
  const [questions, setQuestions] = useState<Questions[]>([]);

  useEffect(() => {
    async function loadQuestions(): Promise<void> {
      const storagedQuestions = await AsyncStorage.getItem('@wa:questions');

      if (storagedQuestions) {
        setQuestions([...JSON.parse(storagedQuestions)]);
      }
    }

    loadQuestions();
  }, []);

 const hasAQuiz = useCallback(async () => {
    const storagedQuestions = await AsyncStorage.getItem('@wa:questions');
    return storagedQuestions;
  },
  [questions],
);

  const addQuiz = useCallback(async question => {
      setQuestions([...questions, { ...question, id: uuid.v4() }]);
      await AsyncStorage.setItem('@wa:questions', JSON.stringify(questions));
    },
    [questions],
  );

  const removeAllQuiz = useCallback(async () => {
    questions.splice(0);
    await AsyncStorage.removeItem('@wa:questions');
  }, [questions]);

  const value = React.useMemo(
    () => ({
      hasAQuiz,
      questions,
      addQuiz, 
      removeAllQuiz
    }),
    [
      hasAQuiz,
      questions,
      addQuiz,
      removeAllQuiz
    ],
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

function useQuiz(): QuizContext {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error(`useQuiz must be used within a QuizProvider`);
  }

  return context;
}

export { QuizProvider, useQuiz };
