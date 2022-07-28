import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {NewView} from '../../common/view/NewView.component';
import {SingleNumber} from './SingleNumber.component';

interface NumberPadInterface {
  onPress: (number: number) => void;
  onDeletePress?: () => void;
  onDotPress?: () => void;
}

export const NumberPad: FC<NumberPadInterface> = ({onPress, onDeletePress, onDotPress}) => {
  return (
    <NewView allWidth style={style.container}>
      <NewView allWidth style={style.rows}>
        <SingleNumber number={1} onPress={number => onPress(number)} />
        <SingleNumber number={2} onPress={number => onPress(number)} />
        <SingleNumber number={3} onPress={number => onPress(number)} />
      </NewView>
      <NewView allWidth style={style.rows}>
        <SingleNumber number={4} onPress={number => onPress(number)} />
        <SingleNumber number={5} onPress={number => onPress(number)} />
        <SingleNumber number={6} onPress={number => onPress(number)} />
      </NewView>
      <NewView allWidth style={style.rows}>
        <SingleNumber number={7} onPress={number => onPress(number)} />
        <SingleNumber number={8} onPress={number => onPress(number)} />
        <SingleNumber number={9} onPress={number => onPress(number)} />
      </NewView>
      <NewView allWidth style={style.rows}>
        <SingleNumber
          number={0}
          text={'.'}
          isNumber={false}
          onPress={number => onPress(number)}
          onPressVariant={onDotPress}
          disabled
        />
        <SingleNumber number={0} onPress={number => onPress(number)} />
        <SingleNumber
          number={0}
          text={'<'}
          isNumber={false}
          onPressVariant={onDeletePress}
          onPress={number => onPress(number)}
        />
      </NewView>
    </NewView>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 40,
    marginTop: 20,
  },
  rows: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
