import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AddFruitsToCart, RemoveToWishlist} from '../../redux/action/action';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const ItemList = props => {
  const {data, showHorizontal} = props;
  const {width} = useWindowDimensions();
  const userWishlist = useSelector(state => state.user.userWishlist);
  var isItemAvailable = false;
  var resp = [];

  if (data === userWishlist) {
    console.log('kkkk', data);
  }

  const navigation = useNavigation();

  const dispatch = useDispatch();
  const [addToCartData, setAddToCartData] = useState([]);
  const cartData = useSelector(state => state.cartReducer.fruitCart);
  const userID = useSelector(state => state.user.userID);

  // const FireSotreDataHandler = async item => {
  //   // await firestore()
  //   // .collection('Cart')
  //   // .doc('ABC')
  //   // .get()
  //   // .then(documentSnapshot => {
  //   //   if (documentSnapshot.exists) {
  //   //     // setAddToCartData(documentSnapshot.data().resp.push(item))
  //   //     // let res = documentSnapshot.data().cartItem;
  //   //     let res = documentSnapshot.data().resp
  //   //     res.push(item)
  //   //     resp = res
  //   //     // setAddToCartData(res)
  //   //     // documentSnapshot.data().resp.push(item)
  //   //     console.log('User data: ', documentSnapshot.data().resp);
  //   //     // console.log('User data2: ', res);

  //   //   //   a.push(item)
  //   //   // setAddToCartData(a)
  //   //   // console.log('data: ', addToCartData)
  //   //   }
  //   // })
  //   await firestore()
  //     .collection('Cart')
  //     // .doc(userID)
  //     .doc('ABC')
  //     .set({cartData});
  //   //   .then(() => {
  //   // console.log('Cart data added!');
  //   // });
  // };

  const SetDataToCartScreen = item => {
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].id === item.id) {
        var isItemAvailable = true;
      }
    }
    if (!isItemAvailable) {
      dispatch(AddFruitsToCart(item));
      // FireSotreDataHandler(item);
    } else {
      alert('Item Already added to Cart');
    }
  };

  return (
    <FlatList
      data={data}
      numColumns={showHorizontal === true ? '1' : '2'}
      horizontal={showHorizontal === true ? true : false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <View
            style={[
              styles.itemOuterContainer,
              {width: width / 2, height: (width * 80) / 100},
            ]}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ItemDetails', {Item: item.id});
              }}>
              <View style={[styles.imgContainer, {height: (width * 40) / 100}]}>
                <Image
                  style={styles.itemImage}
                  resizeMode="contain"
                  source={{uri: item.imageUrl}}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>

                <Text style={styles.mrpBlock}>
                  <Text style={styles.itemMrp}>${item.price} each </Text>
                  <Text style={styles.itemMaxMrp}>${item.oldPrice} </Text>
                </Text>

                <View
                  style={
                    data === userWishlist
                      ? styles.deleteBtnBlock
                      : styles.enptyStyle
                  }>
                  <TouchableOpacity
                    style={
                      data === userWishlist
                        ? styles.addToCartContainerWishlist
                        : styles.addToCartContainer
                    }
                    onPress={() => {
                      SetDataToCartScreen(item);
                    }}>
                    <Text style={styles.addToCartBtn}>Add to Cart</Text>
                  </TouchableOpacity>

                  {data === userWishlist ? (
                    <TouchableOpacity
                      style={
                        data === userWishlist
                          ? styles.addToCartContainerWishlist
                          : styles.addToCartContainer
                      }
                      onPress={() => dispatch(RemoveToWishlist(item.id))}>
                      <View style={styles.deleteWishlistBtn}>
                        <Feather name={'trash-2'} size={22} />
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <View></View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

export default ItemList;
