import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {BackBar, MisionList, NewView, UserInfoHeaderComponent, UserInfoRPCComponent} from '../../../components';
import {useAppSelector} from '../../../redux/hooks';
import {selectUser} from '../../../redux/userSlice';
import {BaseScreen} from '../baseScreen/BaseScreen.screen';

const UserInfoScreen: FC = () => {
  const navigation = useNavigation();

  const userState = useAppSelector(selectUser);

  return (
    <BaseScreen>
      <BackBar onPress={() => navigation.goBack()} />
      <UserInfoHeaderComponent name={userState.userData.name} />
      <UserInfoRPCComponent rpc={userState.userData.rpc} />

      <NewView allWidth>
        <MisionList />
      </NewView>
    </BaseScreen>
  );
};

export default UserInfoScreen;
