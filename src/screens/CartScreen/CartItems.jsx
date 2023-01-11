import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import {decreaseCartProduct} from '../../redux/actions/userAction';
import {useDispatch} from 'react-redux';
import {increaseCartProduct} from '../../redux/actions/userAction';
import {removeCartProduct} from '../../redux/actions/userAction';
import ModalComponent from '../../components/ModalComponent';

const CartItems = ({item}) => {
  const dispatch = useDispatch();
  const [isModalVisible, setisModalVisible] = useState(false);

  return (
    <View style={styles.productDetailContainer}>
      <Image
        source={{uri: item.imageUrl}}
        style={styles.imgStyle}
        resizeMode="center"
      />
      <View>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.priceTxt}>{item.price}</Text>
      </View>

      <View style={styles.cartBtnContainer}>
        <TouchableOpacity style={styles.cartButton}>
          {item.qty <= 1 ? (
            <AntDesign
              name="delete"
              size={20}
              color="red"
              onPress={() => setisModalVisible(true)}
            />
          ) : (
            <AntDesign
              name="minus"
              size={20}
              onPress={() => dispatch(decreaseCartProduct(item.id))}
            />
          )}
        </TouchableOpacity>

        <ModalComponent
          visible={isModalVisible}
          yesBtn={() => dispatch(removeCartProduct(item.id))}
          cancelBtn={() => setisModalVisible(false)}
        />

        <Text style={[styles.cartButton, styles.numTxt]}>{item.qty}</Text>

        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => dispatch(increaseCartProduct(item.id))}>
          <AntDesign name="plus" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CartItems;
