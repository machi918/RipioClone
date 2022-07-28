import React, {FC} from 'react';
import {Image, ImageRequireSource} from 'react-native';
import {TitleText} from '../../common/text/TitleText.component';
import {NewView} from '../../common/view/NewView.component';

export interface LaunchItemCarouselInterface {
  image: ImageRequireSource;
  text: string;
  id: number;
}

export const LaunchCarouselItem: FC<LaunchItemCarouselInterface> = ({image, text}) => {
  return (
    <NewView
      allWidth
      allHeight
      style={{
        padding: 20,
      }}>
      <NewView allWidth allHeight allCentered>
        <Image source={image} style={{width: 200, height: 200}} resizeMode={'contain'} />
        <TitleText text={text} centered />
      </NewView>
    </NewView>
  );
};
