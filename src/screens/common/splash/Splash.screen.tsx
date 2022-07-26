import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';
import {sleepTASK} from '../../../utils/utils';

export const SplashScreen: FC = () => {
  const asd = async () => await sleepTASK(2000);
  asd();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.white}}>
      <Image source={require('../../../../src/assets/images/ripioLogo.png')} style={{width: '100%', height: 150}} />
      <Text>Un clon creado por</Text>

      <Text>Matias Pinto</Text>
    </View>
  );
};
