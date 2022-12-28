import React from 'react';
import StackNav from './src/navigate/index';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <StackNav />
    </Provider>
  );
}
