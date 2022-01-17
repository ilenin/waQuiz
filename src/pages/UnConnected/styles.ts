import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  padding: 36px 5px 10px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Thin';
  font-size: 30px;
  color: #515c6f;
  text-align: center;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-family: 'Roboto-Regular';
  margin-top: 18px;
  font-size: 17px;
  color: #727c8e;
  text-align: center;
  line-height: 25px;
`;
