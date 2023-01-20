import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

const MainNavigator = () => {
  const [user, setUser] = useState();

  const onAuthStateChanged = user => {
    // console.log(user)
    setUser(user);
  };

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return subscribe;
  }, []);

  return <>{user ? <TabNavigator /> : <AuthNavigator />}</>;
};

export default MainNavigator;
