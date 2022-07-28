import React, {FC} from 'react';
import {Text, Image} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {NewView, TitleText} from '../../components';
import {BaseScreen} from '../index';

const ProductsScreen: FC = () => {
  return (
    <BaseScreen>
      <TitleText text="Productos" />
      <NewView allCentered style={{flex: 1}}>
        <Image
          source={require('../../assets/images/launch/1.png')}
          style={{width: 200, height: 200}}
          resizeMode={'contain'}
        />
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
      </NewView>
    </BaseScreen>
  );
};

export default ProductsScreen;
