import React, {FC} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {IonicIcon} from '../../../assets/icons';
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
          <IonicIcon name={props.icon} size={22} color={Colors.onSecondary} />
        </View>
        <Text style={{color: Colors.onSecondary}}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
