import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';

import {Text} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {BackBar, NewView, TitleText} from '../../components';
import {useAppSelector} from '../../redux/hooks';
import {selectUser} from '../../redux/userSlice';
import {BaseScreen} from '../common/baseScreen/BaseScreen.screen';

const Item: FC<{title: string; text: string}> = ({title, text}) => {
  return (
    <NewView allWidth justifyContentCenter style={{borderTopColor: '#D3D3D3', borderTopWidth: 1, height: 60}}>
      <Text>{title}</Text>
      <Text style={{fontSize: 18, color: Colors.black}}>{text}</Text>
    </NewView>
  );
};

const PersonalDataScreen: FC = () => {
  const navigation = useNavigation();
  const userState = useAppSelector(selectUser);

  return (
    <BaseScreen>
      <BackBar onPress={() => navigation.goBack()} />
      <NewView marginBottom={40}>
        <TitleText marginTop={0} text="Datos personales" />
        <Text>Todos tus datos personales están guardados de manera segura.</Text>
      </NewView>
      <Item title="Nombre" text={userState.userData.name} />
      <Item title="Email" text={userState.userData.mail} />
      <Item title="Firebase uid" text={userState.uid ?? ''} />
    </BaseScreen>
  );
};

export default PersonalDataScreen;
