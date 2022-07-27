import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface BaseScreenInterface {
  children: React.ReactNode;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  isInputStyle?: boolean;

  /**
   * Should we not wrap in SafeAreaView? Defaults to false.
   */
  unsafe?: boolean;
}
