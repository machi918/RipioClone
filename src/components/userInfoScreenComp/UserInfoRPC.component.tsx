import React, {FC} from 'react';
import {Image, Text} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {NewView} from '../common/view/NewView.component';

export const UserInfoRPCComponent: FC<{rpc: number}> = ({rpc}) => {
  return (
    <NewView
      flexDirection="row"
      alignItemsCenter
      allWidth
      marginBottom={20}
      style={{
        height: 80,
        borderRadius: 10,
      }}>
      <Text>asdasdasd</Text>
    </NewView>
  );
};
