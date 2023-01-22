import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Splash from '../screens/SplashScreen/Splash';
import RegisterScreen from "../screens/UserAuthentication/RegisterScreen/RegisterScreen";
import LoginScreen from '../screens/UserAuthentication/LoginScreen/LoginScreen';

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
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: true}}
      />
    </Auth.Navigator>
  );
}
