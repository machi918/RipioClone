import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const ProfileNav: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
