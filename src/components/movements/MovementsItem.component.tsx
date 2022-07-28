import React, {FC} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

interface MovementsItemInterface {
  onPress: () => void;
  data: MovementsInterface;
}

interface MovementsInterface {
  type: string;
  id: string;
  action: string;
  value: number;
  date: string;
}

export const MovementsItem: FC<MovementsItemInterface> = ({onPress, data}) => {
  const date = new Date(data.date);

  return (
    <TouchableOpacity onPress={onPress} style={{height: 40, width: '100%', marginVertical: 10}}>
      <View
        style={{
          height: 40,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: '#00FF00', marginRight: 10}} />
          <View>
            <Text>{data.action}</Text>
            <Text>{date.toString()}</Text>
          </View>
        </View>
        <Text>$ {data.value}</Text>
      </View>
    </TouchableOpacity>
  );
};
