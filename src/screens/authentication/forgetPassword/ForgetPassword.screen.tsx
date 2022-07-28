import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';
import {BackBar, NewView, TitleText} from '../../../components';
import {MainButton} from '../../../components/buttons';
import {AuthNav} from '../../../navigation/auth/AuthNav';
import {BaseScreen} from '../../common/baseScreen/BaseScreen.screen';
import {ForgetPasswordModal} from './ForgetPassword.modal';

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
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={text => setMail(text)}
          accessibilityLabel={'Correo electrónico'}
          autoCapitalize={'none'}
          underlineColorAndroid={Colors.primary}
          keyboardType={'email-address'}
          autoComplete={'email'}
          maxLength={40}
          textContentType={'emailAddress'}
        />
      </NewView>
      <View style={{position: 'absolute', bottom: 40, right: 20, left: 20}}>
        <MainButton text="Enviar" onPress={() => handleReq(mail)} loading={loading} disabled={mail.length < 1} />
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

export default ForgetPasswordScreen;
