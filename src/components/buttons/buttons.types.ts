import {PressableProps} from 'react-native';
import {Except} from 'type-fest';

export type ButtonTypes = FilledButtonType | OutFilledButtonType | PlusButtonType | MiniButtonType;

export interface ButtonBaseType extends PressableProps {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  onPress: () => void;
}

export type FilledButtonType = ButtonBaseType;
export type OutFilledButtonType = ButtonBaseType;
export type PlusButtonType = Except<ButtonBaseType, 'text'> & {
  filled?: boolean;
};
export type MiniButtonType = ButtonBaseType & {
  icon?: string;
};
