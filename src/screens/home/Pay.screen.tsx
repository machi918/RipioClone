import React, {FC, useState} from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {BaseScreen} from '../index';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {HomeNav} from '../../navigation/HomeNav';
import {BackBar, TitleText} from '../../components';
import {NumberPad} from '../../components/home/numberPad/NumberPad.component';
import {MainButton} from '../../components/buttons';
import {useAppDispatch} from '../../redux/hooks';
import {updatePesos} from '../../redux/userSlice';

const PayScreen: FC<NativeStackScreenProps<HomeNav, 'PayScreen'>> = ({route, navigation}) => {
  const [quantity, setQuantity] = useState<number>(0);
  const {comision} = route.params;
  const dispatch = useAppDispatch();

  function handleOnPress() {
    dispatch(updatePesos(quantity));
    navigation.pop(2);
  }

  return (
    <BaseScreen backgroundColor={Colors.secondary}>
      <BackBar onPress={() => navigation.goBack()} />
      <View style={{width: '100%', alignItems: 'center'}}>
        <TitleText text="¿Cuánto querés cargar en tu wallet?" />
        <Text style={{fontSize: 40, fontWeight: 'bold', color: quantity > 1 ? Colors.onSecondary : Colors.black}}>
          $ {quantity.toFixed(2)}
        </Text>
        <Text>{`Comisión (${comision.toPrecision(3)}%): $ ${(comision / 100) * quantity}`}</Text>
      </View>
      <NumberPad
        onPress={number => setQuantity(quantity * 10 + number)}
        onDeletePress={() => setQuantity(Math.floor(quantity / 10))}
        onDotPress={() => setQuantity(quantity)}
      />
      <MainButton text="CONTINUAR" onPress={() => handleOnPress()} />
    </BaseScreen>
  );
};

export default PayScreen;
