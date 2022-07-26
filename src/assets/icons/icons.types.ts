import {PressableProps} from 'react-native';
import {Except} from 'type-fest';

export type IconTypes = RightArrowType;

export interface BaseIconType extends PressableProps {
  name: string;
  color: string;
  size: number;
}

export type RightArrowType = BaseIconType;
