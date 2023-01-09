import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen/index';
import RegisterScreen from '../screens/auth/RegisterScreen';
import auth from '@react-native-firebase/auth';

const Auth = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      <Auth.Screen name="Login" component={LoginScreen} />
      <Auth.Screen name="Register" component={RegisterScreen} />
    </Auth.Navigator>
  );
};
export default AuthNavigator;
