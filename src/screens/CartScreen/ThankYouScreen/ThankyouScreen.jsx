import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import ImagePath from '../../../config/Image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {orderHistory} from '../../../redux/action/Action';
const ThankyouScreen = () => {
  const navigation = useNavigation();
  dispatch = useDispatch();
  const cartDeliveryData = useSelector(state => state.OrderInfo.orders);
  //console.log('cartDeliveryData from Thank You Screen======>>>>>>>>', cartDeliveryData);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} />
        </TouchableOpacity>
        <Text style={styles.header}>Thank you</Text>
      </View>
      <Image source={ImagePath.orderPlaced} style={styles.orderPlacedImage} />
      <Text style={styles.orderConformationHeading}>Congratulations! </Text>

      <Text style={styles.orderConformationSubHeading}>
        Your Order has been placed.
      </Text>

      <ScrollView>
        <View style={styles.orderid}>
          <Text style={styles.finalOrderText}>Order Id</Text>
          <Text style={styles.finalFetchOrderText}>
            {cartDeliveryData.orderID.id}
          </Text>
        </View>
        <View style={styles.orderid}>
          <Text style={styles.finalOrderText}>Payment Type</Text>
          <Text style={styles.finalFetchOrderText}>
            {cartDeliveryData.orderID.paymentmethod}
          </Text>
        </View>

        <View style={styles.orderid}>
          <Text style={styles.finalOrderText}>Order Placed on</Text>
          <Text style={styles.finalFetchOrderText}>
            {cartDeliveryData.deliveryDateSlot.month}
            {cartDeliveryData.deliveryDateSlot.date}
          </Text>
        </View>

        <View style={styles.orderid}>
          <Text style={styles.finalOrderText}>Store Name</Text>
          <Text style={styles.finalFetchOrderText}>Super Fresh Hampden</Text>
        </View>

        <View style={styles.orderid}>
          <Text style={styles.finalOrderText}>SubTotal</Text>
          <Text style={styles.finalFetchOrderText}>
            {cartDeliveryData.orderDetails.CalculateDeliveryCharges}
          </Text>
        </View>
        <View style={styles.orderid}>
          <Text style={styles.finalOrderText}>Tax</Text>
          <Text style={styles.finalFetchOrderText}>
            {cartDeliveryData.orderDetails.CalculateTax}
          </Text>
        </View>

        <View style={styles.footerButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SuperFreshScreen')}>
            <Text style={styles.continueShoppingButton}>Continue Shopping</Text>
          </TouchableOpacity>

          <TouchableOpacity
          // onPress={() =>
          //   dispatch(
          //     orderHistory(
          //       // cartDeliveryData.orderDetails.CalculateTax,
          //       // cartDeliveryData.orderDetails.CalculateDeliveryCharges,
          //       // cartDeliveryData.deliveryDateSlot.month,
          //       // cartDeliveryData.deliveryDateSlot.date,
          //       // cartDeliveryData.orderID.paymentmethod,
          //       // cartDeliveryData.orderID.id
          //       //cartDeliveryData.orderDetails
          //     )
          //   )
          // }
          >
            <Text style={styles.okButton}>ok</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ThankyouScreen;
