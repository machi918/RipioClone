import {PressableProps} from 'react-native';

export type IconTypes = RightArrowType;

export interface BaseIconType extends PressableProps {
  name?: string;
  color?: string;
  size?: number;
}

export type RightArrowType = BaseIconType;
