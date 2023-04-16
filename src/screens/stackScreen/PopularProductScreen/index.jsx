import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {Snackbar} from 'react-native-paper';
import { ScrollView } from 'react-native-virtualized-view'
import {addToCart} from '../../../redux/action/Action.js';
import styles from './styles.js';

import color from '../../../constant/color.js';
import GroceryProduct from '../../../data/GroceryProduct.js';
import FruitsData from '../../../components/FruitsData';

const PopularProductScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();
  const products = useSelector(state => state.cartData.products);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
      <View style={styles.headingStyle}>
        <AntDesign name="left" size={30} onPress={() => goBack()} />
        <Text style={styles.headingText}>Popular Products</Text>
        <Icon
          name="bell-badge-outline"
          size={30}
          onPress={() => navigation.navigate('Notification')}
        />
      </View>
      <View style={styles.mainHeader}>
        <View style={styles.sortStyle}>
          <View style={styles.headerStyle}>
            <TouchableOpacity
              style={styles.topHeader}
              onPress={() => navigation.navigate('Sort')}>
              <MaterialCommunityIcons name={'sort-descending'} size={25} />
              <Text style={styles.sortItem}>Sort</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.filterStyle}>
            <AntDesign name="filter" size={20} style={styles.filterIcon} />
            <Text style={styles.filterItem}>Filter</Text>
          </View>
        </View>
      </View>
      <FruitsData />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PopularProductScreen;