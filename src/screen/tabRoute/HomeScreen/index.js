import React, {useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import Carousel from 'react-native-reanimated-carousel';
import firestore from '@react-native-firebase/firestore';

import homedata from '../../../staticData/homedata';
import {addtoCart} from '../../../redux/action/action';
import {styles} from './styles';
import images from '../../../config/image';
import {fetchProductDetail} from '../../../redux/api';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const productDetail = useSelector(state => state.counter.productDetail);

  useEffect(() => {
    dispatch(fetchProductDetail());
  }, []);

  const deliverData = item => {
    //console.log(item.id);
    firestore()
      .collection('Cart')
      .add({
        name: item.title,
        id: item.id,
        price: item.price,
        oldPrice: item.oldPrice,
      })
      .then(() => {
        //console.log('User added!');
      });
    dispatch(addtoCart(item));
    navigation.navigate('Cart');
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.constainer}>
        <View style={styles.innerContainer}>
          <View style={styles.header}>
            <Feather
              name={'align-justify'}
              size={30}
              style={styles.headerIcon}
            />
            <Ionicons
              name={'notifications-outline'}
              size={30}
              style={styles.headerIconTwo}
            />
            <Text style={styles.headerTxt}>Super Fresh</Text>
          </View>

          <View style={styles.superFresh}>
            <View style={styles.flexStyl}>
              <Image style={styles.imgStyle} source={images.Lettuce} />
              <Text style={styles.headertitle}>Super Fresh</Text>
              <Feather name={'chevron-down'} size={20} />
              <Feather name={'heart'} size={28} style={styles.heartIcon} />
            </View>
          </View>
          <View>
            <FlatList
              data={homedata}
              horizontal={true}
              renderItem={({item}) => {
                return (
                  <View style={styles.horizontalSlidebar}>
                    <Image style={styles.bgimage} source={item.image} />
                  </View>
                );
              }}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('popularProduct')}>
              <Text style={styles.PopTxt}>Poppular Products</Text>
            </TouchableOpacity>
          </View>

          <View>
            <FlatList
              data={homedata}
              horizontal={true}
              renderItem={({item}) => {
                return (
                  <View style={styles.itemContainer}>
                    <View style={styles.innerSection}>
                      <View style={styles.block1}>
                        <Image style={styles.bgimage} source={item.image} />
                      </View>

                      <View style={styles.block1}>
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productPrice}>
                          Rs. {item.Price}
                        </Text>

                        <TouchableOpacity
                          style={styles.touchableArea}
                          onPress={() => deliverData(item)}>
                          <Text style={styles.AtoCBtn}>Add to Cart</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          <View>
            <Text style={styles.PopTxt}>Trending near you</Text>
          </View>

          <View style={styles.trendingNearContain}>
            <FlatList
              data={productDetail}
              numColumns={'2'}
              renderItem={({item}) => {
                return (
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
                          ${item.price} each {'         '}${item.oldPrice}
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
                );
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default HomeScreen;
