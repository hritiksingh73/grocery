import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';
import axios from 'axios';

import AntDesign from 'react-native-vector-icons/AntDesign';
import strings from '../../constant/String/strings';
import styles from './styles';
import {addItemToCart,addItemToWishList} from '../../redux/action/Action';

const ProductDetailsScreen = ({route}) => {
  const {productData} = useSelector(state => state.userInfo);
  //const item = useSelector(state => state.userInfo.wishList);
  const navigation = useNavigation();
  const [itemData, setItemData] = useState();
console.log(itemData)
  const receivedproductItem = route.params;
  dispatch = useDispatch();
  //console.log(itemData)
  const getSelectedItem = async () => {
  
    try {
      const response = await axios.get(
        `https://grocery-backend-in.vercel.app/products/${receivedproductItem}`,
      );
      setItemData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSelectedItem();
  }, []);

  const itemdescription = ({item}) => {
    return (
      <View style={styles.card}>
        <Image source={{uri: item.imageUrl}} style={styles.imgStyle} />
        <Text style={styles.itemTitle} numberOfLines={1}>
          {item.title}
        </Text>

        <View style={styles.priceBracket}>
          <Text style={styles.price}>${item.price} each</Text>
          <Text style={styles.oldPrice}>${item.oldPrice}</Text>
        </View>
      </View>
    );
  };
  const ListData = ({item}) => {
    return (
      // <View style={styles.relatedItemContainer}>
      <View style={styles.relatedItemImagecard}>
        <Image source={{uri: item.imageUrl}} style={styles.imgStyle} />
        <Text style={styles.relatedItemImageTitle} numberOfLines={1}>
          {item.title}
        </Text>

        <View style={styles.relatedItemPriceBracket}>
          <Text style={styles.relatedItemprice}>${item.price} each</Text>
          <Text style={styles.relatedItemOldPrice}>${item.oldPrice}</Text>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            dispatch(addItemToCart(item));
          }}>
          <Text style={styles.addtocart}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      // </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.container}>
          <AntDesign
            name="left"
            size={30}
            onPress={() => navigation.goBack()}
          />
          <FlatList
            data={itemData}
            keyExtractor={item => item.id}
            renderItem={item => itemdescription(item)}
          />
          <View style={styles.itemDescriptionContainer}>
            <Text style={styles.itemDescription}>{strings.paragraph1}</Text>
            <Text style={styles.itemDescription}>{strings.paragraph2}</Text>
            <Text style={styles.itemDescription}>{strings.paragraph3}</Text>
          </View>
          <Text style={styles.footerheading}>Related Items</Text>

          <FlatList
            data={productData}
            keyExtractor={item => item.id}
            renderItem={item => ListData(item)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.buttonStyle}>
          <TouchableOpacity style={styles.footerButtonLeft} onPress={() => dispatch(addItemToWishList(itemData))}>
            <Text style={styles.btnText}>Add to Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButtonRight}>
            <Text style={styles.btnText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;
