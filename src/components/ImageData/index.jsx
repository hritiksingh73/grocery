import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {addToCart} from '../../redux/action/Action.js';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles.js';
import {getInitialData} from '../../redux/thunk/productThunk.js';
import {useNavigation} from '@react-navigation/native';

const ImageData = ({navigation}) => {
  const dispatch = useDispatch();
  const dataItem = useSelector(state => state.cartData.productData);
  const {goBack} = useNavigation();
  const {navigate} = useNavigation();

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  const productData = ({item}) => {
    return (
      <View style={styles.imageContainerStyle}>
        <TouchableOpacity
          onPress={() => navigate('Product Details', (product = item.id))}>
          <Image
            source={{uri: item.imageUrl}}
            style={styles.imageStyle}
            resizeMode="center"
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.priceText}>$ {item.price} each</Text>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => {
            dispatch(addToCart(item));
            // console.log(item.id);
          }}>
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={dataItem} numColumns={2} renderItem={productData} />
    </View>
  );
};

export default ImageData;
