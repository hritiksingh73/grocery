import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';

import styles from './styles';
import {addtoCart} from '../../../redux/action/action';

const PopularProduct = ({navigation}) => {
  const dispatch = useDispatch();
  const productDetail = useSelector(state => state.counter.productDetail);

  const deliverData = item => {
    dispatch(addtoCart(item));
    //console.log(item.id);
    firestore()
      .collection('Cart')
      .add({
        name: item.name,
        id: item.id,
        price: item.Price,
        oldPrice: item.oldPrice,
      })
      .then(() => {
        console.log('User added!');
      });
    navigation.navigate('Cart');
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name={'chevron-back'}
                size={30}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
            <Ionicons
              name={'notifications-outline'}
              size={30}
              style={styles.headerIconTwo}
            />
            <Text style={styles.headerTxt}>Popular Product</Text>
          </View>
        </View>
        <View style={styles.sorting}>
          <MaterialIcons name={'sort'} size={30} style={styles.sortIcon} />
          <Text style={styles.sortText}>Sort</Text>
          <Ionicons name={'ios-filter'} size={30} style={styles.sortIconTwo} />
          <Text style={styles.filterText}>Filter</Text>
        </View>
        <View>
          <FlatList
            data={productDetail}
            numColumns={'2'}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('detailItems', item.id)}>
                  <View style={styles.itemContainer}>
                    <View style={styles.innerSection}>
                      <View style={styles.block1}>
                        <Image
                          style={styles.bgimage}
                          source={{uri: item.imageUrl}}
                        />
                      </View>
                      <View style={styles.block1}>
                        <Text style={styles.productName}>{item.title}</Text>
                        <Text style={styles.productPrice}>
                          Rs. {item.price}
                        </Text>

                        <TouchableOpacity
                          style={styles.touchableArea}
                          onPress={() => {
                            deliverData(item);
                          }}>
                          <Text style={styles.AtoCBtn}>Add to Cart</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default PopularProduct;
