import React from 'react';

import LottieView from 'lottie-react-native';
import ButtonWithoutIcon from '../../components/Buttons/ButtonWithoutIcon';

import connectionAnimation from '../../assets/lotties/conection.json';

import { Wrapper, Container, Title, Description } from './styles';

const Unconnected: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <LottieView
          style={{
            marginTop: -40,
            marginBottom: 20,
            width: 300,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          resizeMode="contain"
          autoSize
          autoPlay
          source={connectionAnimation}
        />
        <Title>{`Algo de errado\naconteceu!`}</Title>
        <Description>
          {`Verifique sua conexão com a internet \ne tente novamente.`}
        </Description>
        <ButtonWithoutIcon
          enabled
          onPress={() => {}}
          containerStyle={{
            marginTop: 20,
            backgroundColor: '#ff6969',
            alignItems: 'center',
            justifyContent: 'center',
            width: 180,
            height: 50,
          }}
          textStyle={{
            color: '#fff',
            fontSize: 17,
          }}
          placeholder="TENTE NOVAMENTE"
        />
      </Container>
    </Wrapper>
  );
};
export default Unconnected;
