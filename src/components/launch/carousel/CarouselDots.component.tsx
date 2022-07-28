import React, {FC} from 'react';
import {NewView} from '../../common/view/NewView.component';
import {CarouselDot} from './CourselDot.component';

interface CarouselDotsIntertface {
  pages: number;
  currentPage: number;
}

export const CarouselDots: FC<CarouselDotsIntertface> = ({pages, currentPage}) => {
  const auxData = Array.from({length: pages}, (_, i) => i + 1);

  return (
    <NewView allWidth allCentered flexDirection="row">
      {auxData.map(item => (
        <CarouselDot focused={currentPage === item - 1} key={item - 1} />
      ))}
    </NewView>
  );
};
