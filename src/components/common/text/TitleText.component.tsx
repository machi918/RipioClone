import React, {FC} from 'react';
import {Text} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';

export const TitleText: FC<{text: string; marginTop?: number; paddingTop?: number}> = ({
  text,
  marginTop,
  paddingTop,
}) => {
  return (
    <Text
      style={{
        marginTop: marginTop ?? 20,
        paddingTop: paddingTop ?? 20,
        marginBottom: 20,
        fontWeight: 'bold',
        color: Colors.black,
        fontSize: 20,
      }}>
      {text}
    </Text>
  );
};
