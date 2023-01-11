import React, {useState} from 'react';
import {View, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import ListItem from '../../components/ListItem';
import {addCartProduct} from '../../redux/actions/userAction';
import {removeFromWishlist} from '../../redux/actions/userAction';
import CategoryGridItem from '../../components/CategoryGridItem';
import ModalComponent from '../../components/ModalComponent';
import {globalStyle} from '../../constant/globalStyle';

const WishlistScreen = props => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();
  const wishlistProduct = useSelector(
    state => state.cartProductReducer.wishList,
  );
  const [isModalVisible, setisModalVisible] = useState(false);

  const yesBtnHandler = item => {
    dispatch(removeFromWishlist(item.id));
    setisModalVisible(false);
  };

  const ProductItem = item => {
    return (
      <View style={globalStyle.productScreen}>
        <View style={globalStyle.productDetailContainer}>
          <CategoryGridItem imgSource={{uri: item.imageUrl}} />
          <View style={globalStyle.itemDirection}>
            <Text>{item.title}</Text>
            <AntDesign
              name="delete"
              size={20}
              color="lightgrey"
              style={{marginLeft: '60%'}}
              onPress={() => setisModalVisible(true)}
            />
          </View>
          <Text style={globalStyle.priceTxt}>{item.price}</Text>

          <TouchableOpacity
            style={globalStyle.btnContainer}
            onPress={() => dispatch(addCartProduct(item))}>
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <AntDesign name="left" size={30} onPress={() => goBack()} />
        <Text style={globalStyle.headerText}>Wishlist</Text>
        <AntDesign
          name="shoppingcart"
          size={30}
          onPress={() => props.navigation.navigate('Cart')}
        />
      </View>

      <ListItem
        data={wishlistProduct}
        renderItem={({item}) => ProductItem(item)}
        numColumns={2}
      />
      <ModalComponent
        visible={isModalVisible}
        yesBtn={yesBtnHandler}
        cancelBtn={() => setisModalVisible(false)}
      />
    </SafeAreaView>
  );
};
export default WishlistScreen;
