import React from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton';
import globalStyle from '../../../constants/globalStyle';
import styles from './styles';

const data = [
  {
    message: 'Your order #13747 has been shipped!',
    messageHighlite: '',
    time: '30 min ago',
  },
  {
    message: 'Your order #13747 has been shipped!',
    messageHighlite: '',
    time: '30 min ago',
  },
  {
    message: 'Your order #13747 has been shipped!',
    messageHighlite: '',
    time: '30 min ago',
  },
  {
    message: 'Your order #13747 has been shipped!',
    messageHighlite: '',
    time: '30 min ago',
  },
  {
    message: 'Your order #13747 has been shipped!',
    messageHighlite: '',
    time: '30 min ago',
  },
  {
    message: 'Your order #13747 has been shipped!',
    messageHighlite: '',
    time: '30 min ago',
  },
  {
    message: 'Your order #13747 has been shipped!',
    messageHighlite: '',
    time: '30 min ago',
  },
  {
    message: 'Your order #13747 has been shipped!',
    messageHighlite: '',
    time: '30 min ago',
  },
];

const Notification = () => {
  return (
    <SafeAreaView style={globalStyle.outerContainer}>
      <FlatList
        style={styles.flatlistContainer}
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <Text style={styles.messageStyle}>{item.message}</Text>
              <Text style={styles.timeStyle}>{item.time}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Notification;
