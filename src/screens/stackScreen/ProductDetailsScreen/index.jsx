import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import image from '../../../config/Image';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import strings from '../../../constant/strings';
import GroceryProduct from '../../../data/GroceryProduct';
import {addToCart} from '../../../redux/action/Action.js';
import {useDispatch, useSelector} from 'react-redux';

const ProductDetailsScreen = ({navigation, route}) => {
  const {goBack} = useNavigation();
  const [dataItem, setDataItem] = useState();
  const {productData} = useSelector(state => state.cartData);
  const item = useSelector(state => state.cartData.productData);

  const getProduct = route.params;
  const dispatch = useDispatch();

  const getClickItem = async () => {
    try {
      const response = await fetch(
        `https://grocery-backend-in.vercel.app/products/${getProduct}`,
      );
      const data = await response.json();
      console.log(data);
      setDataItem(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getClickItem();
  }, []);

  const itemDetail = ({item}) => {
    return (
      <View style={styles.mainImageStyle}>
        <Image source={{uri: item.imageUrl}} style={styles.imageStyle} />
        <Text style={styles.titleText} numberOfLines={1}>
          {item.title}
        </Text>

        <Text style={styles.priceStyle}>${item.price} each</Text>
        <Text style={styles.priceStyle}>${item.oldPrice}</Text>
        <Text style={styles.descriptionStyle}>
          Loreum Ipsum is simply dummy text of the printing and typesetting
          industry',
        </Text>
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
          }}>
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <AntDesign
          name="left"
          size={30}
          onPress={() => goBack()}
          style={styles.leftIconStyle}
        />
        <FlatList
          data={dataItem}
          keyExtractor={item => item.id}
          renderItem={item => itemDetail(item)}
        />
        <View style={styles.detailStyle}>
          <Text style={styles.detailText}>Detail</Text>
          <Text style={styles.oftenTextStyle}>Often Bought With</Text>
        </View>
        <View style={styles.mainHeading}>
          <Text style={styles.textStyle}>. sit amet consectetur</Text>
          <Text style={styles.textStyle}>. incidunt ipsum</Text>
          <Text style={styles.textStyle}>. Tempore doloremque aliquid</Text>
          <Text style={styles.textStyle}>. ipsum ab ratione </Text>
        </View>

        <View style={styles.headingText}>
          <Text style={styles.dataText}>{strings.heading1}</Text>
          <Text style={styles.dataText}>{strings.heading2}</Text>
        </View>
        <View style={styles.relatedStyle}>
          <Text style={styles.headingStyle}>Related Items</Text>
          <FlatList
            data={item}
            renderItem={popularProducts}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonStyle}>
        <TouchableOpacity
          style={[styles.bottomBtn, {backgroundColor: 'black'}]}>
          <Text style={styles.btnText}>Add to Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottomBtn, {backgroundColor: 'green'}]}>
          <Text style={styles.btnText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;
