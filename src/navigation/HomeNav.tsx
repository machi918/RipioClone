import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens';
import {TabNavParams} from './TabNav';
import {Except} from 'type-fest';

export type HomeNav = Except<TabNavParams, 'HomeNav'> & {
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator();

export const HomeNav: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
