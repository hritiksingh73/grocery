import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

import AccountElements from '../../components/AccountElements';
import {styles} from './styles';
import {globalStyle} from '../../constant/globalStyle';

const AccountScreen = () => {
  const navigation = useNavigation();
  const signOut = () => {
    Alert.alert('Are you sure you want to signout?', '', [
      {
        text: 'cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          auth()
            .signOut()
            .then(() => console.log('User signed out'));
        },
      },
    ]);
  };
  return (
    <SafeAreaView style={globalStyle.container}>
      <View style={styles.header}>
        <MaterialIcon name="menu" size={30} />
        <Text style={styles.headerText}>My Account</Text>
        <MaterialIcon name="bell-badge-outline" size={30} />
      </View>

      <AccountElements name="profile" text="My Profile" />
      <AccountElements
        name="contacts"
        text="Manage Addresses"
        onPress={() => navigation.navigate('Manage Address')}
      />

      <TouchableOpacity
        style={styles.accountContainer}
        onPress={() => navigation.navigate('Order History')}>
        <Entypo name="flow-tree" size={20} style={styles.iconStyle} />
        <Text style={styles.txtStyle}>Order History</Text>
      </TouchableOpacity>

      <AccountElements
        name="hearto"
        text="My Wishlist"
        onPress={() => navigation.navigate('Wishlist')}
      />
      <AccountElements name="logout" text="Logout" onPress={signOut} />
    </SafeAreaView>
  );
};
export default AccountScreen;
