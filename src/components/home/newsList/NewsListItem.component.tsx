import React, {FC} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../../assets/theme/Colors';

interface NewsListItemInterface {
  title: string;
  body: string;
  path: string;
  domain: string;
}

export const NewsListItem: FC<NewsListItemInterface> = ({title, body, path, domain}) => {
  return (
    <TouchableOpacity
      onPress={() => console.log(path)}
      style={{
        width: 300,
        height: 110,
        backgroundColor: Colors.white,
        justifyContent: 'space-around',
        borderRadius: 10,
        padding: 10,
      }}>
      <Text style={style.titleText} numberOfLines={2}>
        {body}
      </Text>
      <Text style={style.bodyText} numberOfLines={3}>
        {title}
      </Text>
      <Text style={style.bodyText}>{domain}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  bodyText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: Colors.black,
  },
});
