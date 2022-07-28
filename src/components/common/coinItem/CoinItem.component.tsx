import React, {FC} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {RightArrow} from '../../../assets/icons';
import {Colors} from '../../../assets/theme/Colors';

interface CoinItemInterface {
  id: string;
  currency: string;
  quantity: number;
  price: number;
  image: string;
  onPress: () => void;
  showConverted?: boolean;
  showRightArrow?: boolean;
}

export const CoinItem: FC<CoinItemInterface> = ({onPress, showConverted = true, showRightArrow = true, ...props}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: '100%',
        flexDirection: 'row',
        backgroundColor: Colors.white,
        marginVertical: 5,
        alignItems: 'center',
        height: 50,
        borderRadius: 8,
      }}>
      <View style={{height: 30, width: 30, borderRadius: 15, marginHorizontal: 16, overflow: 'hidden'}}>
        <Image source={{uri: props.image}} style={{height: 30, width: 30}} />
      </View>
      <View>
        <Text style={{fontWeight: 'bold', color: Colors.black}}>
          {props.quantity} {props.currency}
        </Text>
        {showConverted ? <Text style={{fontSize: 12}}>~ ${props.quantity * props.price}</Text> : null}
      </View>
      {showRightArrow ? (
        <View style={{position: 'absolute', right: 20}}>
          <RightArrow size={14} />
        </View>
      ) : null}
    </Pressable>
  );
};
