import React, {FC, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '../../screens';
import {AuthNav} from '../auth/AuthNav';
import {MainNav} from '../MainNav';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useAppDispatch} from '../../redux/hooks';
import {resetUserData, setUserData} from '../../redux/userSlice';
import {getUser, UserData} from '../../service/firebase/users.service';

export type AppNav = {
  MainNav: undefined;
  AuthNav: undefined;
};

const Stack = createNativeStackNavigator<AppNav>();

export const AppNav: FC = () => {
  // Set an initializing state while Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
  const dispatch = useAppDispatch();

  // Handle user state changes
  const onAuthStateChanged = async (userAuth: FirebaseAuthTypes.User | null) => {
    if (userAuth) {
      const userSVInfo: UserData = await getUser(userAuth.uid);
      if (userSVInfo) {
        dispatch(
          setUserData({
            userData: {...userSVInfo},
            uid: userAuth.uid,
          }),
        );
      }
    } else {
      dispatch(resetUserData());
    }
    setUser(userAuth);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!user ? (
        <Stack.Screen name="AuthNav" component={AuthNav} options={{animation: 'fade'}} />
      ) : (
        <Stack.Screen name="MainNav" component={MainNav} />
      )}
    </Stack.Navigator>
  );
};
