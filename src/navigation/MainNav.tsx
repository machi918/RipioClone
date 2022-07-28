import React, {FC, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CoinScreen, PayScreen, UserInfoScreen} from '../screens';
import {TabNav} from './TabNav';
import {CoinScreenInterface} from '../screens/common/coinScreen/Coin.screen';
import SelectPayScreen, {SelectPayScreenInterface} from '../screens/home/SelectPay.screen';
import {getAllCoins, getNews} from '../service/https/coins.api';
import {setGeneralCoins, setNews} from '../redux/coinsSlice';
import {useAppDispatch} from '../redux/hooks';

export type MainNav = {
  TabNav: undefined;
  CoinScreen: CoinScreenInterface;
  PayScreen: SelectPayScreenInterface;
  SelectPayScreen: {uid: string};
  UserInfoScreen: undefined;
};

const Stack = createNativeStackNavigator<MainNav>();

export const MainNav: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const asd = async () => {
      try {
        const response = await getAllCoins();
        const response2 = await getNews();
        dispatch(setGeneralCoins(response));
        dispatch(setNews(response2));
      } catch (err) {}
    };

    asd();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="CoinScreen" component={CoinScreen} options={{title: 'Coin screen'}} />
      <Stack.Screen name="PayScreen" component={PayScreen} options={{presentation: 'fullScreenModal'}} />
      <Stack.Screen
        name="SelectPayScreen"
        component={SelectPayScreen}
        options={{presentation: 'modal', animation: 'fade_from_bottom'}}
      />
      <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} />
    </Stack.Navigator>
  );
};
