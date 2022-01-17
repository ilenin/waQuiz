import styled from 'styled-components/native';
import { Platform, Pressable, FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Questions } from './index';

interface QuestionProps {
  selected: boolean;
}

interface ResultProps {
  correct: boolean;
}

export const Wrapper = styled.View`
  flex: 1;
  margin: 20px; 
`;

export const Header = styled.View`
  padding: ${Platform.OS === 'ios'
    ? `${getStatusBarHeight(true) / 2}px 0 20px`
    : `${getStatusBarHeight(true) + 40}px 0 30px`};
  flex-direction: row;
  align-items: center;
`;

export const QuestionText = styled.Text`
  font-family: 'Roboto-Thin';
  font-size: 28px;
  color: #000;
  text-align: center;
`;

export const ContentOptions = styled.View`
  flex: 1;
`;

export const QuestionShape = styled(Pressable)<QuestionProps>`
  background-color: ${props => (props.selected ? '#ff6969' : '#000080')};
  padding: 12px;
  border-radius: 12px;
  margin-bottom: 5px;
`;

export const QuestionShapeText = styled.Text`
  font-family: 'Roboto-Normal';
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  text-align: center;
`;

export const QuestionsList = styled(
  FlatList as new () => FlatList<Questions>,
).attrs()`
  flex: 1;
`;

export const FooterButton = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ShapeResult = styled.View<ResultProps>`
  margin-top: 15px;
  background-color: ${props => (props.correct ? '#1E8809' : '#ff6969')};
  padding: 12px;
  border-radius: 12px;
  margin-bottom: 5px;
`;