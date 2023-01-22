import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Divider} from 'react-native-paper';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
const OrderHistoryScreen = () => {
  const navigation = useNavigation();
  const orderhistoryData = useSelector(state => state.OrderInfo.orderHistory);

  console.log('Order History Screen======>>>>>>>>>', orderhistoryData);

  const orderHistory = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.containerHeader}>
          <Text style={styles.orderId}>Order ID: {item.orderID.id}</Text>
          <Text style={styles.containerHeaderPrice}>
            ${item.orderDetails.CalculateSubTotal}
          </Text>
        </View>
        <Text>
          {item.deliveryDateSlot.month} {item.deliveryDateSlot.date}{' '}
        </Text>
        <Text>Status: Delivered </Text>
        <View style={styles.footerButton}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                'OrderDetailScreen',
                (productOrderId = item.orderID.id),
              )
            }>
            <Text style={styles.viewDetailButton}>View Details</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.rateOrderButton}>Rate this Order</Text>
          </TouchableOpacity>
        </View>
        <Divider />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.mainHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={21} color="black" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Order History</Text>
      </View>

      <FlatList
        data={orderhistoryData}
        renderItem={orderHistory}
        numColumns={1}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default OrderHistoryScreen;
