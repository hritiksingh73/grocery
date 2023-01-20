import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import images from '../../../config/images';
import globalStyle from '../../../constants/globalStyle';
import styles from './styles';

const OrderHistoryDetails = ({navigation, route}) => {
  var orderID = route.params.OrderID;
  const orderDetails = useSelector(state => state.orderDetails.orderDetails);

  const data = orderDetails.filter(item => orderID === item.orderID);
  const products = data[0].products;
  const address = data[0].selectedAddress;
  const billingDetails = data[0].billingDetails;
  const paymentMode = data[0].paymentMethod;
  // console.log('data', data);

  const BillingDetail = ({name, value}) => {
    return (
      <View style={styles.billingTxtBorder}>
        <Text style={styles.billDetailTxt}>{name}</Text>
        <Text style={styles.pricingStyl}>${value}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={globalStyle.outerContainer}>
      <ScrollView>
          <View style={styles.orderIdHolder}>
            <Text style={styles.orderIdStyle}>Order ID: {orderID}</Text>
            <Text style={styles.orderIdStyle}>
              ${data[0].billingDetails.totalAmoutn}
            </Text>
          </View>

          <View style={styles.orderIdHolder}>
            <View style={styles.imgContainer}>
              <View style={styles.imgSize}>
                <Image style={styles.imgStyle} source={images.source1} />
              </View>
              <Text style={styles.superFreshText}>Super Fresh</Text>
            </View>
            <View style={styles.numOfItem}>
              <Text>{products.length} Items</Text>
            </View>
          </View>

          <View style={styles.flatListContainer}>
            <FlatList
              data={products}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={styles.flatListBlock}>
                    <View style={styles.imageContainer}>
                      <Image
                        style={styles.itemImgStyle}
                        source={{uri: item.imageUrl}}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.price}>${item.price} each</Text>
                      <Text style={styles.quantity}>
                        QTY: {item.numberOfItem}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          <Text style={styles.addressHeader}>Shipping Detail</Text>
          <View style={styles.addressContainer}>
            <Text style={styles.addressTitle}>Moosa Abdul Rahman</Text>
            <Text style={styles.addressDescription}>
              {address.apartment}, {address.block}-block {address.street}{' '}
              {address.area} {address.addressType}
            </Text>
          </View>

          <View style={styles.billingContainer}>
            <View style={styles.billingBoxStyling}>
              <Text style={styles.billBoxHeader}>Price Detail</Text>
              <BillingDetail name={'Total'} value={billingDetails.subTotal} />
              <BillingDetail
                name={'Delivery Charge'}
                value={billingDetails.deliveryCharges}
              />
              <BillingDetail name={'Coupon'} value={0} />
              <BillingDetail name={'Tax'} value={billingDetails.tax} />
              <View style={styles.subTotalBlock}>
                <Text style={styles.billingTotalTxt}>Sub Total</Text>
                <Text style={styles.totalPricingStyl}>
                  ${billingDetails.totalAmoutn}
                </Text>
              </View>
            </View>
          </View>

          <>
            <Text style={styles.paymentHeader}>Payment Mode</Text>
            <Text style={styles.paymentType}>{paymentMode}</Text>
          </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderHistoryDetails;
