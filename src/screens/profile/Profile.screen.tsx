import React, {FC} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {CoinItem, ProfileHeader, ProfileSection, ProfileSectionItem, TitleText} from '../../components';
import {BaseScreen} from '../index';

const ProfileScreen: FC = () => {
  return (
    <BaseScreen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TitleText text="Perfil" />

        <ProfileHeader />

        <ProfileSection title="Ajustes de perfil">
          <ProfileSectionItem text="Datos personales" icon="person-outline" />
          <ProfileSectionItem text="Cambiar contraseña" icon="key-outline" />
          <ProfileSectionItem text="Cuentas bancarias" icon="cash-outline" />
          <ProfileSectionItem text="Responsable inscripto" icon="server-outline" />
          <ProfileSectionItem text="Limites" icon="ellipsis-horizontal-circle-outline" />
        </ProfileSection>

        <ProfileSection title="Preferencias">
          <ProfileSectionItem text="Idioma" icon="globe-outline" />
        </ProfileSection>

        <ProfileSection title="Seguridad">
          <ProfileSectionItem text="Método de bloqueo" icon="lock-closed-outline" />
        </ProfileSection>

        <ProfileSection title="General">
          <ProfileSectionItem text="Invitar amigos" icon="gift-outline" />
          <ProfileSectionItem text="Códigos de promoción" icon="pricetags-outline" />
          <ProfileSectionItem text="Centro de ayuda" icon="information-circle-outline" />
          <ProfileSectionItem text="Términos y Condiciones" icon="document-outline" />
          <ProfileSectionItem text="Soporte" icon="chatbox-ellipses-outline" />
          <ProfileSectionItem text="Cerrar sesión" textColor={Colors.errorRed} icon="log-in-outline" />
        </ProfileSection>

        <View style={{width: '100%', height: 50, alignItems: 'center'}}>
          <Text>Versión 0.0.0</Text>
        </View>
      </ScrollView>
    </BaseScreen>
  );
};

export default ProfileScreen;
