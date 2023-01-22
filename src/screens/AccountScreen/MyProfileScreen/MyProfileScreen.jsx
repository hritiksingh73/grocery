import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const MyProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} />
        </TouchableOpacity>
        <Text style={styles.header}>Profile</Text>
      </View>
      <View style={styles.avator}>
        <Avatar.Text size={100} label="Aditya" />
      </View>
    </SafeAreaView>
  );
};

export default MyProfileScreen;
