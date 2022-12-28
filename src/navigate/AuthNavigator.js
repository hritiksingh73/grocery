import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screen/authetic/LoginScreen';
import RegistrationScreen from '../screen/authetic/RegistrationScreen';

const Auth = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      <Auth.Screen name="Login" component={LoginScreen} />
      <Auth.Screen name="Registration" component={RegistrationScreen} />
    </Auth.Navigator>
  );
}
