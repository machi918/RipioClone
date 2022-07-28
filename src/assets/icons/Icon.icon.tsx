import React, {FC} from 'react';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../theme/Colors';
import {BaseIconType} from './icons.types';

export const IonicIcon: FC<BaseIconType> = props => {
  return <Icon name={props.name} size={props.size ?? 22} color={props.color ?? Colors.black} />;
};
