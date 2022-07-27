import React, {FC, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {BaseScreen} from '../../common/baseScreen/BaseScreen.screen';
import auth from '@react-native-firebase/auth';
import {Colors} from '../../../assets/theme/Colors';

const SignUpScreen: FC = () => {
  const [mail, setMail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSignUp(email: string, password: string) {
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('User account created & signed in!');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <BaseScreen backgroundColor={Colors.white} isInputStyle>
      <View>
        <Text>SIGN UP</Text>
        <TextInput placeholder="MAIL" onChangeText={text => setMail(text)} />
        <TextInput placeholder="PASS" onChangeText={text => setPass(text)} />
        <Button title="DALE" onPress={() => handleSignUp(mail, pass)} disabled={loading} />
      </View>
    </BaseScreen>
  );
};

export default SignUpScreen;
