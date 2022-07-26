import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {View} from 'react-native';
import {Colors} from '../../assets/theme/Colors';
import {ButtomNavItem} from './ButtomNavItem.component';

export const MyTabBar: FC<BottomTabBarProps> = ({state, descriptors, navigation}) => {
  return (
    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around', backgroundColor: Colors.white}}>
      {state.routes.map((route, index) => {
        // console.log(index, route);
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            //@ts-ignore
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const handleIcon = (routeName: string): string => {
          switch (routeName) {
            case 'HomeNav':
              return 'home-outline';
            case 'WalletNav':
              return 'wallet-outline';
            case 'ProductsNav':
              return 'git-network-outline';
            case 'MovementsScreen':
              return 'card-outline';
            case 'PerfilNav':
              return 'person-outline';

            default:
              return 'help-outline';
          }
        };

        return (
          //   <TouchableOpacity
          //     key={index}
          //     accessibilityRole="button"
          //     accessibilityState={isFocused ? {selected: true} : {}}
          //     accessibilityLabel={options.tabBarAccessibilityLabel}
          //     testID={options.tabBarTestID}
          //     onPress={onPress}
          //     onLongPress={onLongPress}
          //     style={{flex: 1}}>
          //     <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label.toString()}</Text>
          //   </TouchableOpacity>
          <ButtomNavItem
            key={route.key}
            isFocused={isFocused}
            options={options}
            onPress={onPress}
            onLongPress={onLongPress}
            label={label.toString()}
            icon={handleIcon(route.name!)}
          />
        );
      })}
    </View>
  );
};
