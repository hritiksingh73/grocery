import React, {useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {carousalImage} from '../../../data/homeScreen';
import Carousel from 'react-native-reanimated-carousel';
import Feather from 'react-native-vector-icons/Feather';
import globaStyle from '../../../constants/globalStyle';
import styles from './styles';
import strings from '../../../constants/strings';
import images from '../../../config/images';
import colors from '../../../constants/colors';
import ItemList from '../../../components/ItemList';
import {Rating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import {FatchingData} from '../../../redux/action/action';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const width = Dimensions.get('window').width;
  const productData = useSelector(state => state.user.productData);

  useEffect(() => {
    dispatch(FatchingData());
  }, []);

  return (
    <SafeAreaView style={globaStyle.outerContainer}>
      <ScrollView>
        <View style={styles.headerBar}>
          <View></View>
          <View style={styles.imgBox}>
            <Image style={styles.imgStyl} source={images.source1} />
            <View>
              <View style={styles.headerTitleBlock}>
                <Text style={styles.headerTitleTxt}>Super Fresh</Text>
              </View>
              <View style={styles.headerRatingBlock}>
                <Rating imageSize={15} ratingCount={5} jumpValue={1} />
              </View>
            </View>
            <View style={styles.bottomArrowIcon}>
              <Feather
                name={'chevron-down'}
                size={20}
                color={colors.lightgray}
              />
            </View>
          </View>
          <View style={styles.heartIcon}>
            <TouchableOpacity>
              <Feather name={'heart'} size={22} color={colors.lightgray} />
            </TouchableOpacity>
          </View>
        </View>

        <Carousel
          loop
          width={width}
          height={width / 2 + 10}
          autoPlay={true}
          data={carousalImage}
          renderItem={({item}) => {
            return (
              <View style={styles.horizontalSlidebar}>
                <Image
                  style={styles.itemImage}
                  resizeMode="cover"
                  source={item.path}
                />
                <View style={styles.txtOnImageContainer}>
                  <Text style={styles.txtOnImageHeader}>Super Fresh</Text>
                  <Text style={styles.txtOnImageContent}>{strings.txt1}</Text>
                </View>
              </View>
            );
          }}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Fruits')}>
          <Text style={styles.productHeading}>Poppular Product</Text>
        </TouchableOpacity>
        <ItemList data={productData} showHorizontal={true} />
        <TouchableOpacity onPress={() => navigation.navigate('Vegetables')}>
          <Text style={styles.productHeading}>Trending near you</Text>
        </TouchableOpacity>
        <ItemList data={productData} showHorizontal={true} />
        <TouchableOpacity onPress={() => navigation.navigate('Pulses')}>
          <Text style={styles.productHeading}>Other</Text>
        </TouchableOpacity>
        <ItemList data={productData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
