import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';
import {OutFilledButtonType} from '../buttons.types';

export const OutfilledButton: FC<OutFilledButtonType> = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: Colors.secondaryVariant,
        width: 120,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: Colors.onSecondary}}>{props.text}</Text>
    </TouchableOpacity>
  );
};
