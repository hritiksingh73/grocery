import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

const MyProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alin}>
        <View style={styles.imgContainer}></View>
        <Text>MyProfile</Text>
      </View>
    </SafeAreaView>
  );
};

export default MyProfile;
