import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles.js';
import AccountInfo from '../../../components/AccountInfo';

const AccountScreen = ({navigation}) => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out'));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainHeading}>
        <Icon name="menu" size={25} />
        <Text style={styles.text}>My Account</Text>
        <Icon name="bell-badge-outline" size={25} />
      </View>
      <AccountInfo name="profile" text="My Profile" />
      <AccountInfo
        name="contacts"
        text="Manage Addresses"
        onPress={() => navigation.navigate('Manage Address')}
      />
      <AccountInfo name="gift" text="OrderHistory" />
      <AccountInfo
        name="hearto"
        text="My Wishlist"
        onPress={() => navigation.navigate('WishList')}
      />
      <AccountInfo name="logout" text="Logout" onPress={signOut} />
    </SafeAreaView>
  );
};

export default AccountScreen;
