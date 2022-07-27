import React, {FC} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Colors} from '../../assets/theme/Colors';

export type PaymentItemInterface = {
  type: 'Transferencia bancaria' | 'Mercado Pago' | 'Efectivo';
  onPress: () => void;
  comision: number;
};

export const PaymentItem: FC<PaymentItemInterface> = ({onPress, type, comision}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '100%',
        height: 70,
        backgroundColor: Colors.white,
        marginBottom: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
      }}>
      <View style={{flexDirection: 'row', height: '100%', alignItems: 'center'}}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.1)',
            marginRight: 10,
          }}
        />
        <View>
          <Text style={{fontWeight: 'bold', color: Colors.black}}>{type}</Text>
          <Text>Comisión {comision}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
