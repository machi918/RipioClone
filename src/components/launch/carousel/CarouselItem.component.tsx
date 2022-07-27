import React, {FC} from 'react';
import {View, Text, Image, ImageRequireSource} from 'react-native';
import {TitleText} from '../../common/text/TitleText.component';

export interface LaunchItemCarouselInterface {
  image: ImageRequireSource;
  text: string;
  id: number;
}

export const LaunchCarouselItem: FC<LaunchItemCarouselInterface> = ({image, text, id}) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        padding: 20,
      }}>
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={image} style={{width: 200, height: 200}} resizeMode={'contain'} />
        {/* <Text>{text}</Text> */}
        <TitleText text={text} centered />
      </View>
    </View>
  );
};
