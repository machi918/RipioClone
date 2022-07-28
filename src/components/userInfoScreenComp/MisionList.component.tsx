import React, {FC} from 'react';
import {ScrollView, Text} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {NewView} from '../common/view/NewView.component';
import {MisionListItem, MisionListItemInterface} from './MisionListItem.component';

const dummy: MisionListItemInterface[] = [
  {
    rpcWON: 300,
    subtitle: 'Hacé tu primera compra',
    title: 'Primer contacto',
    id: 0,
  },
  {
    rpcWON: 200,
    subtitle: 'Comprá cripto todos los meses y ganá RPCasdasd asdasd asdasdasdasd',
    title: 'Abastecimiento mensual',
    id: 1,
  },
];

export const MisionList: FC = () => {
  return (
    <NewView allWidth style={{borderRadius: 20}} backgroundColor={Colors.white}>
      <NewView allWidth justifyContentCenter style={{height: 50, paddingHorizontal: 20}}>
        <Text style={{fontWeight: 'bold', color: Colors.black}}>Bitácora de misiones</Text>
      </NewView>
      <ScrollView>
        {dummy.map(item => (
          <MisionListItem rpcWON={item.rpcWON} subtitle={item.subtitle} title={item.title} key={item.id} id={item.id} />
        ))}
      </ScrollView>
      <NewView allWidth justifyContentCenter style={{height: 50, paddingHorizontal: 20}}>
        <Text style={{fontWeight: 'bold', color: Colors.primary}}>Bitácora de misiones</Text>
      </NewView>
    </NewView>
  );
};
