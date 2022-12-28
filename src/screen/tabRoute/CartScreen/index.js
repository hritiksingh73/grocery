import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  IncCartItem,
  DecCartItem,
  RemoveItem,
} from '../../../redux/action/action';

import {styles} from './styles';
import images from '../../../config/image';
import Touchable from '../../../components/touchableOpacity';

const CartScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.counter.cart);

  const decreaseItem = item => {
    if (item.quantity >= 1) {
      dispatch(DecCartItem(item.id));
    } else {
      dispatch(RemoveItem(item.id));
    }
  };

  return (
    <ScrollView style={styles.conatiner}>
      <SafeAreaView>
        {/* <Text style={styles.title}>Cart</Text>
      <View>
        <Image source={images.shopKeeper1} style={styles.headImg} />
        <Text style={styles.headTxt}>Super Fresh</Text>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.flatcontainer}>
              <Image
                style={styles.imgcontain}
                source={item.image}
                resizeMode={'contain'}
              />
              <View>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.Price}</Text>
              </View>
              <View style={styles.mathcontain}>
                <TouchableOpacity
                  style={styles.incBtn}
                  onPress={() => dispatch(DecCartItem(item.id))}>
                  <Text style={styles.incTxt}>-</Text>
                </TouchableOpacity>
                <Text style={styles.num}>{item.quantity}</Text>
                <TouchableOpacity
                  style={styles.incBtn}
                  onPress={() => dispatch(IncCartItem(item.id))}>
                  <Text style={styles.incTxt}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      /> */}
        <View style={styles.innerContainer}>
          <View style={styles.headerConatiner}>
            <Ionicons name="chevron-back" size={25} />
            <Text style={styles.headTxt}>Cart</Text>
          </View>
          <View style={styles.headerConatinerTwo}>
            <Image source={images.shopKeeper1} style={styles.headImg} />
            <Text style={styles.superFreshTxt}>Super Fresh</Text>
          </View>

          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <View style={styles.flatcontainer}>
                  <Image
                    style={styles.imgcontain}
                    source={{uri: item.imageUrl}}
                    resizeMode={'contain'}
                  />
                  <Text style={styles.productName}>{item.title}</Text>
                  <Text style={styles.productPrice}>${item.price}</Text>
                  <View style={styles.calculateButton}>
                    <TouchableOpacity onPress={() => decreaseItem(item)}>
                      <Text style={styles.calculate}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.calculate}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => dispatch(IncCartItem(item.id))}>
                      <Text style={styles.calculate}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
          <View style={styles.couponCodeConatin}>
            <Ionicons name="card-outline" size={20} />
            <Text style={styles.couponText}>Coupon Code</Text>
            <Text style={styles.applyText}>Apply</Text>
          </View>
          <View style={styles.billDetailsCont}>
            <Text style={styles.billDetailHead}>Bill Details</Text>
            <View style={styles.billDInnerCont}>
              <Text style={styles.billDDataTitle}>Total{'      '}</Text>
              <Text style={styles.billDetailData}>$ 20</Text>
            </View>
            <View style={styles.billDInnerCont}>
              <Text style={styles.billDDataTitle}>Delivery</Text>
              <Text style={styles.billDetailData}>$ 20</Text>
            </View>
            <View style={styles.billDInnerCont}>
              <Text style={styles.billDDataTitle}>Coupon</Text>
              <Text style={styles.billDetailData}>$ 20</Text>
            </View>
            <View style={styles.billDInnerCont}>
              <Text style={styles.billDDataTitle}>Tax{'       '}</Text>
              <Text style={styles.billDetailData}>$ 20</Text>
            </View>
            <View style={styles.billDInnerCont}>
              <Text style={styles.subTotal}>Sub Total</Text>
              <Text style={styles.billTotalData}>$ 20</Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalAmount}>₹ 100</Text>
            <Text style={styles.discountMsg}>You save ₹ 5 on this</Text>
          </View>
          <View style={styles.spaceBetwwen}>
            <TouchableOpacity style={styles.checkOutBtn}>
              <Text style={styles.checkoutText}>CheckOut</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default CartScreen;
