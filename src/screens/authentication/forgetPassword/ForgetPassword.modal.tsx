import React, {FC} from 'react';
import {Modal, Image} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';
import {BackBar, NewView, TitleText} from '../../../components';
import {MainButton} from '../../../components/buttons';
import {openInbox} from 'react-native-email-link';

interface ForgetPasswordModalInterface {
  onClose: (closed: boolean) => void;
  showModal: boolean;
  email: string;
}

export const ForgetPasswordModal: FC<ForgetPasswordModalInterface> = ({onClose, showModal, email}) => {
  async function handleOpenMail() {
    try {
      openInbox();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal
      visible={showModal}
      transparent
      animationType={'slide'}
      onRequestClose={() => onClose(false)}
      onDismiss={() => onClose(false)}>
      <NewView style={{flex: 1}} alignItemsCenter backgroundColor={Colors.primary}>
        <NewView style={{position: 'absolute', top: 10, right: 20, left: 20}}>
          <BackBar color={Colors.white} onPress={() => onClose(false)} />
        </NewView>
        <NewView allHeight allCentered style={{width: '80%'}}>
          <NewView allCentered backgroundColor={Colors.white} style={{borderRadius: 60, height: 120, width: 120}}>
            <Image source={require('../../../assets/images/at.png')} style={{width: 100, height: 100}} />
          </NewView>
          <TitleText
            centered
            text="¡Listo! Ya podés cambiar tu contraseña con el link que te enviamos por email a:"
            textColor={Colors.white}
            marginTop={0}
            marginBottom={0}
          />
          <TitleText textColor={Colors.white} text={email} marginTop={0} />
        </NewView>
        <NewView style={{position: 'absolute', bottom: 50, right: 20, left: 20}}>
          <MainButton
            text="Abrir tu email"
            textColor={Colors.onSecondary}
            backgroundColor={Colors.white}
            onPress={() => handleOpenMail()}
          />
        </NewView>
      </NewView>
    </Modal>
  );
};
