import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {AppNav} from './src/navigation/app/AppNav';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNav />
        <Toast type="error" />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
