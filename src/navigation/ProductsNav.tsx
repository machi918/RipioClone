import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyWalletScreen, ProductsScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const ProductsNav: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
    </Stack.Navigator>
  );
};
