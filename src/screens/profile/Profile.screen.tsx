import React, {FC} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {ProfileHeader, ProfileSection, ProfileSectionItem, TitleText} from '../../components';
import {BaseScreen} from '../index';
import auth from '@react-native-firebase/auth';
import {constants} from '../../utils/constants';

const ProfileScreen: FC = () => {
  async function handleLogOut() {
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BaseScreen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TitleText text="Perfil" />

        <ProfileHeader />

        <ProfileSection title="Ajustes de perfil">
          <ProfileSectionItem text="Datos personales" icon="person-outline" onPress={() => console.log()} />
          <ProfileSectionItem text="Cambiar contraseña" icon="key-outline" onPress={() => console.log()} />
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

        <View style={{width: '100%', height: 50, alignItems: 'center'}}>
          <Text>Versión {constants.version}</Text>
        </View>
      </ScrollView>
    </BaseScreen>
  );
};

export default ProfileScreen;
