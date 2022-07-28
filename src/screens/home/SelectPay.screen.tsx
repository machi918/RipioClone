import React, {FC} from 'react';
import {Colors} from '../../assets/theme/Colors';
import {BaseScreen} from '../index';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {HomeNav} from '../../navigation/HomeNav';
import {BackBar, NewView, PaymentItem, TitleText} from '../../components';
import {PaymentItemInterface} from '../../components/home/PaymentItem.component';
import {Except} from 'type-fest';

export type SelectPayScreenInterface = Except<PaymentItemInterface, 'onPress' | 'icon'>;

const SelectPayScreen: FC<NativeStackScreenProps<HomeNav, 'SelectPayScreen'>> = ({route, navigation}) => {
  const {uid} = route.params;

  return (
    <BaseScreen backgroundColor={Colors.secondary}>
      <BackBar onPress={() => navigation.goBack()} />
      <NewView allWidth alignItemsCenter>
        <TitleText text="¿Cómo querés hacerlo?" />

        <PaymentItem
          type="Transferencia bancaria"
          icon="file-tray-full-outline"
          comision={0.0}
          onPress={() =>
            navigation.navigate('PayScreen', {
              comision: 0.0,
              type: 'Transferencia bancaria',
              uid,
            })
          }
        />
        <PaymentItem
          type="Mercado Pago"
          icon="albums-outline"
          comision={3.0}
          onPress={() => navigation.navigate('PayScreen', {comision: 3.0, type: 'Mercado Pago', uid})}
        />
        <PaymentItem
          type="Efectivo"
          icon="cash-outline"
          comision={2.5}
          onPress={() => navigation.navigate('PayScreen', {comision: 2.5, type: 'Efectivo', uid})}
        />
      </NewView>
    </BaseScreen>
  );
};

export default SelectPayScreen;
