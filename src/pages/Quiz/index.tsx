import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {
  Wrapper,
  Header, 
  QuestionText, 
  ContentOptions, 
  QuestionShape, 
  QuestionShapeText,
  QuestionsList,
  FooterButton, 
  ShapeResult,
} from './styles';

export interface Questions {
  category: string; 
  type: string; 
  difficulty: string; 
  answers: string[];
  question: string; 
  correct_answer: string; 
  incorrect_answers: string[];
  id?: string; 
}

import api from '../../services/quiz';
import { showMessage } from 'react-native-flash-message';

const Quiz: React.FC = () => {

  const route = useRoute();

  const routeParms = route.params as Questions[];
 
  //const { addToCart } = useCart();

  const [questions, setQuestions] = useState<Questions[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState('');


  const loadQuestions = useCallback(async () => {
    setQuestions(routeParms);
  }, []);

  const increment = useMemo(() => {
    setQuestionNumber(questionNumber+1);
    return questions[questionNumber];
  }, [],
  );

  const handleSelectQuestion = useCallback((question: string) => {
    setSelectedQuestion(question);
    increment;
  }, []);

  
  useEffect(() => {
    loadQuestions();
  }, []);

  return (
    <Wrapper>
      {questions && (
      <Header>
        <QuestionText>{questionNumber} - {questions[0]?.question}</QuestionText>
      </Header>
      )}
      <ContentOptions>
        <QuestionsList
          data={questions[questionNumber]?.answers}
          scroolEventThrottle={16}
          showsVerticalScrollIndicator={false}
          keyExtractor={key => key}
          renderItem={({ item }) => {
            return <View/>
          }}       
        />
      </ContentOptions>
      <ShapeResult>
        <QuestionShapeText>
          Parabéns. Resposta certa!!
        </QuestionShapeText>
      </ShapeResult>
    </Wrapper>
  );
};

export default Quiz;


