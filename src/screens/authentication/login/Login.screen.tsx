import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import {View, Image} from 'react-native';
import Animated, {useAnimatedStyle, useSharedValue, withRepeat, withTiming} from 'react-native-reanimated';
import {Colors} from '../../../assets/theme/Colors';
import {EmailInput, PasswordInput, TitleText} from '../../../components';
import {MainButton, OutfilledButton} from '../../../components/buttons';
import {PressableText} from '../../../components/buttons/pressableText/PressableText.button';
import {AuthNav} from '../../../navigation/auth/AuthNav';
import {BaseScreen} from '../../common/baseScreen/BaseScreen.screen';
import Toast from 'react-native-toast-message';
import {i18nFirebaseError} from '../../../service/firebase/firebase-languaje-error';
// @ts-ignore
import isEmail from 'validator/lib/isEmail';

const LoginScreen: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthNav>>();

  const [mail, setMail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const offsetY = useSharedValue(-2);
  offsetY.value = withRepeat(withTiming(2, {duration: 700}), -1, true);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: offsetY.value}],
    };
  }, []);

  async function handleSignUp(email: string, password: string) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(email, password);
      console.log('User account created & signed in!');
    } catch (error) {
      //@ts-ignore
      Toast.show({text1: i18nFirebaseError(error.code)});
      setLoading(false);
    }
  }

  return (
    <BaseScreen backgroundColor={Colors.white}>
      <View>
        <View style={{width: '100%', alignItems: 'flex-end', marginTop: 20, marginBottom: 10}}>
          <OutfilledButton text="Registrate" onPress={() => navigation.navigate('SignUpScreen')} />
        </View>

        <Animated.View style={[animatedStyle, {width: '100%', alignItems: 'center'}]}>
          <Image source={require('../../../assets/images/launchPNG.png')} style={{width: 200, height: 150}} />
        </Animated.View>

        <View style={{width: '100%', alignItems: 'center'}}>
          <TitleText text="¡El mundo cripto te espera!" centered marginTop={10} />
          <EmailInput height={50} onChangeText={text => setMail(text)} />
          <PasswordInput height={50} onChangeText={text => setPass(text)} />
        </View>
        <View style={{width: '100%', alignItems: 'flex-end'}}>
          <PressableText
            text="¿Olvidaste tu contraseña?"
            marginTop={12}
            onPress={() => navigation.navigate('ForgetPasswordScreen')}
          />
        </View>
        <View style={{marginVertical: 40}}>
          <MainButton
            text="Ingresar"
            onPress={() => handleSignUp(mail, pass)}
            loading={loading}
            disabled={!isEmail(mail) || pass.length < 1}
          />
        </View>
      </View>
    </BaseScreen>
  );
};

export default LoginScreen;
