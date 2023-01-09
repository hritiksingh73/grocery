import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Rating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

import GroceryProduct from '../../../data/GroceryProduct.js';
import {addToCart} from '../../../redux/action/Action.js';
import SuperFreshItem from '../../../data/SuperFreshItem.js';
import styles from './styles.js';
import color from '../../../constant/color.js';
import image from '../../../config/Image.js';

import {getInitialData} from '../../../redux/thunk/productThunk.js';
import Carousel from 'react-native-reanimated-carousel';
import CarouselData from '../../../components/CarouselData';
import ImageData from '../../../components/ImageData';

const SuperFreshScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.userData.userRecord);
  const dataItem = useSelector(state => state.cartData.productData);
  const cartList = useSelector(state => state.cartData.cartProducts);
  const userID = useSelector(state => state.userData.userID);
  const width = Dimensions.get('window').width;
  const FirestoreItem = item => {
    firestore()
      .collection('Cart')
      .doc(userID)
      .set({
        ...cartList,
      })
      .then(() => {
        // console.log('User added!');
      });
  };

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  const carouselData = ({item}) => {
    return (
      <View style={styles.mainImageStyle}>
        <Image source={item.image} style={styles.imageBrderStyle} />
        <Text style={styles.fresh}>Super Fresh</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  const popularProducts = ({item}) => {
    return (
      <View style={styles.imageBoxStyle}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Product Details', (product = item.id))
          }>
          <Image source={{uri: item.imageUrl}} style={styles.image} />
        </TouchableOpacity>

        <Text style={styles.titleText} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.priceText}>${item.price}</Text>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => {
            dispatch(addToCart(item));
            FirestoreItem(item);
          }}>
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.icon}>
          <Icon name="bars" size={20} />
          <Text style={styles.text}>Super Fresh</Text>
          <Icon
            name="bells"
            size={20}
            onPress={() => {
              navigation.navigate('Notification');
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <View style={styles.vegetableImage}>
            <Image source={image.vegetable} style={styles.freshImage} />
            <View>
              <Text style={styles.superFresh}>Super Fresh</Text>
              <Rating imageSize={15} ratingCount={5} />
            </View>
            <View style={styles.heart}>
              <Icon
                name="hearto"
                size={24}
                style={styles.heartIcon}
                onPress={() => {
                  navigation.navigate('WishList');
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <CarouselData item={SuperFreshItem} renderItem={carouselData} />

        <View style={styles.mainHeadingStyle}>
          <Text style={styles.headingStyle}>Popular Products</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Popular Products')}>
            <Icon name="arrowright" size={25} style={styles.arrowIconStyle} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={dataItem}
          renderItem={popularProducts}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
        />
        <View style={styles.trendingStyle}>
          <Text style={styles.trendingTextStyle}>Trending near you</Text>
        </View>
        <ImageData />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SuperFreshScreen;
