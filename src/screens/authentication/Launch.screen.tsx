import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {MainButton} from '../../components/buttons';
import {AuthNav} from '../../navigation/auth/AuthNav';
import {BaseScreen} from '../common/baseScreen/BaseScreen.screen';

const LaunchScreen: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthNav>>();

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <BaseScreen backgroundColor={Colors.white}>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Text>V0.1.0</Text>
        <Image source={require('../../../src/assets/images/ripioLogo.png')} style={{width: 150, height: 80}} />
      </View>
      <View>
        <View style={{width: '100%', height: 350, backgroundColor: 'red', marginBottom: 40}}>
          <Text>LOGIN</Text>
        </View>

        <MainButton
          text="Ingresar"
          onPress={() => navigation.navigate('LoginScreen')}
          disabled={loading}
          marginBottom={10}
        />
        <MainButton
          text="Registrate"
          textColor={Colors.onSecondary}
          backgroundColor={Colors.white}
          onPress={() => navigation.navigate('SignUpScreen')}
          disabled={loading}
        />
      </View>
    </BaseScreen>
  );
};

export default LaunchScreen;
