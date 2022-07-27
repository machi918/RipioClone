import React, {FC, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '../../screens';
import {AuthNav} from '../auth/AuthNav';
import {MainNav} from '../MainNav';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export type AppNav = {
  MainNav: undefined;
  AuthNav: undefined;
};

const Stack = createNativeStackNavigator<AppNav>();

export const AppNav: FC = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [fetchedUser, setFetchedUser] = useState<boolean>(false);

  // Handle user state changes
  function onAuthStateChanged(userAuth: any) {
    const userData: FirebaseAuthTypes.User = userAuth;
    if (userAuth) {
      setFetchedUser(true);
    }
    setUser(userAuth);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    // We haven't finished checking for the token yetnpm install --save @react-native-firebase/app
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!user ? (
        <Stack.Screen name="AuthNav" component={AuthNav} />
      ) : (
        <Stack.Screen name="MainNav" component={MainNav} />
      )}
    </Stack.Navigator>
  );
};
