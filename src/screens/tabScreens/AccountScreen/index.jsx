import React from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import MyAccFields from '../../../components/MyAccFields';
import styles from './styles';

const AccountScreen = ({navigation}) => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.horizntlMrgn}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <MyAccFields icon={'user'} txt={'My Profile'} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Manage Addresses')}>
          <MyAccFields icon={'calendar'} txt={'Manage Addresses'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Order History')}>
          <MyAccFields icon={'book'} txt={'Order History'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('My Wishlist')}>
          <MyAccFields icon={'gift'} txt={'My Wishlist'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={signOut}>
          <MyAccFields icon={'power'} txt={'Logout'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
