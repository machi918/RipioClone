import React, {FC} from 'react';
import {Pressable, Text, PressableProps} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';

interface PressableTextInterface extends PressableProps {
  text: string;
  textColor?: string;
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
}

export const PressableText: FC<PressableTextInterface> = ({
  text,
  textColor,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  ...props
}) => {
  return (
    <Pressable
      {...props}
      style={{
        marginBottom: marginBottom ?? 0,
        marginTop: marginTop ?? 0,
        marginLeft: marginLeft ?? 0,
        marginRight: marginRight ?? 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: textColor ?? Colors.primary, fontWeight: 'bold', fontSize: 14}}>{text}</Text>
    </Pressable>
  );
};
