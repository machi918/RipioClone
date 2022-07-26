import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CoinScreen, HomeScreen} from '../screens';
import {TabNav} from './TabNav';
import {Except} from 'type-fest';
import {CoinScreenInterface} from '../screens/common/coinScreen/Coin.screen';

export type MainNav = {
  TabNav: undefined;
  CoinScreen: CoinScreenInterface;
};

const Stack = createNativeStackNavigator<MainNav>();

export const MainNav: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="CoinScreen" component={CoinScreen} options={{title: 'Coin screen'}} />
    </Stack.Navigator>
  );
};
