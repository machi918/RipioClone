import React, {FC} from 'react';
import {Text, TextProps} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';

interface TitleTextInterface extends TextProps {
  text: string;
  textColor?: string;
  marginTop?: number;
  paddingTop?: number;
  centered?: boolean;
  marginBottom?: number;
}

export const TitleText: FC<TitleTextInterface> = ({
  text,
  textColor,
  marginTop,
  marginBottom,
  paddingTop,
  centered = false,
  ...props
}) => {
  return (
    <Text
      style={[
        {
          marginTop: marginTop ?? 20,
          paddingTop: paddingTop ?? 20,
          marginBottom: marginBottom ?? 20,
          fontWeight: 'bold',
          color: textColor ?? Colors.black,
          fontSize: 20,
          textAlign: centered ? 'center' : 'left',
        },
        props.style,
      ]}>
      {text}
    </Text>
  );
};
