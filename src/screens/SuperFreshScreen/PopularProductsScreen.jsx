import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

import {styles} from './styles';
import {addCartProduct} from '../../redux/actions/userAction';
import {getProducts} from '../../redux/thunk/productsThunk';
import {globalStyle} from '../../constant/globalStyle';
import ProductList from '../../components/ProductList';

const PopularProductsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();

  const cartItems = useSelector(state => state.cartProductReducer.cartProducts);
  const userInfo = useSelector(state => state.userDataReducer.userDetails);
  const products = useSelector(state => state.productsReducer.products);

  useEffect(() => {
    dispatch(getProducts());
    // console.log('products----->', products);
  }, []);

  const onAddToCart = item => {
    dispatch(addCartProduct(item));
    firestore()
      .collection('Cart')
      .doc(userInfo.uid)
      .set({
        cartItems,
      })
      .then(() => {
        console.log('Item added!');
      });
  };

  return (
    <SafeAreaView style={globalStyle.container}>
      <View style={globalStyle.header}>
        <AntDesign name="left" size={30} onPress={() => goBack()} />
        <Text style={globalStyle.headerText}>Popular Products</Text>
        <MaterialIcon
          name="bell-badge-outline"
          size={30}
          onPress={() => navigation.navigate('Notifications')}
        />
      </View>

      <View style={[styles.itemDivider, styles.bottomLine]} />
      <View style={styles.sortedItem}>
        <View style={[globalStyle.itemDirection, {marginBottom: 15}]}>
          <Fontisto name="list-1" size={16} />
          <Text> Sort</Text>
        </View>

        <View style={globalStyle.itemDirection}>
          <AntDesign name="filter" size={20} />
          <Text> Filter</Text>
        </View>
      </View>
      <ProductList
        horizontal={false}
        numColumns={2}
        onAddToCart={onAddToCart}
      />
    </SafeAreaView>
  );
};
export default PopularProductsScreen;
