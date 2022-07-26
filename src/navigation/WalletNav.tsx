import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CoinScreen, MyWalletScreen} from '../screens';
import {TabNavParams} from './TabNav';
import {Except} from 'type-fest';

export type WalletNav = Except<TabNavParams, 'WalletNav' | 'HomeNav'> & {
  WalletScreen: undefined;
};

const Stack = createNativeStackNavigator<WalletNav>();

export const WalletNav: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="WalletScreen" component={MyWalletScreen} />
    </Stack.Navigator>
  );
};
