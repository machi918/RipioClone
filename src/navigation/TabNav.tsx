import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeNav} from './HomeNav';
import {WalletNav} from './WalletNav';
import {ProductsNav} from './ProductsNav';
import {CoinScreen, MovementsScreen} from '../screens';
import {ProfileNav} from './ProfileNav';
import {MyTabBar} from '../components';
import {MainNav} from './MainNav';

export type TabNavParams = MainNav & {
  HomeNav: undefined;
  WalletNav: undefined;
  ProductsNav: undefined;
  MovementsScreen: undefined;
  PerfilNav: undefined;
  // CoinScreen: undefined;
};

const Tab = createBottomTabNavigator<TabNavParams>();

export const TabNav: FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="HomeNav" component={HomeNav} options={{title: 'Home'}} />
      <Tab.Screen name="WalletNav" component={WalletNav} options={{title: 'Mi billetera'}} />
      <Tab.Screen name="ProductsNav" component={ProductsNav} options={{title: 'Productos'}} />
      <Tab.Screen name="MovementsScreen" component={MovementsScreen} options={{title: 'Movimientos'}} />
      <Tab.Screen name="PerfilNav" component={ProfileNav} options={{title: 'Perfil'}} />
    </Tab.Navigator>
  );
};
