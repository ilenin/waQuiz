import styled from 'styled-components/native';
import { Platform, Pressable } from 'react-native';

interface ButtonProps {
  disabled: boolean;
}

export const Button = styled(Pressable)<ButtonProps>`
  width: 100%;
  height: 60px;
  background-color: #ff6969;
  border-radius: 15px;
  margin-top: 8px;
  flex-direction: row;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoNextStd-Regular';
  font-size: 18px;
  text-transform: uppercase;
  /* margin-top: ${Platform.OS === 'ios' ? '8px' : '0px'};*/
  text-align: center;
`;
