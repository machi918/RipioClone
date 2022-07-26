import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, PayScreen, SelectPayScreen} from '../screens';
import {TabNavParams} from './TabNav';
import {Except} from 'type-fest';
import {SelectPayScreenInterface} from '../screens/home/SelectPay.screen';

export type HomeNav = Except<TabNavParams, 'HomeNav'> & {
  HomeScreen: undefined;
  PayScreen: SelectPayScreenInterface;
  SelectPayScreen: undefined;
};

const Stack = createNativeStackNavigator();

export const HomeNav: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PayScreen" component={PayScreen} options={{presentation: 'fullScreenModal'}} />
      <Stack.Screen
        name="SelectPayScreen"
        component={SelectPayScreen}
        options={{presentation: 'modal', animation: 'fade_from_bottom'}}
      />
    </Stack.Navigator>
  );
};
