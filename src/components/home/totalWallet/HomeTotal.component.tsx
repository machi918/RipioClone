import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {FilledButton, OutfilledButton, PlusButton} from '../../buttons';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../assets/theme/Colors';
import {useNavigation} from '@react-navigation/native';
import {HomeNav} from '../../../navigation/HomeNav';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppSelector} from '../../../redux/hooks';
import {selectUser} from '../../../redux/userSlice';

export const HomeTotal: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeNav>>();
  const userState = useAppSelector(selectUser);

  return (
    <View style={{width: '100%', marginBottom: 20}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 12}}>Equivalente total en ARS</Text>
        <Icon name={'chevron-forward-outline'} size={14} color={Colors.black} />
      </View>
      <Text style={{fontWeight: 'bold', color: Colors.black, fontSize: 30, marginBottom: 20}}>
        ~ ${userState.pesos}
      </Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <FilledButton text="Cargar" onPress={() => navigation.navigate('SelectPayScreen')} />
        <OutfilledButton text="Comprar" onPress={() => console.log('Navigate to Comprar')} />
        <PlusButton onPress={() => console.log('Navigate to +')} />
      </View>
    </View>
  );
};
