import React, {FC, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {BaseScreen} from '../../common/baseScreen/BaseScreen.screen';
import auth from '@react-native-firebase/auth';
import {Colors} from '../../../assets/theme/Colors';
import {onUserCreate} from '../../../service/firebase/users.service';
import {BackBar} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import {MainButton} from '../../../components/buttons';

const SignUpScreen: FC = () => {
  const navigation = useNavigation();
  const [mail, setMail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

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
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <BaseScreen backgroundColor={Colors.white} isInputStyle>
      <BackBar onPress={() => navigation.goBack()} />
      <View>
        <Text>SIGN UP</Text>
        <TextInput placeholder="Nombre" onChangeText={text => setName(text)} />
        <TextInput placeholder="Email" onChangeText={text => setMail(text)} />
        <TextInput placeholder="Contraseña" onChangeText={text => setPass(text)} />
        <MainButton
          text="Registrarse"
          onPress={() => handleSignUp(mail, pass)}
          disabled={loading || mail.length < 1 || pass.length < 1}
        />
      </View>
    </BaseScreen>
  );
};

export default SignUpScreen;
