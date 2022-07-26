import React, {FC} from 'react';
import {TouchableOpacity, Text, PressableProps, ActivityIndicator} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';

interface MainButtonInterface extends PressableProps {
  text: string;
  onPress: () => void;
  loading?: boolean;
  textColor?: string;
  backgroundColor?: string;
  height?: number;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  marginBottom?: number;
  disabled?: boolean;
}

export const MainButton: FC<MainButtonInterface> = ({
  onPress,
  text,
  textColor,
  backgroundColor,
  height,
  borderRadius,
  borderColor,
  borderWidth,
  marginBottom,
  loading = false,
  disabled = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        height: height ?? 40,
        width: '100%',
        borderRadius: borderRadius ?? 20,
        backgroundColor: disabled ? '#444' : backgroundColor ?? Colors.primary,
        borderColor: borderColor ?? 'rgba(0,0,0,0)',
        borderWidth: borderWidth ?? 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: marginBottom ?? 0,
        ...props,
      }}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={textColor ?? Colors.onPrimary} size={'large'} />
      ) : (
        <Text style={{color: textColor ?? Colors.onPrimary, fontWeight: 'bold', fontSize: 14}}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
