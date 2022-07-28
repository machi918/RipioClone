import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from '../screens';
import {Except} from 'type-fest';
import {TabNavParams} from './TabNav';

const Stack = createNativeStackNavigator();

export type ProfileNav = Except<TabNavParams, 'PerfilNav'> & {
  ProfileScreen: undefined;
};

export const ProfileNav: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
