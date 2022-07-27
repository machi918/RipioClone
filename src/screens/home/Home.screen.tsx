import React, {FC, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {CoinItem, HomeHeader, HomeTotal} from '../../components';
import {BaseScreen} from '../index';
import {RightArrow} from '../../assets/icons';
import {getAllCoins, getNews} from '../../service/https/coins.api';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {selectCoins, setGeneralCoins, setNews} from '../../redux/coinsSlice';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {HomeNav} from '../../navigation/HomeNav';
import {NewsList} from '../../components/home/newsList/NewsList.component';
import {selectUser} from '../../redux/userSlice';

const HomeScreen: FC = () => {
  const coinsState = useAppSelector(selectCoins);
  const userState = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<HomeNav>>();

  useEffect(() => {
    const asd = async () => {
      // console.log((await getAllCoins()).results);
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
    <BaseScreen backgroundColor={Colors.secondary}>
      <ScrollView style={{marginTop: 20}} showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <HomeTotal />
        <View>
          <Text style={{marginBottom: 10, fontWeight: 'bold', color: Colors.black}}>Noticias de Coindesk</Text>
          <NewsList data={coinsState.news.slice(0, 10)} />
        </View>
        <CoinItem
          showConverted={false}
          id={'ars'}
          currency={'ARS'}
          quantity={userState.pesos}
          price={1}
          image={'https://assets.coingecko.com/coins/images/23054/large/nuARS_Logo.png?164314904'}
          onPress={() => navigation.navigate('SelectPayScreen')}
        />
        {coinsState.generalCoins.slice(1, 5).map(item => (
          <CoinItem
            key={item.id}
            id={item.id}
            currency={item.symbol.toUpperCase()}
            quantity={item.has}
            price={item.current_price}
            image={item.image}
            onPress={() =>
              navigation.navigate('CoinScreen', {
                id: item.id,
                currency: item.symbol.toUpperCase(),
                image: item.image,
                price: item.current_price,
                quantity: item.has,
              })
            }
          />
        ))}
        <TouchableOpacity
          style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 20}}
          onPress={() => navigation.navigate('WalletNav')}>
          <Text style={{color: Colors.onSecondary, fontWeight: 'bold', fontSize: 12}}>Ver todos mis balances</Text>
          <RightArrow name="chevron-forward-outline" size={14} color={Colors.onSecondary} />
        </TouchableOpacity>
        <View>
          <Text style={{marginBottom: 10, fontWeight: 'bold', color: Colors.black}}>
            Convertite en experto en criptomonedas
          </Text>
          <NewsList data={coinsState.news.slice(10, 20)} />
        </View>
      </ScrollView>
    </BaseScreen>
  );
};

export default HomeScreen;
