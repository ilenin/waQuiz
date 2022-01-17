import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  background-color: #f5f6f8;
  margin-bottom: 8px;
  border-bottom-width: 2px;
  border-color: #676b76;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff6969;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #727c8e;
  font-size: 16px;
  font-family: 'RobotoNextStd-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
