import styled from 'styled-components/native';

import { Pressable } from 'react-native';

export const ModalContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  padding: 30px 20px;
  max-width: 320px;
  background: #fff;
  border-radius: 10px;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  color: #111;
  letter-spacing: 2.8px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;

export const ModalDescription = styled.Text`
  text-align: center;
  font-size: 16px;
  margin-top: 15px;
  line-height: 24px;
  color: #444;
`;

export const ButtonView = styled.View`
  justify-content: space-between; 
`;

export const Button = styled(Pressable)`
  margin-top: 25px;
  align-self: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: #111;
  letter-spacing: 2.8px;
  text-transform: uppercase;
  font-weight: bold;
  margin-left: 6px;
`;
