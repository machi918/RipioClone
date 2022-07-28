import React, {FC, useState} from 'react';
import {TextInput, TextInputProps, Text} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {NewView} from '../common/view/NewView.component';
//@ts-ignore
import isEmail from 'validator/lib/isEmail';

interface EmailInputInterface extends TextInputProps {
  height: number;
  onChangeText: (text: string) => void;
}

export const EmailInput: FC<EmailInputInterface> = ({onChangeText, height, ...props}) => {
  const [stringError, setStringError] = useState<boolean>(false);

  function handleIsEmail(email: string) {
    if (!isEmail(email)) {
      setStringError(true);
    }
  }

  return (
    <NewView allWidth>
      <TextInput
        {...props}
        style={[
          {
            width: '100%',
            height: height ?? undefined,
          },
          props.style,
        ]}
        placeholder="Mail"
        onFocus={() => setStringError(false)}
        onEndEditing={e => handleIsEmail(e.nativeEvent.text)}
        onChangeText={onChangeText}
        accessibilityLabel={'Correo electrónico'}
        autoCapitalize={'none'}
        underlineColorAndroid={Colors.primary}
        keyboardType={'email-address'}
        autoComplete={'email'}
        maxLength={40}
        textContentType={'emailAddress'}
      />
      <NewView allWidth style={{height: 30}}>
        {stringError ? (
          <Text style={{color: Colors.errorRed, fontSize: 12}}>Ese formato no parece el correcto</Text>
        ) : null}
      </NewView>
    </NewView>
  );
};
