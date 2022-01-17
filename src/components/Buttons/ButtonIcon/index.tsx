import React from 'react';
import { View } from 'react-native';

import { Button, ButtonText, Icons } from './styles';

interface ButtonProps {
  placeholder: string;
  containerStyle?: {};
  textStyle?: {};
  borderStyle?: {};
  enabled?: boolean;
  onPress?: () => void;
  name: string;
  size: number;
  color: string;
}

const ButtonIcon: React.FC<ButtonProps> = ({
  placeholder,
  containerStyle = {},
  textStyle = {},
  borderStyle = {},
  name,
  size,
  color,
  enabled,
  ...rest
}) => (
  <Button enabled={enabled || true} style={containerStyle} {...rest}>
    <View style={borderStyle}>
      <ButtonText style={textStyle}>{placeholder}</ButtonText>
      <Icons name={name} size={size} color={color} />
    </View>
  </Button>
);

export default ButtonIcon;
