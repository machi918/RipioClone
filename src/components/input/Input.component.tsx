import React, {FC, useState} from 'react';
import {TextInput, TextInputProps, Text} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {NewView} from '../common/view/NewView.component';
//@ts-ignore

interface InputInterface extends TextInputProps {
  height: number;
  onChangeText: (text: string) => void;
  minValues: number;
}

export const Input: FC<InputInterface> = ({onChangeText, height, minValues, ...props}) => {
  const [stringError, setStringError] = useState<boolean>(false);

  function handleBlur(text: string) {
    if (minValues > text.length) {
      setStringError(true);
    }
  }

  return (
    <NewView allWidth>
      <TextInput
        style={[
          {
            width: '100%',
            height: height ?? undefined,
          },
          props.style,
        ]}
        placeholder={props.placeholder}
        onFocus={() => setStringError(false)}
        onEndEditing={e => handleBlur(e.nativeEvent.text)}
        onChangeText={onChangeText}
        accessibilityLabel={props.accessibilityLabel}
        autoCapitalize={props.autoCapitalize}
        underlineColorAndroid={Colors.primary}
        keyboardType={props.keyboardType}
        autoComplete={props.autoComplete}
        maxLength={props.maxLength}
        textContentType={props.textContentType}
      />
      <NewView allWidth style={{height: 30}}>
        {stringError ? <Text style={{color: Colors.errorRed, fontSize: 12}}>Formato inválido</Text> : null}
      </NewView>
    </NewView>
  );
};
