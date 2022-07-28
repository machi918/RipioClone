import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';
import {BackBar, EmailInput, NewView, TitleText} from '../../../components';
import {MainButton} from '../../../components/buttons';
import {AuthNav} from '../../../navigation/auth/AuthNav';
import {BaseScreen} from '../../common/baseScreen/BaseScreen.screen';
import {ForgetPasswordModal} from './ForgetPassword.modal';
// @ts-ignore
import isEmail from 'validator/lib/isEmail';

const ForgetPasswordScreen: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthNav>>();

  const [mail, setMail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  async function handleReq(email: string) {
    try {
      setLoading(true);
      await auth().sendPasswordResetEmail(email);
    } catch (error) {
    } finally {
      setLoading(false);
      setShowModal(true);
    }
  }

  return (
    <BaseScreen backgroundColor={Colors.white} isInputStyle>
      <ForgetPasswordModal showModal={showModal} email={mail} onClose={closed => setShowModal(closed)} />
      <BackBar onPress={() => navigation.goBack()} />
      <NewView allWidth alignItemsCenter>
        <TitleText text="Ingresá tu email para reestablecer la contraseña" centered marginTop={10} marginBottom={40} />
        <EmailInput height={50} onChangeText={text => setMail(text)} />
      </NewView>
      <View style={{position: 'absolute', bottom: 40, right: 20, left: 20}}>
        <MainButton text="Enviar" onPress={() => handleReq(mail)} loading={loading} disabled={!isEmail(mail)} />
      </View>
    </BaseScreen>
  );
};

export default ForgetPasswordScreen;
