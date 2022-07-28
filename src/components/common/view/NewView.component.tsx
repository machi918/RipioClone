import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';

interface NewViewInterface extends ViewProps {
  children: React.ReactNode;
  allWidth?: boolean;
  allHeight?: boolean;
  backgroundColor?: string;

  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  marginX?: number;
  marginY?: number;

  allCentered?: boolean;
  alignItemsCenter?: boolean;
  justifyContentCenter?: boolean;
  justifyContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between' | 'space-evenly' | 'space-around';
  alignItems?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
  flexDirection?: 'row' | 'column';
}

export const NewView: FC<NewViewInterface> = ({
  children,
  allWidth,
  allHeight,
  allCentered,
  alignItemsCenter,
  justifyContentCenter,
  justifyContent,
  alignItems,
  flexDirection,
  backgroundColor,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  marginX,
  marginY,
  ...props
}) => {
  return (
    <View
      style={[
        {
          justifyContent: allCentered || justifyContentCenter ? 'center' : justifyContent ?? 'flex-start',
          alignItems: allCentered || alignItemsCenter ? 'center' : alignItems ?? 'flex-start',
          flexDirection: flexDirection ?? 'column',
          width: allWidth ? '100%' : undefined,
          height: allHeight ? '100%' : undefined,
          backgroundColor: backgroundColor ?? undefined,

          marginTop: marginTop ?? 0,
          marginBottom: marginBottom ?? 0,
          marginRight: marginRight ?? 0,
          marginLeft: marginLeft ?? 0,
          marginHorizontal: marginX ?? 0,
          marginVertical: marginY ?? 0,
        },
        props.style,
      ]}>
      {children}
    </View>
  );
};
