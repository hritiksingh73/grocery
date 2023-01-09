import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import VeggiesTabNavigator from './VeggiesTabNavigator';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const [user, setUser] = useState();

  const onAuthStateChanged = user => {
    console.log('Running onAuthStateChange', user);
    setUser(user);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {user ? <VeggiesTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
