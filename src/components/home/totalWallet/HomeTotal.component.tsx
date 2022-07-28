import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {FilledButton, OutfilledButton, PlusButton} from '../../buttons';
import {Colors} from '../../../assets/theme/Colors';
import {useNavigation} from '@react-navigation/native';
import {HomeNav} from '../../../navigation/HomeNav';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RightArrow} from '../../../assets/icons';

export const HomeTotal: FC<{pesos: number; uid: string}> = ({pesos, uid}) => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeNav>>();

  return (
    <View style={{width: '100%', marginBottom: 20}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 12}}>Equivalente total en ARS</Text>
        <RightArrow size={14} />
      </View>
      <Text style={{fontWeight: 'bold', color: Colors.black, fontSize: 30, marginBottom: 20}}>~ ${pesos}</Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <FilledButton text="Cargar" onPress={() => navigation.navigate('SelectPayScreen', {uid})} />
        <OutfilledButton text="Comprar" onPress={() => console.log('Navigate to Comprar')} />
        <PlusButton onPress={() => console.log('Navigate to +')} />
      </View>
    </View>
  );
};
