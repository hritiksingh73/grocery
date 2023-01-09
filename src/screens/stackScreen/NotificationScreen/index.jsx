import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import styles from './styles.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Notification from '../../../data/Notification.js';

const NotificationScreen = () => {
const {goBack} = useNavigation();

const textNotifications = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textStyle}>{item.text}</Text>
      <Text style={styles.timeStyle}>{item.time}</Text>
    </View>
  );
};


  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AntDesign name="left" size={20} onPress={() => goBack()} />
        <Text style={styles.headingText}>Notification</Text>
      </View>
      <FlatList
        data={Notification}
        renderItem={textNotifications}
        ItemSeparatorComponent={() => <View style={styles.itemDivider}></View>}
      />
    </SafeAreaView>
  );
};
export default NotificationScreen;
