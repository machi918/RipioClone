import React, {FC} from 'react';
import {Image, Text} from 'react-native';
import {Colors} from '../../assets/theme/Colors';

import {NewView} from '../common/view/NewView.component';

export const UserInfoHeaderComponent: FC<{name: string}> = ({name}) => {
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
      <NewView
        style={{
          borderRadius: 30,
          borderWidth: 2,
          borderColor: Colors.primary,
          overflow: 'hidden',
          padding: 2,
          marginRight: 20,
        }}>
        <Image source={{uri: 'https://picsum.photos/200'}} style={{height: 50, width: 50, borderRadius: 25}} />
      </NewView>
      <NewView>
        <Text style={{fontWeight: 'bold', color: Colors.black}}>{name}</Text>
        <Text style={{fontWeight: 'bold'}}>Misiones: 0 de 7</Text>
      </NewView>
    </NewView>
  );
};
