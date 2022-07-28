import React, {FC} from 'react';
import {Platform, KeyboardAvoidingView, StatusBar, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../../../assets/theme/Colors';
import {BaseScreenInterface} from './BaseScreen.interface';

const isIos = Platform.OS === 'ios';

export const BaseScreen: FC<BaseScreenInterface> = ({
  children,
  backgroundColor,
  style,
  unsafe,
  isInputStyle = false,
}) => {
  const insets = useSafeAreaInsets();
  const styleProps = style ?? {};
  const backgroundStyle = backgroundColor ? {backgroundColor: backgroundColor} : {backgroundColor: Colors.secondary};
  const insetStyle = {paddingTop: unsafe ? 0 : insets.top};

  if (isInputStyle) {
    return (
      <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={[{flex: 1, height: '100%'}, backgroundStyle]}
          behavior={isIos ? 'padding' : undefined}>
          <StatusBar barStyle={'light-content'} />
          <View
            style={[
              {
                justifyContent: 'flex-start',
                alignItems: 'stretch',
                height: '100%',
                width: '100%',
                paddingHorizontal: 20,
              },
              styleProps,
              insetStyle,
            ]}>
            {children}
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <KeyboardAvoidingView
        style={[{flex: 1, height: '100%'}, backgroundStyle]}
        behavior={isIos ? 'padding' : undefined}>
        <StatusBar barStyle={'light-content'} />
        <View
          style={[
            {
              justifyContent: 'flex-start',
              alignItems: 'stretch',
              height: '100%',
              width: '100%',
              paddingHorizontal: 20,
            },
            styleProps,
            insetStyle,
          ]}>
          {children}
        </View>
      </KeyboardAvoidingView>
    );
  }
};
