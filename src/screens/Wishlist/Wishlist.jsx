import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {useDispatch, useSelector} from 'react-redux';
import Arrow from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {removeItemFromWishList, addItemToCart} from '../../redux/action/Action';

const WishListScreen = () => {
  const item = useSelector(state => state.userInfo.wishList);
  console.log('WishList Screen====>>>>>', item);
  const navigation = useNavigation();
  dispatch = useDispatch();

  const ListData = ({item}) => {
    return (
      <View style={styles.card}>
        <Image source={{uri: item.imageUrl}} style={styles.imgStyle} />
        <Text style={styles.itemTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <View style={styles.priceBracket}>
          <Text style={styles.price}>${item.price}each</Text>
          <Text style={styles.oldPrice}>${item.oldPrice}</Text>
        </View>
        <View style={styles.itemButtons}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              dispatch(addItemToCart(item));
            }}>
            <Text style={styles.addtocart}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(removeItemFromWishList(item.id));
            }}>
            <Icon name="delete" size={24} style={styles.bin} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView nestedScrollEnabled={true}>
      <SafeAreaView>
        <View style={styles.mainHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow name="left" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.wishList}>WishList</Text>
        </View>
      </SafeAreaView>

      <FlatList
        data={item}
        renderItem={item => ListData(item)}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </ScrollView>
  );
};
export default WishListScreen;
