import React, {FC} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {movimientosDummy} from '../../assets/dummy/movimientos';
import {Colors} from '../../assets/theme/Colors';
import {CoinItem, MovementsItem, TitleText} from '../../components';
import {BaseScreen} from '../index';

const MovementsScreen: FC = () => {
  return (
    <BaseScreen>
      <TitleText text="Movimientos" />
      <FlatList
        data={movimientosDummy}
        renderItem={({item}) => <MovementsItem onPress={() => console.log('asdasdasd')} data={{...item}} />}
        contentContainerStyle={{backgroundColor: Colors.white, borderRadius: 10, paddingHorizontal: 16}}
      />
    </BaseScreen>
  );
};

export default MovementsScreen;
