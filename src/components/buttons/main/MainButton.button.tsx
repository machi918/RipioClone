import React, {FC} from 'react';
import {TouchableOpacity, Text, PressableProps} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';

interface MainButtonInterface extends PressableProps {
  text: string;
  onPress: () => void;
}

export const MainButton: FC<MainButtonInterface> = ({onPress, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        height: 40,
        width: '100%',
        borderRadius: 20,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}>
      <Text style={{color: Colors.onPrimary}}>{props.text}</Text>
    </TouchableOpacity>
  );
};
