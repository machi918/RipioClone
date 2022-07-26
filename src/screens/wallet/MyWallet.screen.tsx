import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {CoinItem, TitleText} from '../../components';
import {WalletNav} from '../../navigation/WalletNav';
import {selectCoins} from '../../redux/coinsSlice';
import {useAppSelector} from '../../redux/hooks';
import {selectUser} from '../../redux/userSlice';
import {BaseScreen} from '../index';

const MyWalletScreen: FC = () => {
  const coinsState = useAppSelector(selectCoins);
  const navigation = useNavigation<NativeStackNavigationProp<WalletNav>>();
  const userState = useAppSelector(selectUser);

  return (
    <BaseScreen isFixed>
      <TitleText text="Mi billetera" />
      <FlatList
        data={coinsState.generalCoins.slice(1)}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <CoinItem
            showRightArrow={false}
            showConverted={false}
            id={'ars'}
            currency={'ARS'}
            quantity={userState.userData.pesos}
            price={1}
            image={'https://assets.coingecko.com/coins/images/23054/large/nuARS_Logo.png?164314904'}
            onPress={() => console.log()}
          />
        )}
        renderItem={({item}) => (
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
        )}
      />
    </BaseScreen>
  );
};

export default MyWalletScreen;
