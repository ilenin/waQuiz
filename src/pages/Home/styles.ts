import styled from 'styled-components/native';
import { Platform, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Wrapper = styled.View`
  flex: 1;
  margin: 20px; 
`;

export const Header = styled.View`
  padding: ${Platform.OS === 'ios'
    ? `${getStatusBarHeight(true) / 2}px 0 50px`
    : `${getStatusBarHeight(true) + 12}px 0 50px`};
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-family: 'Roboto-Black';
  font-size: 16px;
  color: #000;
  text-align: center;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ImageC = styled.Image`
  height: 300px;
  width: 300px;
  border-radius: 20px;
`;

export const ContetTextArea = styled.View`
  justify-content: center;
  align-items: center;
`;

export const FooterButton = styled.View`
  align-items: center;
  justify-content: center;
`;