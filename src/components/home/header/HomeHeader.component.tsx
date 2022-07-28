import React, {FC} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';
import {RightArrow} from '../../../assets/icons';

interface HomeHeaderInterface {
  onPress: () => void;
  rpc: number;
}

export const HomeHeader: FC<HomeHeaderInterface> = ({onPress, rpc}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
        borderRadius: 10,
      }}>
      <View
        style={{
          borderRadius: 30,
          borderWidth: 2,
          borderColor: Colors.primary,
          overflow: 'hidden',
          padding: 2,
          marginRight: 16,
        }}>
        <Image source={{uri: 'https://picsum.photos/200'}} style={{height: 40, width: 40, borderRadius: 20}} />
      </View>
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
      <View style={{position: 'absolute', right: 20}}>
        <RightArrow />
      </View>
    </TouchableOpacity>
  );
};
