import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {NewView} from '../common/view/NewView.component';

interface MovementsItemInterface {
  onPress: () => void;
  data: MovementsInterface;
}

interface MovementsInterface {
  type: string;
  id: string;
  action: string;
  value: number;
  date: number;
}

export const MovementsItem: FC<MovementsItemInterface> = ({onPress, data}) => {
  const date = new Date(data.date);

  return (
    <TouchableOpacity onPress={onPress} style={{height: 40, width: '100%', marginVertical: 10}}>
      <NewView
        allWidth
        alignItemsCenter
        flexDirection="row"
        justifyContent="space-between"
        style={{
          height: 40,
        }}>
        <NewView flexDirection="row" alignItemsCenter>
          <NewView style={{width: 20, height: 20, borderRadius: 10, backgroundColor: '#00FF00', marginRight: 10}} />
          <NewView>
            <Text>{data.action}</Text>
            <Text>{date.toString().slice(0, -15)}</Text>
          </NewView>
        </NewView>
        <Text>$ {data.value}</Text>
      </NewView>
    </TouchableOpacity>
  );
};
