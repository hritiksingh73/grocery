import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  IncrementCartItem,
  DecrementCartItem,
  RemoveCartItem,
  OrderedProducts,
  OrderedProductsPrice,
} from '../../../redux/action/action';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style';
import firestore from '@react-native-firebase/firestore';
import PrimaryButton from '../../../components/PrimaryButton';
import BillingDetail from '../../../components/BillingDetailField';
import images from '../../../config/images';

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.cartReducer.fruitCart);
  const cartData = useSelector(state => state.cartReducer.fruitCart);

  console.log('cart screen:' , cartData)

  const UserItemPrice = () => {
    const ItemPrice = data.map(value => {
      let tot = value.price * value.numberOfItem;
      return tot;
    });
    const TotalItemPrices = ItemPrice.reduce((tot, val) => {
      return tot + val;
    }, 0);
    return TotalItemPrices;
  };

  const DeliveryCharge = () => {
    if (UserItemPrice() > 0) {
      return 2;
    } else {
      return 0;
    }
  };

  const Coupon = () => {
    return 0;
  };
  const ItemTax = () => {
    let tot = UserItemPrice();
    return Number(((tot * 18) / 100).toFixed(2));
  };
  const TotalBilling = () => {
    return UserItemPrice() + DeliveryCharge() + ItemTax();
  };
  // const FinalPrice = () => {
  //   return Math.floor(TotalBilling());
  // };

  const IncreaseItemHandler = item => {
    dispatch(IncrementCartItem(item.id));
    firestore().collection('Cart').doc('ABC').set({cartData});
  };

  const DecreaseItemHandler = item => {
    if (item.numberOfItem >= 1) {
      dispatch(DecrementCartItem(item.id));
    } else {
      dispatch(RemoveCartItem(item.id));
    }
    firestore().collection('Cart').doc('ABC').set({cartData});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.horizontlmrgn}>
          <View>
            <Text style={styles.title}>Cart</Text>
          </View>

          <View>
            <View style={styles.itemHeader}>
              <Image style={styles.imgStyl} source={images.source1} />
              <Text style={styles.headerTxt}>Fresh Fruits</Text>
            </View>

            <View>
              <FlatList
                data={data}
                renderItem={({item, index}) => {
                  return (
                    <View>
                      <View style={styles.cartItemContainer}>
                        <View style={styles.imgCntnr}>
                          <Image
                            style={styles.itemImg}
                            resizeMode="contain"
                            source={{uri: item.imageUrl}}
                          />
                        </View>

                        <View style={styles.itemTitleArea}>
                          <Text style={styles.itemTitle}>{item.title}</Text>
                          <Text style={styles.itemMrp}>${item.price}</Text>
                        </View>

                        <View style={styles.countingCntnr}>
                          <View style={styles.counterBorder}>
                            <TouchableOpacity
                              onPress={() => DecreaseItemHandler(item)}>
                              <Text style={styles.dec}>- </Text>
                            </TouchableOpacity>
                          </View>
                          <Text style={styles.num}>{item.numberOfItem}</Text>
                          <View style={styles.incrementBtnStyle}>
                            <TouchableOpacity
                              onPress={() => IncreaseItemHandler(item)}>
                              <Text style={styles.inc}>+ </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                      <View style={styles.borderBotm} />
                    </View>
                  );
                }}
              />

              <View style={styles.couponBlock}>
                <View style={styles.couponInnerBlock}>
                  <View style={styles.flxdir}>
                    <Feather
                      name={'credit-card'}
                      size={20}
                      style={styles.couponIconStyl}
                    />
                    <TextInput
                      style={styles.couponTxt}
                      placeholder="Coupon Code"
                      placeholderTextColor={'black'}
                      onChangeText={val => {
                        setCouponCode(val);
                      }}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      Coupon;
                    }}>
                    <Text style={styles.applyBtn}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.billingBoxStyling}>
                <Text style={styles.billBoxHeader}>Bill Details</Text>
                <BillingDetail name={'Total'} myFunction={UserItemPrice} />
                <BillingDetail
                  name={'Delivery Charge'}
                  myFunction={DeliveryCharge}
                />
                <BillingDetail name={'Coupon'} myFunction={Coupon} />
                <BillingDetail name={'Tax'} myFunction={ItemTax} />
                <View style={[styles.billingTxtBorder, {borderBottomWidth: 0}]}>
                  <Text style={styles.billingTotalTxt}>Sub Total</Text>
                  <Text style={styles.totalPricingStyl}>₹{TotalBilling()}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.checkoutTxtBorder}>
          <View>
            <Text style={styles.totClr}>Total</Text>
            <Text style={styles.checkoutTotalTxt}>₹ {TotalBilling()}</Text>
            <Text style={styles.totMsg}>You save ₹ 0 on this</Text>
          </View>
          <View style={styles.topMrgn}>
            <PrimaryButton name={'Checkout'} onPress={()=>{
              const billingDetails = {
                subTotal: UserItemPrice(),
                tax: ItemTax(),
                deliveryCharges: DeliveryCharge(),
                totalAmoutn: TotalBilling()
              }
              dispatch(OrderedProducts(cartData))
              dispatch(OrderedProductsPrice(billingDetails))
              navigation.navigate('Checkout')}}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;
