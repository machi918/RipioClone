import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useEffect, useState} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';
import {BackBar, CoinChart} from '../../../components';
import {MiniButton} from '../../../components/buttons/miniButton/MiniButton.button';
import {MainNav} from '../../../navigation/MainNav';
import {CoinHistoricalPriceInterface, getCoinHistoricalPrice} from '../../../service/https/coins.api';
import {BaseScreen} from '../../index';

export interface CoinScreenInterface {
  id: string;
  currency: string;
  quantity: number;
  price: number;
  image: string;
}

const CoinScreen: FC<NativeStackScreenProps<MainNav, 'CoinScreen'>> = ({route, navigation}) => {
  const {currency, quantity, price, image, id} = route.params;

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<CoinHistoricalPriceInterface[]>([]);

  useEffect(() => {
    console.log('Rendered');
    const coinData = async () => {
      setLoading(true);
      try {
        const response = await getCoinHistoricalPrice(id);
        setLoading(false);
        setData(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    coinData();
  }, [id]);

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
      <View style={{marginBottom: 40}}>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
          <MiniButton icon="arrow-back-outline" text="Comprar" onPress={() => console.log()} />
          <MiniButton icon="arrow-up-outline" text="Vender" onPress={() => console.log()} />
          <MiniButton icon="arrow-down-outline" text="Recibir" onPress={() => console.log()} />
          <MiniButton icon="arrow-forward-outline" text="Enviar" onPress={() => console.log()} />
          <MiniButton icon="arrow-down-outline" text="Swap" onPress={() => console.log()} />
        </View>
      </View>
      <View style={{width: '100%', height: 250}}>
        {loading || data.length === 0 ? (
          <ActivityIndicator size={'large'} color={'#ffa502'} />
        ) : (
          <CoinChart data={data} />
        )}
      </View>
    </BaseScreen>
  );
};

export default CoinScreen;
