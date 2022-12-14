import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native-virtualized-view';
import firestore from '@react-native-firebase/firestore';

import {removeToCart} from '../../../redux/action/Action.js';
import GroceryProduct from '../../../data/GroceryProduct.js';
import {increaseToCart, decreaseToCart} from '../../../redux/action/Action.js';
import styles from './styles.js';
import image from '../../../config/Image.js';
import BillInfo from '../../../components/BillInfo';
import LoginButton from '../../../components/LoginButton';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartData.cartProducts);

  const CalculateUserTotalPrice = () => {
    const ItemTotalPrice = cart.map(value => {
      let total = value.price * value.quantity;
      return total;
      console.log(ItemTotalPrice);
    });
    const TotalItemPrices = ItemTotalPrice.reduce((total, value) => {
      return total + value;
    }, 0);
    return TotalItemPrices;
  };
  const CalculateDeliveryRate = () => {
    return 10;
  };
  const CalculateCoupon = () => {
    return 10;
  };
  const CalculateTax = () => {
    let total = CalculateUserTotalPrice();
    return (total * 12) / 100;
  };
  const CalculateSubTotal = () => {
    return CalculateUserTotalPrice() + CalculateDeliveryRate() + CalculateTax();
  };

  const removeList = item => {
    dispatch(removeToCart(item));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainMargin}>
          <View>
            <Text style={styles.cart}>Cart</Text>
          </View>
          <View>
            <View style={styles.vegetableImage}>
              <Image source={image.image3} style={styles.freshImage} />
              <Text style={styles.superImage}>Super Fresh</Text>
            </View>
            <View>
              <FlatList
                data={cart}
                ItemSeparatorComponent={() => {
                  return <View style={styles.itemDivide}></View>;
                }}
                renderItem={({item, index}) => {
                  return (
                    <View>
                      <View style={styles.mainList}>
                        <View style={styles.imageStyle}>
                          <Image
                            source={item.image}
                            style={styles.fruitImage}
                            resizeMode="center"
                          />
                        </View>
                        <View style={styles.itemStyle}>
                          <Text style={styles.titleText}>{item.title}</Text>
                          <Text style={styles.dollarText}>{item.price}</Text>
                        </View>
                        {/* <TouchableOpacity
                          style={styles.remove}
                          onPress={() => {
                            removeList(item.id);
                            console.log(item.id);
                          }}>
                          <Text style={styles.delete}>Remove</Text>
                        </TouchableOpacity> */}
                      </View>
                      <View style={styles.counting}>
                        <View style={styles.addButton}>
                          <TouchableOpacity
                            onPress={() => {
                              dispatch(decreaseToCart(item.id));
                              // removeToCart(item.id);
                            }}>
                            <Text style={styles.minus}> - </Text>
                          </TouchableOpacity>
                        </View>

                        <Text style={styles.number}>{item.quantity}</Text>
                        <View style={styles.increase}>
                          <TouchableOpacity
                            onPress={() => dispatch(increaseToCart(item.id))}>
                            <Text style={styles.plus}> + </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
              <View style={styles.coupon}>
                <View style={styles.couponBlock}>
                  <Icon name="creditcard" size={20} />
                  <TextInput
                    style={styles.couponInput}
                    placeholder="Coupon Code"
                    placeholderTextColor="black"
                  />
                </View>
                <TouchableOpacity>
                  <Text style={styles.apply}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.billing}>
              <Text style={styles.billingText}>Bill Details</Text>
              <BillInfo title="Total" onPress={CalculateUserTotalPrice} />
              <BillInfo title="Delivery Charge" onPress={CalculateDeliveryRate} />
              <BillInfo title="Coupon" onPress={CalculateCoupon} />
              <BillInfo title="Tax" onPress={CalculateTax} />
            </View>
            <View style={styles.billingStyling}>
              <Text styles={styles.billingText}>Sub Total</Text>
              <Text styles={styles.priceTotal}>${CalculateSubTotal()}</Text>
            </View>
          </View>
        </View>
        <View style={styles.checkoutText}>
          <View>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.subTotalText}>₹ {CalculateSubTotal()}</Text>
            <Text style={styles.saveText}>You save $ 5 on this</Text>
          </View>
          <View style={styles.checkoutButton}>
            <LoginButton name="Checkout" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
