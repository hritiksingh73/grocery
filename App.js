import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { Provider } from "react-redux";
import Navigator from "./src/navigator";
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
export default App