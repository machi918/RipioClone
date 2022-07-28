import React, {FC} from 'react';
import {View} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';

interface CarouselDotIntertface {
  focused: boolean;
}

export const CarouselDot: FC<CarouselDotIntertface> = ({focused}) => {
  return (
    <View
      style={{
        height: 10,
        width: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        backgroundColor: focused ? Colors.primary : Colors.secondaryVariant,
      }}
    />
  );
};
