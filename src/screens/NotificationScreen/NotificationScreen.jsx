import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {NotificationData} from '../../dummyData/Cards';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const NotificationScreen = () => {
  const navigation = useNavigation();

  const notificationData = ({item}) => {
    return (
      <View style={styles.notificationDataRow}>
        <Text style={styles.notification}>{item.notification}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} />
        </TouchableOpacity>
        <Text style={styles.header}>Notification</Text>
      </View>
      <FlatList
        data={NotificationData}
        renderItem={item => notificationData(item)}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;
