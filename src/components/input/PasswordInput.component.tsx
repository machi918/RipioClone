import React, {FC, useState} from 'react';
import {TextInput, TextInputProps, Text} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {NewView} from '../common/view/NewView.component';
// @ts-ignore
import validator from 'validator';

interface PasswordInputInterface extends TextInputProps {
  height: number;
  creationMode?: boolean;
  onChangeText: (text: string) => void;
  passMinLength?: number;
  passMinNums?: number;
  passMinUpperCaseLetters?: number;
}

export const PasswordInput: FC<PasswordInputInterface> = ({
  onChangeText,
  creationMode = false,
  height,
  passMinLength,
  passMinNums,
  passMinUpperCaseLetters,
  ...props
}) => {
  const [stringError, setStringError] = useState<boolean>(false);

  function handleIsPass(type: boolean, pass: string) {
    if (type) {
      if (
        !validator.isStrongPassword(pass, {
          minLength: passMinLength!,
          minUppercase: passMinUpperCaseLetters!,
          minNumbers: passMinNums!,
          minLowercase: 0,
          minSymbols: 0,
        })
      ) {
        setStringError(true);
      }
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
        placeholder="Contraseña"
        onFocus={() => setStringError(false)}
        onEndEditing={e => handleIsPass(creationMode, e.nativeEvent.text)}
        onChangeText={onChangeText}
        accessibilityLabel={'Contraseña'}
        autoCapitalize={'none'}
        underlineColorAndroid={Colors.primary}
        secureTextEntry={true}
        keyboardType={'default'}
        textContentType={'password'}
        autoComplete={'password'}
        maxLength={40}
      />

      <NewView allWidth style={{height: 30}}>
        {stringError ? (
          <Text style={{color: Colors.errorRed, fontSize: 12}}>Debes cumplir con el formato de arriba</Text>
        ) : null}
      </NewView>
    </NewView>
  );
};
