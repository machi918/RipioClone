import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';

interface SingleNumberInterface {
  onPress: (number: number) => void;
  number: number;
  isNumber?: boolean;
  onPressVariant?: () => void;
  text?: string;
  disabled?: boolean;
}

export const SingleNumber: FC<SingleNumberInterface> = ({
  onPress,
  number,
  isNumber = true,
  onPressVariant,
  text,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => (isNumber ? onPress(number) : onPressVariant!())}
      style={{width: 70, height: 70, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 32, fontWeight: '400', color: isNumber ? Colors.black : Colors.errorRed}}>
        {isNumber ? number : text}
      </Text>
    </TouchableOpacity>
  );
};
