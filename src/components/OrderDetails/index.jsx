import React from 'react';
import {Text, View} from 'react-native';
import {Divider} from 'react-native-paper';
import {styles} from './styles';

const OrderDetails = ({orderDetail, details}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.orderDetail}>{orderDetail}</Text>
      <Text style={[styles.orderDetail]}>{details}</Text>
      <Divider />
    </View>
  );
};
export default OrderDetails;
