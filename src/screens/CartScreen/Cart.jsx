import React, {useState} from 'react';
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
} from '../../redux/action/Action';
import CartBillingData from '../../component/CartBillingData/CartBillingData';

const Cart = () => {
  const item = useSelector(state => state.userInfo.cart);
  const dispatch = useDispatch();
  const [isModalVisible, setisModalVisible] = useState(false);
  const navigation = useNavigation();

  const clearCartItem = item => {
    console.log('Cart Item Remove on Count ----->', item);
    if (item <= 1) {
      dispatch(removeItemFromCart(item));
    } else {
    }
  };

  const ItemPrice = item.map(value => {
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
  const modalClose = () => {
    setisModalVisible(false), navigation.navigate('SuperFreshScreen');
  };
  const modalOpen = () => {
    setisModalVisible(true);
  };

  const cartData = ({item}) => {
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
    <ScrollView nestedScrollEnabled={true}>
      <SafeAreaView style={styles.parent}>
        <View style={styles.mainHeader}>
          <AntDesign name="left" size={24} color="black" style={styles.icon} />
          <Text style={styles.title}>Cart</Text>
        </View>
        <FlatList
          data={item}
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
            <TouchableOpacity onPress={modalOpen}>
              <Text style={styles.checkoutButton}>Checkout</Text>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="fade"
            visible={isModalVisible}
            transparent={true}>
            <View style={styles.modalcontainer}>
              <View style={styles.modal}>
                <Text style={styles.modalCartMessage}>
                  Your Order has been placed Successfully
                </Text>
                <TouchableOpacity
                  onPress={modalClose}
                  style={styles.modalOkButtonContainer}>
                  <Text style={styles.modalOkButton}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Cart;
