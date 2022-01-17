import React from 'react';
import { View } from 'react-native';
import { Button, ButtonText } from './styles';

interface ButtonProps {
  placeholder: string;
  containerStyle?: {};
  textStyle?: {};
  borderStyle?: {};
  onPress?: () => void;
  enabled?: boolean;
}

const ButtonWithoutIcon: React.FC<ButtonProps> = ({
  placeholder,
  containerStyle = {},
  textStyle = {},
  borderStyle = {},
  enabled,
  ...rest
}) => (
  <Button style={containerStyle} disabled={!enabled} {...rest}>
    <View style={borderStyle}>
      <ButtonText style={textStyle}>{placeholder}</ButtonText>
    </View>
  </Button>
);

export default ButtonWithoutIcon;
