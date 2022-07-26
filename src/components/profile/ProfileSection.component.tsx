import React, {FC} from 'react';
import {View, Text} from 'react-native';

interface ProfileSectionInterface {
  title: string;
  children: React.ReactNode;
}

export const ProfileSection: FC<ProfileSectionInterface> = props => {
  return (
    <View style={{width: '100%', marginBottom: 20}}>
      <Text style={{marginBottom: 10}}>{props.title}</Text>
      <View>{props.children}</View>
    </View>
  );
};
