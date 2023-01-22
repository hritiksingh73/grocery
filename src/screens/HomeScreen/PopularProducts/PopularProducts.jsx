import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import {getInitialData} from '../../../redux/thunk/ProductThunk';
import styles from './styles';
import Sort from 'react-native-vector-icons/Octicons';
import Filter from 'react-native-vector-icons/Ionicons';
import {addItemToCart} from '../../../redux/action/Action';

const PopularProducts = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.userInfo.productData);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  const ListData = ({item}) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              'ProductDetailsScreen',
              (productItem = item.id),
              //console.log(productItem)
            )
          }>
          <View style={styles.imgContainer}>
            <Image source={{uri: item.imageUrl}} style={styles.imgStyle} />
            <Text style={styles.itemTitle}>{item.title}</Text>
            <View style={styles.priceBracket}>
              <Text style={styles.price}>${item.price} each</Text>
              <Text style={styles.oldPrice}>${item.oldPrice}</Text>
            </View>

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => {
                dispatch(addItemToCart(item));
              }}>
              <Text style={styles.addtocart}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.headerBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SuperFreshScreen')}>
          <Icon name="chevron-left" size={30} />
        </TouchableOpacity>
        <Text style={styles.popularProducts}>Popular Products</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NotificationScreen');
          }}>
          <Bell name="bell-badge-outline" size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.choices}>
        <View style={styles.filter}>
          <Sort name="sort-desc" size={24} color="black" />
          <Text style={styles.choicebracket}>Sort</Text>
        </View>

        <View style={styles.filter}>
          <Filter name="filter" size={24} color="black" />
          <Text style={styles.choicebracket}>Filter</Text>
        </View>
      </View>
      <FlatList
        data={items}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={ListData}
      />
    </SafeAreaView>
  );
};

export default PopularProducts;
