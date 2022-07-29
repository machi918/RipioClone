// @ts-nocheck
import React, {FC, useState} from 'react';
import {Text} from 'react-native';
import {Chart, Line, Area, Tooltip} from 'react-native-responsive-linechart';
import {Colors} from '../../assets/theme/Colors';
import {CoinHistoricalPriceInterface} from '../../service/https/coins.api';
import {NewView} from '../common/view/NewView.component';

interface CoinCharInterface {
  data: CoinHistoricalPriceInterface[];
}

export const CoinChart: FC<CoinCharInterface> = ({data}) => {
  const [value, setValue] = useState<CoinHistoricalPriceInterface>({
    x: data[data.length - 1].x,
    y: data[data.length - 1].y,
    date: data[data.length - 1].date,
  });

  return (
    <NewView allWidth allHeight>
      <NewView allWidth allCentered>
        <Text style={{fontSize: 20, color: Colors.black}}>ARS$ {value.y.toFixed(3)}</Text>
        <Text>{new Date(value.date).toString().slice(0, -24)}</Text>
      </NewView>
      <Chart style={{height: 200, width: '100%'}} padding={{top: 40}} data={data} xDomain={{min: 0, max: data.length}}>
        <Area theme={{gradient: {from: {color: '#FFFF8F', opacity: 0.4}, to: {color: '#FFFF8F', opacity: 0.2}}}} />
        <Line
          smoothing="none"
          onTooltipSelect={e => setValue(e)}
          tooltipComponent={
            <Tooltip
              theme={{
                shape: {width: 4, height: 40, radius: 0},
                label: {color: 'black', opacity: 0, textAnchor: 'middle'},
              }}
            />
          }
          theme={{stroke: {color: '#ffa502', width: 3}, scatter: {default: {width: 4, height: 4, rx: 2}}}}
        />
      </Chart>
    </NewView>
  );
};
