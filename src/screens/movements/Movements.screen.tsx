import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {movimientosDummy} from '../../assets/dummy/movimientos';
import {Colors} from '../../assets/theme/Colors';
import {MovementsItem, TitleText} from '../../components';
import {BaseScreen} from '../index';

const MovementsScreen: FC = () => {
  return (
    <BaseScreen isFixed>
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
