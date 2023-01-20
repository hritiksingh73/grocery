import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton';
import styles from './styles';

const MyProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alin}>
        <View style={styles.imgContainer}></View>
        <Text style={styles.userName}>Praveen Shakya</Text>
      </View>

      <View style={styles.itemSeperator} />
      <View style={styles.emailContainer}>
        <Text style={styles.title}>Email</Text>
        <Text style={styles.userEmail}>praveenshakya@gmail.com</Text>
      </View>
      <View style={styles.itemSeperator} />
      <View style={styles.emailContainer}>
        <Text style={styles.title}>Mobile</Text>
        <Text style={styles.userEmail}>+1 9685856818</Text>
      </View>
      <View style={styles.itemSeperator} />

      <View style={styles.btnContainer}>
        <PrimaryButton name={'Change Password'} />
      </View>
    </SafeAreaView>
  );
};

export default MyProfile;
