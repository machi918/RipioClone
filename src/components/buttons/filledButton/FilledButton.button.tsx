import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';
import {FilledButtonType} from '../buttons.types';

export const FilledButton: FC<FilledButtonType> = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: Colors.primary,
        width: 120,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: Colors.onPrimary, fontWeight: 'bold'}}>{props.text}</Text>
    </TouchableOpacity>
  );
};
