import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';
import {PlusButtonType} from '../buttons.types';
import {IonicIcon} from '../../../assets/icons';

export const PlusButton: FC<PlusButtonType> = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: props.filled ? Colors.primary : Colors.secondaryVariant,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <IonicIcon name={'add-outline'} size={30} color={Colors.onSecondary} />
    </TouchableOpacity>
  );
};
