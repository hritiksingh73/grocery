import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import HomeNavigator from './src/navigator/HomeNavigator';
import { Provider as PaperProvider } from 'react-native-paper';
import store, {persistor} from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
        {/* <NavigationContainer> */}
        <PaperProvider>
          <HomeNavigator />
        </PaperProvider>
        {/* </NavigationContainer> */}
      </PersistGate> 
    </Provider>
  );
};

export default App;
