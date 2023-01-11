import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {styles} from './styles';
import ListItem from '../../components/ListItem';
import ProductList from '../../components/ProductList';
import {color} from '../../constant/color';
import {addCartProduct} from '../../redux/actions/userAction';
import {addToWishlist} from '../../redux/actions/userAction';
import {useDispatch} from 'react-redux';
import {globalStyle} from '../../constant/globalStyle';

const ProductDetails = item => {
  const route = useRoute();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const itemId = route.params.productId;

  const renderItemDetail = ({item}) => {
    return (
      <>
        <View style={styles.imgContainer}>
          <Image source={{uri: item.imageUrl}} style={styles.imgStyle} />
        </View>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price} each</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </>
    );
  };

  const getSelectedItemDetail = async () => {
    try {
      const response = await fetch(
        `https://grocery-backend-in.vercel.app/products/${itemId}`,
      );
      const json = await response.json();
      console.log(json);
      setProducts(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSelectedItemDetail();
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={{height: 360}}>
          <ListItem data={products} renderItem={renderItemDetail} />
        </View>
        <View style={styles.divider} />
        <Text style={styles.productsTxt}>Related Items</Text>

        <View style={styles.relatedProductContainer}>
          <ProductList
            horizontal={true}
            numColumns={0}
            style={globalStyle.productList}
          />
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={[styles.btnStyle, {backgroundColor: 'black'}]}
            onPress={() => dispatch(addToWishlist(item))}>
            <Text style={styles.btnTxt}>Add to Wishlist</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btnStyle, {backgroundColor: color.primary}]}
            onPress={() => dispatch(addCartProduct(item))}>
            <Text style={styles.btnTxt}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProductDetails;
