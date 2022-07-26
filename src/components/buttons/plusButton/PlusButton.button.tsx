import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';
import {PlusButtonType} from '../buttons.types';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';

export const PlusButton: FC<PlusButtonType> = props => {
  return (
    <Pressable
      style={{
        backgroundColor: props.filled ? Colors.primary : Colors.secondaryVariant,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon name={'add-outline'} size={30} color={Colors.onSecondary} />
    </Pressable>
  );
};
