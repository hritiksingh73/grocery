import React, {useEffect} from 'react';
import {
  View,
  Alert,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';
import {Chip} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addToCart} from '../../../redux/action/Action.js';
import {getInitialData} from '../../../redux/thunk/productThunk.js';

import GroceryProduct from '../../../data/GroceryProduct.js';
import styles from './styles.js';
import ChipComponent from '../../../components/ChipComponent';

const SearchScreen = ({navigation}) => {
  const dataItem = useSelector(state => state.cartData.productData);
  const dispatch = useDispatch();
  const {goBack} = useNavigation();

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <AntDesign name="left" size={20} onPress={() => goBack()} />
          <Text style={styles.searchTextStyle}>Search</Text>
        </View>
        <View style={styles.inputStyle}>
          <Icon name="search1" size={20} style={styles.searchIconStyle} />
          <TextInput placeholder="Search items" style={styles.textInputStyle} />
        </View>
        <View>
          <Text style={styles.headingText}>Recent Searches</Text>
        </View>
        <ChipComponent />
        <Text style={styles.headingText}>Recommended</Text>
        <FlatList
          data={dataItem}
          renderItem={popularProducts}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
