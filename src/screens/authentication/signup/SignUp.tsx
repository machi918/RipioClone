import React, {FC, useState} from 'react';
import {View, Text, useWindowDimensions, Keyboard} from 'react-native';
import {BaseScreen} from '../../common/baseScreen/BaseScreen.screen';
import auth from '@react-native-firebase/auth';
import {Colors} from '../../../assets/theme/Colors';
import {onUserCreate} from '../../../service/firebase/users.service';
import {BackBar, EmailInput, Input, PasswordInput} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import {MainButton} from '../../../components/buttons';
import Animated, {Easing, useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import Toast from 'react-native-toast-message';
// @ts-ignore
import validator from 'validator';
// @ts-ignore
import isEmail from 'validator/lib/isEmail';
import {i18nFirebaseError} from '../../../service/firebase/firebase-languaje-error';

const PassItem: FC<{quantity: number; text: string; verificated: boolean}> = ({quantity, text, verificated}) => {
  return (
    <View
      style={{
        paddingHorizontal: 5,
        paddingVertical: 2,
        backgroundColor: verificated ? 'green' : '#D3D3D3',
        borderRadius: 5,
        alignItems: 'center',
      }}>
      <Text style={{color: Colors.white}}>{`${quantity} ${text}`}</Text>
    </View>
  );
};

const SignUpScreen: FC = () => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const [mail, setMail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const offset = useSharedValue(0);
  const currentPage = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: -offset.value * width}],
    };
  });

  const animatedBar = useAnimatedStyle(() => {
    return {
      //+ 1: initialPage. -20: leftPadding. -100: parent horizontalpadding. 0.3: 3 items
      width: (offset.value + 1) * (width - 20 - 100) * 0.3,
    };
  });

  function handleChangePage(toPage: number) {
    if (currentPage.value < 3) {
      offset.value = withTiming(currentPage.value, {duration: 400, easing: Easing.ease}, () => {
        currentPage.value += toPage;
      });
    }
  }

  async function handleSignUp(email: string, password: string) {
    try {
      setLoading(true);
      const response = await auth().createUserWithEmailAndPassword(email, password);
      await onUserCreate(response.user.uid, {
        mail,
        name,
        pesos: 0,
        rpc: 0,
      });
    } catch (error) {
      //@ts-ignore
      Toast.show({text1: i18nFirebaseError(error.code)});
      setLoading(false);
    }
  }

  return (
    <BaseScreen backgroundColor={Colors.white} isInputStyle>
      <BackBar onPress={() => navigation.goBack()} />
      <View style={{width: '100%', marginBottom: 100}}>
        <View style={{width: '100%', paddingHorizontal: 50, marginBottom: 30}}>
          <Animated.View
            style={[{width: 30, backgroundColor: Colors.primary, height: 10, borderRadius: 5}, animatedBar]}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Animated.View style={[{width: width - 40}, animatedStyles]}>
            <EmailInput height={50} onChangeText={text => setMail(text)} />
            <View style={{marginTop: 80}}>
              <MainButton
                text="Siguiente"
                onPress={() => handleChangePage(1)}
                onPressOut={Keyboard.dismiss}
                disabled={!isEmail(mail)}
              />
            </View>
          </Animated.View>
          <Animated.View style={[{width: width - 40, marginLeft: 40}, animatedStyles]}>
            <PasswordInput
              height={50}
              creationMode
              passMinLength={8}
              passMinNums={1}
              passMinUpperCaseLetters={1}
              onChangeText={text => setPass(text)}
            />
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around'}}>
              <PassItem quantity={1} text="Número" verificated={!!pass.match(/.*[0-9].*/gm)} />
              <PassItem quantity={1} text="Mayúsculas" verificated={!!pass.match(/.*[A-Z].*/gm)} />
              <PassItem quantity={8} text="Caracteres" verificated={pass.length >= 8} />
            </View>
            <View style={{marginTop: 60}}>
              <MainButton
                text="Siguiente"
                onPress={() => handleChangePage(1)}
                onPressOut={Keyboard.dismiss}
                disabled={
                  !validator.isStrongPassword(pass, {
                    minLength: 8,
                    minUppercase: 1,
                    minLowercase: 0,
                    minNumbers: 1,
                    minSymbols: 0,
                  })
                }
              />
            </View>
          </Animated.View>
          <Animated.View style={[{width: width - 40, marginLeft: 40}, animatedStyles]}>
            <Input minValues={4} placeholder="Nombre" height={50} onChangeText={text => setName(text)} />
            <View style={{marginTop: 80}}>
              <MainButton
                text="Registrarse"
                onPressOut={Keyboard.dismiss}
                onPress={() => handleSignUp(mail, pass)}
                disabled={loading || mail.length < 1 || pass.length < 1 || name.length < 4}
                loading={loading}
              />
            </View>
          </Animated.View>
        </View>
      </View>
    </BaseScreen>
  );
};

export default SignUpScreen;
