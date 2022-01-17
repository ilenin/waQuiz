import React, {
  useCallback,
  useState,
  useRef,
  useEffect,
} from 'react';

import { useNavigation } from '@react-navigation/native';
import {  
  ActivityIndicator, 
  KeyboardAvoidingView, 
  Platform, 
  TextInput 
} from 'react-native';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import { showMessage } from 'react-native-flash-message';

import Input from '../../components/Inputs/TextInput';
import getValidationErrors from '../../utils/getValidationErrors';
import ButtonWithoutIcon from '../../components/Buttons/ButtonWithoutIcon';
import Modals from '../../components/Modals';

import api from '../../services/quiz';

import { useQuiz } from '../../hooks/quiz';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Wrapper,
  Header, 
  HeaderText, 
  ImageContainer, 
  ImageC,
  FooterButton, 
  ContetTextArea
} from './styles';

export interface Questions {
  numQuestions: number;
}

const Home: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { addQuiz } = useQuiz();

  const formRef = useRef<FormHandles>(null);
  const numQuestionsInputRef = useRef<TextInput>(null);
 
  const { navigate } = useNavigation();

  useEffect(() => {
    async function loadQuestions(): Promise<void> {
      const storagedQuestions = await AsyncStorage.getItem('@wa:questions');
      if (storagedQuestions) {
        showModal();
      }
    }

    loadQuestions();
  }, []);

  const showModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const hideModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleRegister = useCallback(async (data: Questions) => {
    try {

      setLoading(true);

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        numQuestions: Yup.number().required('Você precisa informar a quantidade de questões'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await registerQuiz(data.numQuestions); 
      
    } catch (err) {
      setLoading(false);
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        showMessage({
          style: { marginBottom: 60 },
          message: `${errors.numQuestions}`,
          type: 'danger',
          icon: { icon: 'auto', position: 'left' },
          floating: true
        });
        return;
      }
      showMessage({
        style: { marginBottom: 60 },
        message: `Ocorreu um erro inesperado, tente novamente. ${err}`,
        type: 'danger',
        icon: { icon: 'auto', position: 'left' },
        floating: true
      });
    }
  }, []);

  const handleSubmit = useCallback(() => {
    hideModal();
    // navigate('Results');
  },[],);

  const registerQuiz = async (numQuestions: number) => {
    const response = await api.get(`/api.php?amount=${numQuestions}`);
    const data = response.data;

    if (data.results) {
      const concatQuestions = data.results.map(({
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
      addQuiz(concatQuestions);
      setLoading(false);
      navigate('Quiz', concatQuestions );
    }
  };

  return (
    <Wrapper>
       {loading && (
        <ActivityIndicator
          size="large"
          color="#ff6969"
          style={{ marginTop: 25 }}
        />
      )}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Header />
        <HeaderText>Bem-vindo ao Quiz</HeaderText>
        <ImageContainer>
        <ImageC  
            source={{
              uri: 'https://image.freepik.com/free-vector/quiz-word-concept_23-2147852942.jpg',
            }}
        />
        </ImageContainer>
        <ContetTextArea 
          showsVerticalScrollIndicator={false} 
          keyboardShouldPersistTaps="handled"
        >
          <Form ref={formRef} onSubmit={handleRegister} style={{marginBottom: 15}}>
            <Input
              ref={numQuestionsInputRef}
              keyboardType="number-pad"
              name="numQuestions"
              placeholder="Digite a quantidade de questões"
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />
            <FooterButton>
              <ButtonWithoutIcon
                enabled
                onPress={() => {
                  formRef.current?.submitForm();
                }}
                containerStyle={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                borderStyle={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                textStyle={{
                  color: '#fff',
                  fontSize: 18,
                  textAlign: 'center',
                }}
                placeholder="START"
              />
              <ButtonWithoutIcon
                enabled
                onPress={() => {
                  numQuestionsInputRef.current?.focus();
                }}
                containerStyle={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#F5F6F8',
                }}
                borderStyle={{
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: '#ff6969',
                  width: '100%',
                  height: 60,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingRight: 15,
                }}
                textStyle={{
                  color: '#ff6969',
                  fontSize: 18,
                  textAlign: 'center',
                }}
                placeholder="Cancel"
              />
            </FooterButton>
          </Form>
        </ContetTextArea>
      </KeyboardAvoidingView>
      <Modals {...{ modalOpen, 
                    typeModal: "Q", 
                    titleModal: "Dúvida!!!", 
                    modalDescription:"Encontrei seus últimos resultados por aqui, deseja consultar?",
                    hideCancelModal: hideModal, 
                    handleSubmit
              }}/>
    </Wrapper>
  );
};
export default Home;
