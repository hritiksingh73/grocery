import React, {useState, useEffect} from 'react';
import AppNavigator from './BottomTabHome';
import AuthNavigator from './AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {addUser} from '../redux/action/Action';
import {useDispatch} from 'react-redux';

const HomeNavigator = () => {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();

  const onAuthStateChanged = user => {
    setUser(user);
    if (user) {
      dispatch(addUser(user.displayName, user.email, user.uid));
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user =>
      onAuthStateChanged(user),
    );
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default HomeNavigator;
