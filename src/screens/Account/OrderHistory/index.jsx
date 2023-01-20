import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import PrimaryButton from '../../../components/PrimaryButton';
import styles from './styles';

const OrderHistory = ({navigation}) => {
  const orderDetails = useSelector(state => state.orderDetails.orderDetails);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={orderDetails}
        renderItem={({item}) => {
          return (
            <View style={styles.historyRecordContainer}>
              <View style={styles.orderAndPriceContainer}>
                <Text style={styles.orderIdBlock}>
                  Order ID: {item.orderID}
                </Text>
                <Text style={styles.orderIdBlock}>$25.00</Text>
              </View>
              <Text style={styles.dateStyling}>
                {item.deliverySlot.date} {item.deliverySlot.month}{' '}
                {item.deliverySlot.day}
              </Text>
              <Text style={styles.statusStyling}>Status: Placed</Text>

              <View style={styles.btnContainer}>
                <PrimaryButton name="View Details" onPress={() => navigation.navigate('OrderHistoryDetails', {OrderID: item.orderID})}/>
                <PrimaryButton
                  name="Rate this Order"
                  customBtnContainerStyle={styles.customBtnContainerStyle}
                  customBtnTextStyle={styles.customBtnTextStyle}
                />
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default OrderHistory;
