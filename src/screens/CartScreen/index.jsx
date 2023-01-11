import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './styles';
import CartItems from './CartItems';
import ListItem from '../../components/ListItem';
import image from '../../config/image';
import BillDetails from '../../components/BillDetails';
import CustomButton from '../../components/Button';
import {globalStyle} from '../../constant/globalStyle';

export default function CartScreen({navigation}, item) {
  const cartData = useSelector(state => state.cartProductReducer.cartProducts);

  const getTotalPrice = () => {
    return cartData.reduce(
      (total, item) => total + parseInt(item.price, 10) * item.qty,
      0,
    );
  };

  return (
    <>
      {cartData == '' ? (
        <View style={styles.cartImgContainer}>
          <Image source={image.cart} style={styles.cartImgStyle} />
          <Text style={styles.emptyCartTxt}>Hey, it feels so light!</Text>
          <Text style={styles.emptyBag}>
            There is nothing in your bag. Let's add some items.
          </Text>
          <CustomButton
            icon="cart"
            btnTitle="Go Shopping"
            onPress={() => navigation.navigate('Popular Products')}
          />
        </View>
      ) : (
        <ScrollView style={globalStyle.container}>
          <ListItem
            data={cartData}
            renderItem={({item}) => (
              <CartItems
                item={item}
                onAddToCart={() => {
                  dispatch(addCartProduct(item));
                }}
              />
            )}
            ItemSeparatorComponent={() => {
              return <View style={styles.itemDivider}></View>;
            }}
          />
          <View style={styles.itemDivider}></View>
          <View style={styles.billingDetailContainer}>
            <Text style={styles.coupon}>Coupon Code</Text>
            <Text style={styles.apply}>Apply</Text>
          </View>
          <View style={styles.itemDivider}></View>
          <Text style={styles.billDetail}>Bill Details</Text>

          <BillDetails detail="total" price="$0.27" />
          <BillDetails detail="Delivery Charge" price="$0.27" />
          <BillDetails detail="Coupon" price="$0.27" />
          <BillDetails detail="Tax" price="$0.27" />
          <BillDetails detail="Sub Total" price="$0.27" />
        </ScrollView>
      )}
      <View style={styles.bottomContainer}>
        <View style={{margin: 10}}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.totalPrice}>$ 0.25</Text>
          <Text style={{color: 'white'}}>you save $ 5 on this</Text>
        </View>

        <View style={styles.checkoutBtn}>
          <CustomButton
            btnTitle="Checkout"
            onPress={() => navigation.navigate('Checkout')}
          />
        </View>
      </View>
    </>
  );
}
