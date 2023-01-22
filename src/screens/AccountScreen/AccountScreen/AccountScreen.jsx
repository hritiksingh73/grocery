import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyAccountComponent from '../../../component/MyAccountComponent/MyAccountComponent';
import {useNavigation} from '@react-navigation/native';

const AccountScreen = () => {
  const navigation = useNavigation();
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerBar}>
        <Ionicons name="ios-menu-outline" size={24} style={styles.favourite} />
        <Text style={styles.header}>My Account</Text>
        <MaterialCommunityIcons
          name="bell-badge-outline"
          size={24}
          style={styles.favourite}
        />
      </View>

      <MyAccountComponent
        name="profile"
        Text="My Profile"
        onPress={() => navigation.navigate('MyProfileScreen')}
      />
      <MyAccountComponent
        name="contacts"
        Text="Manage Addresses"
        onPress={() => navigation.navigate('ManageAddressScreen')}
      />
      <MyAccountComponent
        name="gift"
        Text="Order History"
        onPress={() => navigation.navigate('OrderHistoryScreen')}
      />
      <MyAccountComponent
        name="hearto"
        Text="My Wishlist"
        onPress={() => navigation.navigate('WishListScreen')}
      />
      <MyAccountComponent name="logout" Text="Logout" onPress={signOut} />
    </SafeAreaView>
  );
};

export default AccountScreen;
