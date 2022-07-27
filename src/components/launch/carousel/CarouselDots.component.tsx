import React, {FC} from 'react';
import {View} from 'react-native';
import {CarouselDot} from './CourselDot.component';

interface CarouselDotsIntertface {
  pages: number;
  currentPage: number;
}

export const CarouselDots: FC<CarouselDotsIntertface> = ({pages, currentPage}) => {
  const auxData = Array.from({length: pages}, (_, i) => i + 1);

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {auxData.map(item => (
        <CarouselDot focused={currentPage === item - 1} key={item - 1} />
      ))}
    </View>
  );
};
