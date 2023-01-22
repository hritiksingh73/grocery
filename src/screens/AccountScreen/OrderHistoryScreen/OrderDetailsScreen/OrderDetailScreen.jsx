import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../OrderDetailsScreen/styles';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Divider} from 'react-native-paper';
import CartBillingData from '../../../../component/CartBillingData/CartBillingData';
import {ScrollView} from 'react-native-virtualized-view';

const OrderDetailScreen = ({route}) => {
  const receivedproductOrderId = route.params;
  //console.log('receivedproductOrderId=======>>>>>>>>',receivedproductOrderId)
  const orderDetail = useSelector(state => state.OrderInfo.orderHistory);
  const navigation = useNavigation();

  const currentOrderDetail = orderDetail.filter(
    item => item.orderID.id === receivedproductOrderId,
  );

  // console.log('currentOrderDetail=======>>>>>>>>', currentOrderDetail)
  const flatlistimageData = currentOrderDetail[0];
  const flatlistrefine = flatlistimageData.orderDetails.cartItem;
  console.log('flatlistimageData=======>>>>>>>>', flatlistrefine);

  const orderDetailContainer = ({item}) => {
    return (
      <View style={styles.relatedItemContainer}>
        <View style={styles.relatedItemImagecard}>
          <Image source={{uri: item.imageUrl}} style={styles.imgStyle} />
          <Text style={styles.relatedItemImageTitle}>{item.title}</Text>
          <Text style={styles.relatedItemprice}>${item.price} each</Text>
          <Text style={styles.addtocart}>QTY: {item.quantity}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.parentContainer}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              name="left"
              size={21}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Order Detail</Text>
        </View>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.orderId}>Order ID: {receivedproductOrderId}</Text>
          <Text style={styles.totalAmount}>
            ${currentOrderDetail[0].orderDetails.CalculateSubTotal}
          </Text>
        </View>

        <FlatList
          data={flatlistrefine}
          renderItem={orderDetailContainer}
          horizontal={true}
          keyExtractor={item => item.id}
        />
        <Divider />

        <Text style={styles.shippingDetailHeader}>Shipping Detail</Text>
        <View style={styles.addressContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.userName}>
              {currentOrderDetail[0].selectedDeliveryAddress.firstName}{' '}
              {currentOrderDetail[0].selectedDeliveryAddress.lastName}{' '}
            </Text>
          </View>
          <Text>
            {currentOrderDetail[0].selectedDeliveryAddress.area}{' '}
            {currentOrderDetail[0].selectedDeliveryAddress.address}{' '}
            {currentOrderDetail[0].selectedDeliveryAddress.block}
          </Text>
          <Text>
            {currentOrderDetail[0].selectedDeliveryAddress.street}{' '}
            {currentOrderDetail[0].selectedDeliveryAddress.appartment}
          </Text>
        </View>

        <Divider />

        <Text style={styles.shippingDetailHeader}>Price Detail</Text>

        <CartBillingData
          text="Total"
          Count={'$' + currentOrderDetail[0].orderDetails.CalculateSubTotal}
        />
        <CartBillingData
          text="Delivery Charge"
          Count={currentOrderDetail[0].deliveryTimeSlot.deliveryCharges}
        />
        <CartBillingData
          text="Delivery Charge"
          Count={currentOrderDetail[0].deliveryTimeSlot.deliveryCharges}
        />
        <CartBillingData
          text="Delivery Charge"
          Count={currentOrderDetail[0].deliveryTimeSlot.deliveryCharges}
        />
        <CartBillingData
          text="Tax"
          Count={'$' + currentOrderDetail[0].orderDetails.CalculateTax}
        />

        <Text style={styles.paymentMode}>Payment Mode</Text>
        <Text style={styles.paymentMethod}>
          {currentOrderDetail[0].orderID.paymentmethod}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetailScreen;
