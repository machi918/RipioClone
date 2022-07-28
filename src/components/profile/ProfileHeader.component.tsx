import React, {FC} from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {RightArrow} from '../../assets/icons';

interface ProfileHeaderInterface {
  onPress: () => void;
  name: string;
  rpc: number;
}

export const ProfileHeader: FC<ProfileHeaderInterface> = ({onPress, name, rpc}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 80,
        backgroundColor: Colors.white,
        marginBottom: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
      }}>
      <View
        style={{
          borderRadius: 30,
          borderWidth: 2,
          borderColor: Colors.primary,
          overflow: 'hidden',
          padding: 2,
          marginRight: 20,
        }}>
        <Image source={{uri: 'https://picsum.photos/200'}} style={{height: 50, width: 50, borderRadius: 25}} />
      </View>
      <View>
        <Text style={{fontWeight: 'bold', color: Colors.black}}>{name}</Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: '#d1c006',
              marginRight: 10,
              borderWidth: 2,
              borderColor: '#e8da3f',
            }}
          />
          <Text style={{fontWeight: 'bold', color: Colors.black}}>{rpc} RPC</Text>
        </View>
      </View>
      <View style={{position: 'absolute', right: 20}}>
        <RightArrow />
      </View>
    </TouchableOpacity>
  );
};
