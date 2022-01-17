import styled from 'styled-components/native';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

interface ButtonProps {
  enabled: boolean;
}

export const Button = styled(Pressable)<ButtonProps>`
  height: 35px;
  border-radius: 15px;
  margin-top: 8px;
  flex-direction: row;
  opacity: ${props => (props.enabled ? 1 : 0.3)};
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
`;

export const Icons = styled(Icon)``;
