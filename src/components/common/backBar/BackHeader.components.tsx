import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {IonicIcon} from '../../../assets/icons';
import {Colors} from '../../../assets/theme/Colors';

interface BackBarInterface {
  onPress: () => void;
  color?: string;
}

export const BackBar: FC<BackBarInterface> = ({onPress, color}) => {
  return (
    <View style={{width: '100%', marginTop: 20}}>
      <TouchableOpacity style={{height: 40, width: 40}} onPress={onPress}>
        <IonicIcon name={'chevron-back-outline'} size={22} color={color ?? Colors.black} />
      </TouchableOpacity>
    </View>
  );
};
