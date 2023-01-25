import React, {FC, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CoinScreen, PayScreen, UserInfoScreen} from '../screens';
import {TabNav} from './TabNav';
import {CoinScreenInterface} from '../screens/common/coinScreen/Coin.screen';
import SelectPayScreen, {SelectPayScreenInterface} from '../screens/home/SelectPay.screen';
import Toast from 'react-native-toast-message';
import {useCryptoInfo} from '../hooks/useCryptoInfo';

export type MainNav = {
  TabNav: undefined;
  CoinScreen: CoinScreenInterface;
  PayScreen: SelectPayScreenInterface;
  SelectPayScreen: {uid: string};
  UserInfoScreen: undefined;
};

const Stack = createNativeStackNavigator<MainNav>();

export const MainNav: FC = () => {
  const {error} = useCryptoInfo();

  useEffect(() => {
    if (error) {
      Toast.show({text1: error.message});
    }
  }, [error]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="CoinScreen" component={CoinScreen} options={{title: 'Coin screen'}} />
      <Stack.Screen name="PayScreen" component={PayScreen} options={{presentation: 'fullScreenModal'}} />
      <Stack.Screen
        name="SelectPayScreen"
        component={SelectPayScreen}
        options={{presentation: 'modal', animation: 'fade_from_bottom'}}
      />
      <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} />
    </Stack.Navigator>
  );
};
