import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {IonicIcon} from '../../assets/icons';
import {Colors} from '../../assets/theme/Colors';
import {NewView} from '../common/view/NewView.component';

export type PaymentItemInterface = {
  type: 'Transferencia bancaria' | 'Mercado Pago' | 'Efectivo';
  onPress: () => void;
  comision: number;
  icon: string;
  uid?: string;
};

export const PaymentItem: FC<PaymentItemInterface> = ({onPress, type, comision, icon}) => {
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
      <NewView flexDirection="row" allHeight alignItemsCenter>
        <NewView
          allCentered
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.1)',
            marginRight: 10,
          }}>
          <IonicIcon name={icon} />
        </NewView>
        <NewView>
          <Text style={{fontWeight: 'bold', color: Colors.black}}>{type}</Text>
          <Text>Comisión {comision}%</Text>
        </NewView>
      </NewView>
    </TouchableOpacity>
  );
};
