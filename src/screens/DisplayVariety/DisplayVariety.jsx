import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import DropDown from '../../component/DropDown';

const DisplayVariety = () => {
  const {productData} = useSelector(state => state.userInfo);
  const navigation = useNavigation();

  const shoppingCards = ({item}) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
          <View style={styles.mainContainer}>
            <View style={styles.imgContainer}>
              <Image style={styles.imageCard} source={{uri: item.imageUrl}} />
              <Text style={styles.imageTitle}>{item.title}</Text>
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
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <DropDown />
      <View style={styles.searchBar}>
        <Icon name="search1" size={20} style={styles.searchIcon} />
        <TextInput placeholder="Find Store" style={styles.txtFields} />
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={productData}
        renderItem={shoppingCards}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default DisplayVariety;
