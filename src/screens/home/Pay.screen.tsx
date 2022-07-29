import React, {FC, useState} from 'react';
import {Text} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {BaseScreen} from '../index';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {HomeNav} from '../../navigation/HomeNav';
import {BackBar, NewView, TitleText} from '../../components';
import {NumberPad} from '../../components/home/numberPad/NumberPad.component';
import {MainButton} from '../../components/buttons';
import {useAppDispatch} from '../../redux/hooks';
import {updatePesos} from '../../redux/userSlice';
import {updateFirebasePesos} from '../../service/firebase/users.service';
import {i18nFirebaseError} from '../../service/firebase/firebase-languaje-error';
import Toast from 'react-native-toast-message';

const PayScreen: FC<NativeStackScreenProps<HomeNav, 'PayScreen'>> = ({route, navigation}) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const {comision, uid} = route.params;
  const dispatch = useAppDispatch();

  async function handleUpdate(userUID: string, pesosQuantity: number, comisionPesos: number) {
    const money = pesosQuantity - pesosQuantity * (comisionPesos / 100);
    try {
      setLoading(true);
      await updateFirebasePesos(userUID, money);
      dispatch(updatePesos(money));
      navigation.pop(2);
    } catch (error) {
      //@ts-ignore
      Toast.show({text1: i18nFirebaseError(error.code)});
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <BaseScreen backgroundColor={Colors.secondary}>
      <BackBar onPress={() => navigation.goBack()} />
      <NewView allWidth alignItemsCenter>
        <TitleText text="¿Cuánto querés cargar en tu wallet?" />
        <Text style={{fontSize: 40, fontWeight: 'bold', color: quantity > 1 ? Colors.onSecondary : Colors.black}}>
          $ {quantity.toFixed(2)}
        </Text>
        <Text>{`Comisión (${comision.toPrecision(3)}%): $ ${(comision / 100) * quantity}`}</Text>
      </NewView>
      <NumberPad
        onPress={number => setQuantity(quantity * 10 + number)}
        onDeletePress={() => setQuantity(Math.floor(quantity / 10))}
        onDotPress={() => setQuantity(quantity)}
      />
      <MainButton
        text="Continuar"
        onPress={() => handleUpdate(uid!, quantity, comision)}
        loading={loading}
        disabled={loading || quantity === 0}
      />
    </BaseScreen>
  );
};

export default PayScreen;
