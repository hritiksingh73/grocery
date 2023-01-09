import React from 'react';
import MainNavigator from './src/navigations/MainNavigator.jsx';
import {Provider} from 'react-redux';
import store, { persistor } from './src/redux/store/store';
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <MainNavigator/>
      </PersistGate> 
    </Provider>
  );
};

export default App;
