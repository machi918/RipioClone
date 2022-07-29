import React, {LegacyRef} from 'react';
import {View} from 'react-native';
import PagerView from 'react-native-pager-view';
import {LaunchCarouselItem, LaunchItemCarouselInterface} from './CarouselItem.component';

interface LaunchCarouselInterface {
  data: LaunchItemCarouselInterface[];
  onPageScrolled: (page: number) => void;
  ref: LegacyRef<PagerView>;
}
export const LaunchCarousel = React.forwardRef((props: LaunchCarouselInterface, ref: LegacyRef<PagerView>) => {
  //ForwardRef creates a FC that receives props and a ref from the parent
  return (
    <View style={{width: 300, height: 300}}>
      <PagerView
        style={{flex: 1}}
        initialPage={0}
        ref={ref}
        overdrag
        orientation="horizontal"
        onPageSelected={e => props.onPageScrolled(e.nativeEvent.position)}>
        {props.data.map(item => {
          return <LaunchCarouselItem image={item.image} text={item.text} key={item.id} id={item.id} />;
        })}
      </PagerView>
    </View>
  );
});
