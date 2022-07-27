import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import React, {FC, useEffect} from 'react';
import {View, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Colors} from '../../assets/theme/Colors';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';

interface ButtomNavItemInterface extends TouchableOpacityProps {
  isFocused: boolean;
  options: BottomTabNavigationOptions;
  onPress: () => void;
  onLongPress: () => void;
  label: string;
  icon: string;
}

export const ButtomNavItem: FC<ButtomNavItemInterface> = props => {
  useEffect(() => {
    if (props.isFocused) {
      animatedPadding.value = withTiming(20, {
        duration: 1000,
        easing: Easing.out(Easing.exp),
      });
    }

    return () => {
      animatedPadding.value = withTiming(0, {
        duration: 1000,
        easing: Easing.out(Easing.exp),
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isFocused]);

  const animatedPadding = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animatedPadding.value,
      [0, 20],
      ['rgba(0,0,0,0)', Colors.secondaryVariant],
    );
    return {
      paddingHorizontal: animatedPadding.value,
      paddingVertical: 5,
      backgroundColor: backgroundColor,
    };
  });

  function handlePress() {
    if (props.isFocused) {
      animatedPadding.value = withTiming(20, {
        duration: 2000,
        easing: Easing.out(Easing.exp),
      });
    } else {
      animatedPadding.value = withTiming(0, {
        duration: 500,
        easing: Easing.out(Easing.exp),
      });
    }
    props.onPress();
  }

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={props.isFocused ? {selected: true} : {}}
      accessibilityLabel={props.options.tabBarAccessibilityLabel}
      testID={props.options.tabBarTestID}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
      }}
      onPress={() => handlePress()}
      onLongPress={props.onLongPress}>
      <Animated.View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          },
          animatedStyles,
        ]}>
        {/* <Text style={{color: '#673ab7', marginRight: props.isFocused ? 5 : 0}}>IC</Text> */}
        <View style={{marginRight: props.isFocused ? 4 : 0}}>
          <Icon name={props.icon} size={20} color={Colors.onSecondary} />
        </View>

        {props.isFocused ? <Text style={{color: '#673ab7'}}>{props.label.toString()}</Text> : null}
      </Animated.View>
    </TouchableOpacity>
  );
};
