import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';
import {BackBar} from '../../../components';
import {MiniButton} from '../../../components/buttons/miniButton/MiniButton.button';
import {MainNav} from '../../../navigation/MainNav';
import {BaseScreen} from '../../index';

export interface CoinScreenInterface {
  id: string;
  currency: string;
  quantity: number;
  price: number;
  image: string;
}

const CoinScreen: FC<NativeStackScreenProps<MainNav, 'CoinScreen'>> = ({route, navigation}) => {
  const {id, currency, quantity, price, image} = route.params;

  return (
    <BaseScreen backgroundColor={Colors.white}>
      <BackBar onPress={() => navigation.goBack()} />

      <View style={{marginBottom: 20, marginTop: 10}}>
        <Text>Mi saldo</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', height: 40}}>
          <View style={{height: 30, width: 30, borderRadius: 15, marginHorizontal: 16, overflow: 'hidden'}}>
            <Image source={{uri: image}} style={{height: 30, width: 30}} />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'flex-end', height: 40}}>
            <Text style={{fontWeight: 'bold', fontSize: 30, lineHeight: 30, color: Colors.black}}>{quantity}</Text>
            <Text> </Text>
            <Text style={{fontWeight: '400', fontSize: 24}}>{currency}</Text>
          </View>
        </View>
        <Text>~ ${price * quantity}</Text>
      </View>
      <View>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
          <MiniButton icon="arrow-back-outline" text="Comprar" onPress={() => console.log()} />
          <MiniButton icon="arrow-up-outline" text="Vender" onPress={() => console.log()} />
          <MiniButton icon="arrow-down-outline" text="Recibir" onPress={() => console.log()} />
          <MiniButton icon="arrow-forward-outline" text="Enviar" onPress={() => console.log()} />
          <MiniButton icon="arrow-down-outline" text="Swap" onPress={() => console.log()} />
        </View>
      </View>
    </BaseScreen>
  );
};

export default CoinScreen;
