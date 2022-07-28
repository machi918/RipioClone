import React, {FC} from 'react';
import {Text} from 'react-native';
import {RightArrow} from '../../assets/icons';
import {Colors} from '../../assets/theme/Colors';
import {NewView} from '../common/view/NewView.component';

export interface MisionListItemInterface {
  title: string;
  subtitle: string;
  rpcWON: number;
  id: number;
}

export const MisionListItem: FC<MisionListItemInterface> = ({rpcWON, subtitle, title}) => {
  return (
    <NewView
      flexDirection="row"
      justifyContent="space-between"
      style={{height: 60, borderBottomWidth: 1, borderTopWidth: 1, borderColor: '#D3D3D3', paddingHorizontal: 20}}>
      <NewView justifyContentCenter allHeight style={{width: '75%'}}>
        <Text numberOfLines={1} style={{fontWeight: 'bold', color: Colors.black}}>
          {title}
        </Text>
        <Text numberOfLines={2} style={{fontSize: 12}}>
          {subtitle}
        </Text>
      </NewView>
      <NewView alignItemsCenter flexDirection="row" allHeight style={{width: '25%'}} justifyContent="flex-end">
        <Text>+{rpcWON}</Text>
        <RightArrow />
      </NewView>
    </NewView>
  );
};
