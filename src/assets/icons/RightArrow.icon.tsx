import React, {FC} from 'react';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import {RightArrowType} from './icons.types';

export const RightArrow: FC<RightArrowType> = props => {
  return <Icon name={props.name} size={props.size} color={props.color} />;
};
