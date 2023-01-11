import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ListItem from '../ListItem';
import {addCartProduct} from '../../redux/actions/userAction';
import {styles} from './styles';
import CategoryGridItem from '../../components/CategoryGridItem';
import {useNavigation} from '@react-navigation/native';
import {addToWishlist} from '../../redux/actions/userAction';
import Entypo from 'react-native-vector-icons/Entypo';
import {globalStyle} from '../../constant/globalStyle';

const ProductList = props => {
  const {numColumns, horizontal, style, onAddToCart} = props;
  const products = useSelector(state => state.productsReducer.products);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const renderGroceryProducts = ({item}) => {
    return (
      <View style={styles.productContainer}>
        <CategoryGridItem
          imgSource={{uri: item.imageUrl}}
          onPress={() =>
            navigation.navigate('Product Details', {
              productId: item.id,
            })
          }
        />
        <View style={styles.txtContainer}>
          <View style={globalStyle.itemDirection}>
            <Text>{item.title}</Text>
            <TouchableOpacity
              onPress={() => dispatch(addToWishlist(item))}
              style={styles.iconContainer}>
              <Entypo name="heart-outlined" size={20} />
            </TouchableOpacity>
          </View>
          <Text style={styles.priceTxt}>
            ${item.price} each{'     '}
            <Text style={styles.oldPrice}>${item.oldPrice}</Text>
          </Text>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => {
              onAddToCart;
              dispatch(addCartProduct(item));
            }}>
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ListItem
      data={products}
      renderItem={renderGroceryProducts}
      horizontal={horizontal}
      numColumns={numColumns}
      contentContainerStyle={props.contentContainerStyle}
      style={style}
    />
  );
};
export default ProductList;
