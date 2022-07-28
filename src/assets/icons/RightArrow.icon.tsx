import React, {FC} from 'react';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../theme/Colors';
import {RightArrowType} from './icons.types';

export const RightArrow: FC<RightArrowType> = props => {
  return <Icon name={'chevron-forward-outline'} size={props.size ?? 22} color={props.color ?? Colors.black} />;
};
