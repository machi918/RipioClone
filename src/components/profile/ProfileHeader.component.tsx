import React, {FC} from 'react';
import {Pressable, View, Image, Text} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppSelector} from '../../redux/hooks';
import {selectUser} from '../../redux/userSlice';

export const ProfileHeader: FC = () => {
  const userState = useAppSelector(selectUser);

  return (
    <Pressable
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
        <Text style={{fontWeight: 'bold', color: Colors.black}}>{userState.name}</Text>
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
          <Text style={{fontWeight: 'bold', color: Colors.black}}>{userState.rpc} RPC</Text>
        </View>
      </View>
      <View style={{position: 'absolute', right: 20}}>
        <Icon name={'chevron-forward-outline'} size={22} color={Colors.black} />
      </View>
    </Pressable>
  );
};
