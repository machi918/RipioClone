import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../assets/theme/Colors';

interface BackBarInterface {
  onPress: () => void;
}

export const BackBar: FC<BackBarInterface> = ({onPress}) => {
  return (
    <View style={{width: '100%', marginTop: 20}}>
      <TouchableOpacity style={{height: 40, width: 40}} onPress={onPress}>
        <Icon name={'chevron-back-outline'} size={22} color={Colors.black} />
      </TouchableOpacity>
    </View>
  );
};
