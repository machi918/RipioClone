import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ForgetPasswordScreen, LaunchScreen, LoginScreen, SignUpScreen} from '../../screens';

export type AuthNav = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  LaunchScreen: undefined;
  ForgetPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthNav>();

export const AuthNav: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
    </Stack.Navigator>
  );
};
