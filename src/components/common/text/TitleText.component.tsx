import React, {FC} from 'react';
import {Text} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';

export const TitleText: FC<{text: string}> = ({text}) => {
  return (
    <Text
      style={{
        marginTop: 20,
        paddingTop: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        color: Colors.black,
        fontSize: 20,
      }}>
      {text}
    </Text>
  );
};
