import React, { useMemo } from 'react';
import { Modal } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import LottieView from 'lottie-react-native';

import infoQuestion from '../../assets/lotties/question.json';
import infoOkay from '../../assets/lotties/okay.json';

import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ButtonView, 
  Button,
  ButtonText,
} from './styles';

interface ModalProps {
  modalOpen: boolean;
  typeModal: string;
  titleModal: string;
  modalDescription: string;
  hideCancelModal: () => void;
  handleSubmit?: (question?: boolean) => void;
}

const Modals: React.FC<ModalProps> = ({
  modalOpen,
  typeModal,
  titleModal,
  modalDescription,
  hideCancelModal, 
  handleSubmit, 
}) => {


  const footerButtons = useMemo(() => {
    return (typeModal === 'E' || typeModal === 'O') ? (
      <>
      <ButtonView>
        <Button onPress={ hideCancelModal }>
          <Feather name="check" size={18} color="#111" />
          <ButtonText>Continuar</ButtonText>
        </Button>
        </ButtonView>
      </>
    ) : (
     <>
      <ButtonView>
        <Button onPress={() => handleSubmit!(false)}>
          <Feather name="x" size={18} color="#111" />
          <ButtonText>Não</ButtonText>
        </Button>

        <Button onPress={() => handleSubmit!(true)}>
          <Feather name="check" size={18} color="#111" />
          <ButtonText>Sim</ButtonText>
        </Button>
        </ButtonView>
     </>
    )
  }, [typeModal]);

  return (
    <Modal visible={modalOpen} animationType="slide" transparent>
      <ModalContainer>
        <ModalContent>
           {typeModal === 'Q' && (
            <LottieView
            style={{ width: 200, marginBottom: 20, alignSelf: 'center' }}
            resizeMode="contain"
            autoSize
            autoPlay
            source={infoQuestion}
            />
          )}
          {typeModal === 'O' && (
            <LottieView
            style={{ width: 200, marginBottom: 20, alignSelf: 'center' }}
            resizeMode="contain"
            autoSize
            autoPlay
            source={infoOkay}
            />
          )}
          <ModalTitle>{titleModal}</ModalTitle>
          <ModalDescription>{modalDescription}</ModalDescription>
          {footerButtons}
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default Modals;
