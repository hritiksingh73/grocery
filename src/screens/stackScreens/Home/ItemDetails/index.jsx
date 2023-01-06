import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import TrendingItems from '../../../../components/TrendingItems';
import Fruits from '../../../../data/localFruitsapi/FruitsApi';
import globaStyle from '../../../../constants/globalStyle';
import styles from './styles';
import strings from '../../../../constants/strings';
import colors from '../../../../constants/colors';

const ItemDetails = ({navigation, route}) => {
  const ItemID = route.params.Item;
  const [itemDetail, setItemDetail] = useState([]);
  const productData = useSelector(state => state.user.productData);

  const selectedItem = async () => {
    try {
      const getData = await fetch(
        `https://grocery-backend-in.vercel.app/products/${ItemID}`,
      );
      const jsonResponse = await getData.json();
      setItemDetail(jsonResponse[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    selectedItem();
  }, []);

  return (
    <SafeAreaView style={globaStyle.outerContainer}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather style={styles.goBackIcon} name={'chevron-left'} size={25} />
        </TouchableOpacity>

        <View style={styles.itemBlock}>
          <View style={styles.bgImgBoxStyle}>
            <Image
              resizeMode="contain"
              style={styles.bgImgStyle}
              source={{uri: itemDetail.imageUrl}}
            />
          </View>

          <View style={styles.subItemsBox}>
            <View style={styles.subItemBox}>
              <Image
                source={require('../../../../assets/images/fruits/Banana/Banana_img3.jpg')}
                resizeMode="cover"
                style={styles.bgImgStyle}
              />
            </View>
            <View style={styles.subItemBox}>
              <Image
                source={require('../../../../assets/images/fruits/Banana/Banana_img3.jpg')}
                resizeMode="cover"
                style={styles.bgImgStyle}
              />
            </View>
            <View style={styles.subItemBox}>
              <Image
                source={require('../../../../assets/images/fruits/Banana/Banana_img3.jpg')}
                resizeMode="cover"
                style={styles.bgImgStyle}
              />
            </View>
          </View>
        </View>

        <View style={styles.horizontalMargin}>
          <Text style={styles.title}>{itemDetail.title}</Text>

          <View style={styles.priceRow}>
            <Text style={styles.newPrice}>₹{itemDetail.price} each</Text>
            <Text style={styles.oldPrice}>₹{itemDetail.oldPrice}</Text>
            {/* <Text style={styles.quantityStyl}>/{SelectedData[0].quantity}</Text> */}
          </View>

          <Text style={styles.dummyTxt}>{strings.txt5}</Text>
          <Text style={styles.dummyTxt_2}>{strings.txt6}</Text>
          <Text style={styles.dummyTxt_2}>{strings.txt6}</Text>
        </View>

        <View style={styles.horizontalBar}></View>

        <TouchableOpacity onPress={() => navigation.navigate('Fruits')}>
          <Text style={styles.productHeading}>Related Items</Text>
        </TouchableOpacity>
        <TrendingItems data={productData} />

        <View style={styles.bottomBtnBar}>
          <TouchableOpacity
            style={[styles.bottomBtn, {backgroundColor: colors.black_10}]}>
            <Text style={styles.btnTxtColor}>Add to Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.bottomBtn, {backgroundColor: colors.green}]}>
            <Text style={styles.btnTxtColor}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemDetails;
