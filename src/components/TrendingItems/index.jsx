import React from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AddFruitsToCart} from '../../redux/action/action';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const TrendingItems = props => {
  const data = props.data;
  var isItemAvailable = false;

  const navigation = useNavigation();

  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cartReducer.fruitCart);

  const SetDataToCartScreen = item => {
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].id === item.id) {
        var isItemAvailable = true;
      }
    }
    if (!isItemAvailable) {
      dispatch(AddFruitsToCart(item));
    } else {
      alert('Item Already added to Cart');
    }
  };

  return (
    <View style={styles.popularProductContainer}>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={styles.productList}>
              <TouchableOpacity onPress={() => {navigation.navigate('ItemDetails', {Item: item.id})}}>
              <View style={styles.imgContainer}>
                  <Image
                    style={styles.itemImage}
                    resizeMode="contain"
                    source={{uri: item.imageUrl}}
                  />
              </View>
              <View style={styles.txtContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>

                <Text style={styles.mrpBlock}>
                  <Text style={styles.itemMrp}>₹{item.price} each   </Text>
                  <Text style={styles.itemMaxMrp}>₹{item.oldPrice} </Text>
                </Text>

                <TouchableOpacity
                  style={styles.addToCartContainer}
                  onPress={() => SetDataToCartScreen(item)}>
                  <Text style={styles.addToCartBtn}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TrendingItems;
