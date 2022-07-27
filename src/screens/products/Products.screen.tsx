import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {TitleText} from '../../components';
import {BaseScreen} from '../index';

const ProductsScreen: FC = () => {
  return (
    <BaseScreen>
      <TitleText text="Productos" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            marginTop: 20,
            paddingTop: 20,
            marginBottom: 20,
            fontWeight: 'bold',
            color: Colors.black,
            fontSize: 20,
            textAlign: 'center',
          }}>
          Estamos desarrollando un nuevo producto que va a potenciar tus rendimientos en cripto
        </Text>
      </View>
    </BaseScreen>
  );
};

export default ProductsScreen;
