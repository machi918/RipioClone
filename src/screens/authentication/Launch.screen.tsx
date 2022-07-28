import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC, useEffect, useState, createRef} from 'react';
import {Text, Image} from 'react-native';
import PagerView from 'react-native-pager-view';
import {launchData} from '../../assets/dummy/launchData';
import {Colors} from '../../assets/theme/Colors';
import {NewView, LaunchCarousel} from '../../components';
import {MainButton} from '../../components/buttons';
import {CarouselDots} from '../../components/launch/carousel/CarouselDots.component';
import {AuthNav} from '../../navigation/auth/AuthNav';
import {constants} from '../../utils/constants';
import {BaseScreen} from '../common/baseScreen/BaseScreen.screen';

const LaunchScreen: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthNav>>();

  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageRef = createRef<PagerView>();

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPage + 1 < launchData.length) {
        pageRef.current?.setPage(currentPage + 1);
      } else {
        pageRef.current?.setPage(0);
      }
    }, 2500);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <BaseScreen backgroundColor={Colors.white}>
      <NewView allWidth alignItemsCenter>
        <Text>{constants.version}</Text>
        <Image source={require('../../../src/assets/images/ripioLogo.png')} style={{width: 150, height: 80}} />
      </NewView>
      <NewView>
        <NewView allWidth marginBottom={40} alignItemsCenter>
          <LaunchCarousel data={launchData} onPageScrolled={page => setCurrentPage(page)} ref={pageRef} />
          <CarouselDots pages={launchData.length} currentPage={currentPage} />
        </NewView>

        <MainButton text="Ingresar" onPress={() => navigation.navigate('LoginScreen')} marginBottom={10} />
        <MainButton
          text="Registrate"
          textColor={Colors.onSecondary}
          backgroundColor={Colors.white}
          onPress={() => navigation.navigate('SignUpScreen')}
        />
      </NewView>
    </BaseScreen>
  );
};

export default LaunchScreen;
