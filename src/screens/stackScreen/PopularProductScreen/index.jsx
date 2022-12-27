import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';

import {addToCart} from '../../../redux/action/Action.js';
import styles from './styles.js';
import {getInitialData} from '../../../redux/thunk/productThunk.js';

import color from '../../../constant/color.js';
import GroceryProduct from '../../../data/GroceryProduct.js';

const PopularProductScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();
  const dataItem = useSelector(state => state.cartData.productData);

  const addList = item => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  const popularProductData = ({item}) => {
    return (
      <View style={styles.data}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Product Details', (productItem = item.id))
          }>
          <Image
            source={{uri: item.imageUrl}}
            style={styles.imageStyle}
            resizeMode="center"
          />
        </TouchableOpacity>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price} each</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addList(item);
            // console.log(item.id);
          }}>
          <Text style={styles.cart}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.product}>
        <AntDesign name="left" size={30} onPress={() => goBack()} />
        <Text style={styles.text}>Poppular Products</Text>
        <Icon name="bell-badge-outline" size={30} />
      </View>
      <View style={styles.main}>
        <View style={styles.sort}>
          <View style={styles.item}>
            <TouchableOpacity
              style={styles.topHeader}
              onPress={() => navigation.navigate('Sort')}>
              <MaterialCommunityIcons name={'sort-descending'} size={25} />
              <Text style={styles.sortItem}>Sort</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.filter}>
            <AntDesign name="filter" size={20} style={styles.size} />
            <Text style={styles.filterItem}>Filter</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={dataItem}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={popularProductData}
      />
    </SafeAreaView>
  );
};

export default PopularProductScreen;
