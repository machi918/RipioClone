import React, {FC} from 'react';
import {Image, Text} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {NewView} from '../common/view/NewView.component';
import LinearGradient from 'react-native-linear-gradient';

export const UserInfoRPCComponent: FC<{rpc: number}> = ({rpc}) => {
  return (
    <NewView
      flexDirection="row"
      alignItemsCenter
      allWidth
      marginBottom={20}
      style={{
        height: 100,
        borderRadius: 25,
        overflow: 'hidden',
      }}>
      <LinearGradient
        colors={['#FFFF8F', '#FFEA00', '#E49B0F']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Image
          source={require('../../assets/images/launch/2.png')}
          style={{height: 110, width: 110}}
          resizeMode={'contain'}
        />
        <NewView>
          <Text style={{fontSize: 18, color: Colors.black}}>Llevas ganados</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: Colors.black}}>{rpc} RPC</Text>
        </NewView>
      </LinearGradient>
    </NewView>
  );
};
