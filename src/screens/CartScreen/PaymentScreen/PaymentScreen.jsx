import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {orderpaymentId} from '../../../utils/uidGenerator';
import {orderHistory, orderId} from '../../../redux/action/Action';
import styles from './styles';
import {RadioButton} from 'react-native-paper';

const PaymentScreen = () => {
  const [checked, setChecked] = useState('first');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //console.log(uidGenerator())
  //console.log(orderpaymentId(),"Cash On delivery")
  const cartDeliveryData = useSelector(state => state.OrderInfo.orders);
  console.log(
    'cartDeliveryData form  Payment Screen=====>>>>>',
    cartDeliveryData,
  );

  return (
    <SafeAreaView>
      <Text style={styles.headerTitle}>Payment Method</Text>

      <View style={styles.paymentmethod}>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => {
            dispatch(orderId(orderpaymentId(), 'Cash On delivery')),
              setChecked('first');
          }}
        />
        <Text style={styles.paymentButtonText}>Cash On delivery</Text>
      </View>

      <View style={styles.paymentmethod}>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => {
            dispatch(orderId(orderpaymentId(), 'Pay Later')),
              setChecked('second');
          }}
        />
        <Text style={styles.paymentButtonText}>Pay Later</Text>
      </View>

      <TouchableOpacity
        style={styles.placeOrderButtonContainer}
        onPress={() => {
          dispatch(orderHistory(cartDeliveryData)),
            navigation.navigate('ThankyouScreen');
        }}>
        <Text style={styles.placeOrderButton}>Place Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PaymentScreen;
