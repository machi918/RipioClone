import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {NewsInterface} from '../../../service/https/coins.api';
import {NewsListItem} from './NewsListItem.component';

interface NewsListInterface {
  data: NewsInterface[];
}

export const NewsList: FC<NewsListInterface> = ({data}) => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate={100}
      snapToInterval={320}
      //   snapToAlignment="start"
      ItemSeparatorComponent={() => <View style={{width: 20}}></View>}
      renderItem={({item}) => (
        <NewsListItem key={item.id} title={item.title} body={item.slug} path={item.url} domain={item.domain} />
      )}
      style={{marginBottom: 10}}
    />
  );
};
