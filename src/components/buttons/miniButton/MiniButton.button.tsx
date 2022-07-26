import React, {FC} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../assets/theme/Colors';
import {MiniButtonType} from '../buttons.types';

export const MiniButton: FC<MiniButtonType> = props => {
  return (
    <TouchableOpacity onPress={() => console.log('ASDASDASDASD')}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.secondaryVariant,
          }}>
          <Icon name={props.icon} size={22} color={Colors.onSecondary} />
        </View>
        <Text style={{color: Colors.onSecondary}}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
