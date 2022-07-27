import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet, Image} from 'react-native';
import Animated, {useAnimatedStyle, useSharedValue, withRepeat, withTiming} from 'react-native-reanimated';
import {Colors} from '../../../assets/theme/Colors';
import {TitleText} from '../../../components';
import {MainButton, OutfilledButton} from '../../../components/buttons';
import {AuthNav} from '../../../navigation/auth/AuthNav';
import {BaseScreen} from '../../common/baseScreen/BaseScreen.screen';

const LoginScreen: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthNav>>();

  const [mail, setMail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const offsetY = useSharedValue(-2);

  offsetY.value = withRepeat(
    withTiming(2, {duration: 700}, (finished, currentValue) => {}),
    -1,
    true,
    finished => {},
  );

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
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <BaseScreen backgroundColor={Colors.white} isInputStyle>
      <View style={{width: '100%', alignItems: 'flex-end', marginTop: 20, marginBottom: 10}}>
        <OutfilledButton text="Registrate" onPress={() => navigation.navigate('SignUpScreen')} />
      </View>

      <Animated.View style={[animatedStyle, {width: '100%', alignItems: 'center'}]}>
        <Image source={require('../../../assets/images/launchPNG.png')} style={{width: 200, height: 150}} />
      </Animated.View>

      <View style={{width: '100%', alignItems: 'center'}}>
        <TitleText text="¡El mundo cripto te espera!" marginTop={10} />
        <TextInput
          style={styles.textInput}
          placeholder="Mail"
          onChangeText={text => setMail(text)}
          accessibilityLabel={'Correo electrónico'}
          autoCapitalize={'none'}
          underlineColorAndroid={Colors.primary}
          keyboardType={'email-address'}
          autoComplete={'email'}
          maxLength={40}
          textContentType={'emailAddress'}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Contraseña"
          onChangeText={text => setPass(text)}
          accessibilityLabel={'Contraseña'}
          autoCapitalize={'none'}
          underlineColorAndroid={Colors.primary}
          secureTextEntry={true}
          keyboardType={'default'}
          textContentType={'password'}
          autoComplete={'password'}
          maxLength={40}
        />
      </View>
      <View style={{position: 'absolute', bottom: 40, right: 20, left: 20}}>
        <MainButton
          text="Ingresar"
          onPress={() => handleSignUp(mail, pass)}
          loading={loading}
          disabled={mail.length < 1 || pass.length < 1}
        />
      </View>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 50,
  },
});

export default LoginScreen;
