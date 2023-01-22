import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItemFromCart,
  productBillingDetails,
} from '../../../redux/action/Action';
import CartBillingData from '../../../component/CartBillingData/CartBillingData';

const CartScreen = () => {
  const cartItem = useSelector(state => state.userInfo.cart);
  //console.log("Cart item ====>>>>",cartItem)
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const clearCartItem = item => {
    if (item <= 1) {
      dispatch(removeItemFromCart(item));
    } else {
    }
  };

  const ItemPrice = cartItem.map(value => {
    const total = value.price * value.quantity;
    return total;
  });

  const CalculateTotalItemPrices = ItemPrice.reduce((total, value) => {
    return Math.min(total + value);
  }, 0);

  const CalculateDeliveryCharges = (CalculateTotalItemPrices * 3) / 100;

  const CalculateTax = (CalculateTotalItemPrices * 12) / 100;

  const CalculateSubTotal = Math.min(
    CalculateTotalItemPrices + CalculateDeliveryCharges + CalculateTax,
  );

  const cartData = ({item}) => {
    //console.log(item)
    return (
      <View style={styles.mainContainer}>
        <Image source={{uri: item.imageUrl}} style={styles.flatlistImage} />
        <View style={styles.container}>
          <Text style={styles.itemtitle}>{item.title}</Text>
          <View style={styles.Quantityadjustment}>
            <Text style={styles.itemPrice}>${item.price}</Text>
            <View style={styles.QuantityHandler}>
              <TouchableOpacity
                style={styles.decreaseButton}
                onPress={() => {
                  dispatch(decreaseItemQuantity(item.id)),
                    clearCartItem(item.quantity);
                }}>
                {item.quantity <= 1 ? (
                  <AntDesign name="delete" size={20} color="red" />
                ) : (
                  <AntDesign name="minus" size={20} />
                )}
              </TouchableOpacity>

              <Text style={styles.quantityupdate}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.increarseButton}
                onPress={() => dispatch(increaseItemQuantity(item.id))}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.mainHeader}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SuperFreshScreen')}>
            <AntDesign
              name="left"
              size={24}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Cart</Text>
        </View>
        <FlatList
          data={cartItem}
          renderItem={cartData}
          numColumns={1}
          keyExtractor={item => item.id}
        />
        <View style={styles.couponContainer}>
          <View style={styles.couponCode}>
            <Icon
              name="ticket-percent-outline"
              size={30}
              style={styles.couponIcon}
            />
            <TextInput style={styles.couponInput} placeholder="Coupon Code" />
          </View>
          <TouchableOpacity>
            <Text style={styles.apply}>Apply</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.billing}>
          <Text style={styles.billingText}>Bill Details</Text>
        </View>

        <CartBillingData text="Total" Count={'$' + CalculateTotalItemPrices} />
        <CartBillingData
          text="Delivery Charge"
          Count={'$' + CalculateDeliveryCharges}
        />
        <CartBillingData text="Coupon" />
        <CartBillingData text="Tax" Count={'$' + CalculateTax} />
        <CartBillingData text="Total" Count={'$' + CalculateTotalItemPrices} />
        <View style={styles.bottom}>
          <View>
            <Text style={styles.footerBar}>Total</Text>
            <Text style={styles.subTotal}>${CalculateSubTotal}</Text>
            <Text style={styles.saveMsg}>You Save $ 5 on this</Text>
          </View>
          <View style={styles.checkOut}>
            <TouchableOpacity
              onPress={() => {
                dispatch(
                  productBillingDetails(
                    CalculateDeliveryCharges,
                    CalculateTax,
                    CalculateSubTotal,
                    cartItem,
                  ),
                ),
                  navigation.navigate('StepIndicatorProgressBar');
              }}>
              <Text style={styles.checkoutButton}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;
