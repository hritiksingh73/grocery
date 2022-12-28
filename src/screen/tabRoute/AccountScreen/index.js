import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';
import IconAntDesign from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import Touchable from '../../../components/touchableOpacity';

const AccountScreen = ({navigation}) => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <IconAntDesign name={'ios-menu-outline'} size={35} />
          <Text style={styles.textHeader}>My Account</Text>
          <IconAntDesign name={'notifications-outline'} size={35} />
        </View>
      </View>
      <View style={styles.subContainer}>
        <Touchable name="person-outline" text="My Profile" />

        <Touchable name="md-reader-outline" text="Manage Addresses" />

        <Touchable name="ios-menu-outline" text="Order History" />

        <Touchable name="heart-outline" text="My Wishlist" />

        <Touchable
          name="md-lock-closed-outline"
          text="Logout"
          onPress={signOut}
        />
      </View>
    </SafeAreaView>
  );
};
export default AccountScreen;
