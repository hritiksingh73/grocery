import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginPage from '../screens/LoginScreen/Login';
import RegisterPage from '../screens/RegisterScreen';
import Splash from '../screens/SplashScreen/Splash';

const Auth = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SplashScreen"
        component={Splash}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name="LoginScreen"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name="RegisterScreen"
        component={RegisterPage}
        options={{headerShown: true}}
      />
    </Auth.Navigator>
  );
}
