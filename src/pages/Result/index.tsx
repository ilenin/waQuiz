import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface RouteParms {
  numQuestions: Number;
}

interface Questions {
  category: string; 
  type: string; 
  difficulty: string; 
  question: string; 
  correct_answer: string; 
  incorrect_answers: string[];
}

import api from '../../services/quiz';
import { showMessage } from 'react-native-flash-message';

const Quiz: React.FC = () => {

  const route = useRoute();

  const routeParms = route.params as RouteParms;
 
  //const { addToCart } = useCart();

  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [ques, setQues] = useState(0);
  const [answers, setAnswers] = useState<[]>([]);
  
  const getQuiz = async () => {
    setQuestions([]);
    const response = await api.get(`/api.php?amount=${routeParms.numQuestions}`);
    const data = response?.data;
    if (data !== undefined || data !== 'undefined' ) {
      if (data && data?.length && data.results[0]) {
        setQuestions(data.results[0]);
        setLoading(false);
      }
    } else {
      showMessage({
        style: { marginBottom: 60 },
        message: `Ocorreu um erro ao realizar o download do quiz, tente novamente mais tarde.`,
        type: 'danger',
        icon: { icon: 'auto', position: 'left' },
        floating: true
      });
    }
  };

  const saveQuiz = useMemo(() => { 
    console.log(questions);

    const answerss = questions.map(({
      category,
      type,
      difficulty,
      question,
      correct_answer,
      incorrect_answers
    }) => {
      return {
        category,
        type,
        difficulty,
        question,
        answers: incorrect_answers.concat(correct_answer),
        correct_answer,
        incorrect_answers
      };
    },
    );
    console.log(answerss);
    setAnswers(answerss);
  }, [questions]);

  useEffect(() => {
    getQuiz();
  }, []);

  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>Q. </Text>
          </View>
          <View style={styles.options}>
           {answers &&
              answers.map(({ answers }) => (
                <TouchableOpacity style={styles.optionButtom}>
                  <Text style={styles.option}>{answers}</Text>
                 </TouchableOpacity>
            ))}
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#1A759F',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  optionButtom: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#34A0A4',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: '100%',
  },
});