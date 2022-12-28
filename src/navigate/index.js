import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

const StackNav = () => {
  const [user, setuser] = React.useState('');

  const onAuthStateChanged = user => {
    setuser(user);
  };

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
export default StackNav;
