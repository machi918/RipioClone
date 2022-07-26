import React, {FC} from 'react';
import {View, Text, Pressable} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';

interface ProfileSectionItemInterface {
  text: string;
  textColor?: string;
  icon: string;
}

export const ProfileSectionItem: FC<ProfileSectionItemInterface> = props => {
  return (
    <Pressable
      style={{
        width: '100%',
        height: 50,
        paddingHorizontal: 14,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: Colors.secondaryVariant,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 20,
        }}>
        <Icon name={props.icon} size={18} color={Colors.onSecondary} />
      </View>
      <Text style={{color: props.textColor ?? Colors.black}}>{props.text}</Text>
    </Pressable>
  );
};
