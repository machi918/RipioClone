import React, {FC} from 'react';
import {Text, ScrollView, Linking} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {NewView, ProfileHeader, ProfileSection, ProfileSectionItem, TitleText} from '../../components';
import {BaseScreen} from '../index';
import auth from '@react-native-firebase/auth';
import pkg from '../../../package.json';
import {ProfileNav} from '../../navigation/ProfileNav';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {selectUser} from '../../redux/userSlice';
import {useAppSelector} from '../../redux/hooks';

const ProfileScreen: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ProfileNav>>();
  const userState = useAppSelector(selectUser);

  async function handleLogOut() {
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleOpenMail() {
    try {
      await Linking.openURL('mailto: mati.d.pinto@gmail.com');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BaseScreen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TitleText text="Perfil" />

        <ProfileHeader
          rpc={userState.userData.rpc}
          name={userState.userData.name}
          onPress={() => navigation.navigate('UserInfoScreen')}
        />

        <ProfileSection title="Ajustes de perfil">
          <ProfileSectionItem
            text="Datos personales"
            icon="person-outline"
            onPress={() => navigation.navigate('PersonalDataScreen')}
          />
          <ProfileSectionItem
            text="¡Envíale un correo a Matías!"
            icon="mail-outline"
            onPress={() => handleOpenMail()}
          />
          <ProfileSectionItem text="Cuentas bancarias" icon="cash-outline" onPress={() => console.log()} />
          <ProfileSectionItem text="Responsable inscripto" icon="server-outline" onPress={() => console.log()} />
          <ProfileSectionItem text="Limites" icon="ellipsis-horizontal-circle-outline" onPress={() => console.log()} />
        </ProfileSection>

        <ProfileSection title="Preferencias">
          <ProfileSectionItem text="Idioma" icon="globe-outline" onPress={() => console.log()} />
        </ProfileSection>

        <ProfileSection title="Seguridad">
          <ProfileSectionItem text="Método de bloqueo" icon="lock-closed-outline" onPress={() => console.log()} />
        </ProfileSection>

        <ProfileSection title="General">
          <ProfileSectionItem text="Invitar amigos" icon="gift-outline" onPress={() => console.log()} />
          <ProfileSectionItem text="Códigos de promoción" icon="pricetags-outline" onPress={() => console.log()} />
          <ProfileSectionItem text="Centro de ayuda" icon="information-circle-outline" onPress={() => console.log()} />
          <ProfileSectionItem text="Términos y Condiciones" icon="document-outline" onPress={() => console.log()} />
          <ProfileSectionItem text="Soporte" icon="chatbox-ellipses-outline" onPress={() => console.log()} />
          <ProfileSectionItem
            text="Cerrar sesión"
            textColor={Colors.errorRed}
            icon="log-in-outline"
            onPress={() => handleLogOut()}
          />
        </ProfileSection>

        <NewView allWidth alignItemsCenter style={{height: 50}}>
          <Text>Versión {pkg.version}</Text>
        </NewView>
      </ScrollView>
    </BaseScreen>
  );
};

export default ProfileScreen;
