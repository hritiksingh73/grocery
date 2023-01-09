import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {Snackbar, Button} from 'react-native-paper';
import {addToCart, removeToCart} from '../../../redux/action/Action.js';
import styles from './styles.js';

import color from '../../../constant/color.js';
import GroceryProduct from '../../../data/GroceryProduct.js';

const WishListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();
  const dataItem = useSelector(state => state.cartData.productData);
  const screenHeight = Dimensions.get('window').height;

  const removeList = item => {
    dispatch(removeToCart(item));
    alert('Are you sure you want to remove this item');
  };

  const fruitData = ({item}) => {
    return (
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Super Fresh')}>
          <Image
            source={{uri: item.imageUrl}}
            style={styles.imageStyle}
            resizeMode="center"
          />
        </TouchableOpacity>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price} each</Text>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => {
            dispatch(addToCart(item));
            // console.log(item.id);
          }}>
          <Text style={styles.cart}>Add to Cart</Text>

          <AntDesign
            name="delete"
            size={20}
            style={styles.deleteStyle}
            onPress={removeList}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <AntDesign name="left" size={30} onPress={() => goBack()} />
        <Text style={styles.headingStyle}>WishList</Text>
      </View>

      <FlatList
        data={dataItem}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={fruitData}
      />
    </SafeAreaView>
  );
};

export default WishListScreen;
