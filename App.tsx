import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabNav} from './src/navigation/TabNav';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {MainNav} from './src/navigation/MainNav';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <TabNav /> */}
        <MainNav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
