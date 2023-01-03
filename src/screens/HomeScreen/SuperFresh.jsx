import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useState} from 'react';
import {ScrollView} from 'react-native-virtualized-view';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Tree from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import {Rating} from 'react-native-ratings';
import {addItemToCart} from '../../redux/action/Action';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import {Banner} from '../../dummyData/Cards';
import {Color} from '../../constant/Color';
import Carousel from 'react-native-reanimated-carousel';
import {Snackbar} from 'react-native-paper';

const SuperFreshScreen = () => {
  const dispatch = useDispatch();
  const {isFetching, productData} = useSelector(state => state.userInfo);
  const navigation = useNavigation();
  const selecteditems = useSelector(state => state.userInfo.cart);
  const userData = useSelector(state => state.userInfo.loginpage);
  const width = Dimensions.get('window').width;
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => {
    setVisible(!visible);
  };

  const onDismissSnackBar = () => {
    setVisible(false);
  };

  const cartItem = item => {
    firestore()
      .collection('Cart')
      .doc(userData.uid)
      .set({
        selecteditems,
      })
      .then(() => {
        console.log('item added to firestore!!');
      });
  };

  const popularProductData = ({item}) => {
    return (
      <View style={styles.relatedItemContainer}>
        <View style={styles.relatedItemImagecard}>
          <Image source={{uri: item.imageUrl}} style={styles.imgStyle} />
          <Text style={styles.relatedItemImageTitle}>{item.title}</Text>

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
      </View>
    );
  };

  const ListData = ({item}) => {
    return (
      <View style={styles.card}>
        <Image source={{uri: item.imageUrl}} style={styles.imgStyle} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.priceBracket}>
          <Text style={styles.price}>${item.price}each</Text>
          <Text style={styles.oldPrice}>${item.oldPrice}</Text>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            dispatch(addItemToCart(item)), cartItem(item), onToggleSnackBar;
          }}>
          <Text style={styles.addtocart}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const bannerImages = ({item}) => {
    return (
      <View style={styles.carousal}>
        <ImageBackground style={styles.cardImage} source={item.image} />
        <Text style={styles.imageTitle}>Super Fresh</Text>
        <Text style={styles.imagedescription}>{item.title}</Text>
      </View>
    );
  };

  return (
    <ScrollView nestedScrollEnabled={true}>
      <SafeAreaView style={{backgroundColor: 'white'}}>
        <ActivityIndicator animating={isFetching} />
        <View style={styles.headerBar}>
          <Tree name="ios-menu-outline" size={25} color={Color.black} />
          <Text style={styles.headertitle}>Super Fresh</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('NotificationScreen');
            }}>
            <Bell name="bell-badge-outline" size={25} color={Color.black} />
          </TouchableOpacity>
        </View>

        <View style={styles.ratingcontainerchild}>
          <Image
            source={require('../../asset/grocerry.jpeg')}
            style={styles.headerIcon}
          />
          <View style={styles.ratingcontainer}>
            <Text style={styles.secondheader}>Super Fresh</Text>
            <Rating imageSize={15} ratingCount={5} />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('WishListScreen')}>
            <Icon
              name="hearto"
              size={25}
              color={Color.black}
              style={styles.wishlist}
            />
          </TouchableOpacity>
        </View>
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={Banner}
          scrollAnimationDuration={1000}
          renderItem={item => bannerImages(item)}
        />

        <View style={{zIndex: 1}}>
          <Snackbar
            wrapperStyle={{top: 330}}
            visible={onToggleSnackBar}
            anchorOrigin={{
              horizontal: "left",
              vertical: "bottom",
            }}
            duration={1000}
            // action={{
            //   label: 'close',
            //   onPress: () => {
            //     onDismiss={onDismissSnackBar}
            //   },
            // }}
            // style={{width:Dimensions.get('window').width}}
            onDismiss={onDismissSnackBar}
            collapsable={true}>
            added in cart
          </Snackbar>
        </View>
        <View style={styles.popularProductContainer}>
          <Text style={styles.popularProducts}>Popular Product</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('PopularProduct')}>
            <Icon name="right" size={25} style={styles.viewMore} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={productData}
          keyExtractor={item => item.id}
          renderItem={item => popularProductData(item)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.popularProductContainer}>
          <Text style={styles.popularProducts}>Trending near you </Text>
        </View>
        <FlatList
          data={productData}
          renderItem={item => ListData(item)}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </SafeAreaView>
    </ScrollView>
  );
};
export default SuperFreshScreen;
