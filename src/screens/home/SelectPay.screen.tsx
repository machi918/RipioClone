import React, {FC} from 'react';
import {View} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {BaseScreen} from '../index';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {HomeNav} from '../../navigation/HomeNav';
import {BackBar, PaymentItem, TitleText} from '../../components';
import {PaymentItemInterface} from '../../components/home/PaymentItem.component';
import {Except} from 'type-fest';

export type SelectPayScreenInterface = Except<PaymentItemInterface, 'onPress'>;

const SelectPayScreen: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeNav>>();

  return (
    <BaseScreen backgroundColor={Colors.secondary}>
      <BackBar onPress={() => navigation.goBack()} />
      <View style={{width: '100%', alignItems: 'center'}}>
        <TitleText text="¿Cómo querés hacerlo?" />

        <PaymentItem
          type="Transferencia bancaria"
          comision={0.0}
          onPress={() => navigation.navigate('PayScreen', {comision: 0.0, type: 'Transferencia bancaria'})}
        />
        <PaymentItem
          type="Mercado Pago"
          comision={3.0}
          onPress={() => navigation.navigate('PayScreen', {comision: 3.0, type: 'Mercado Pago'})}
        />
        <PaymentItem
          type="Efectivo"
          comision={2.5}
          onPress={() => navigation.navigate('PayScreen', {comision: 2.5, type: 'Efectivo'})}
        />
      </View>
    </BaseScreen>
  );
};

export default SelectPayScreen;
