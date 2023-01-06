import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import veggiImages from '../../../data/homeScreenData';
import Carousel from 'react-native-reanimated-carousel';
import Feather from 'react-native-vector-icons/Feather';
import globaStyle from '../../../constants/globalStyle';
import styles from './styles';
import strings from '../../../constants/strings';
import images from '../../../config/images';
import colors from '../../../constants/colors';
import Fruits from '../../../data/localFruitsapi/FruitsApi';
import Vegitables from '../../../data/localVegetablesapi/VegetablesApi';
import Pulses from '../../../data/localPulsesapi/PulsesApi';
import ItemList from '../../../components/ItemList';
import TrendingItems from '../../../components/TrendingItems';
import {Rating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import {FatchingData} from '../../../redux/action/action';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const productData = useSelector(state => state.user.productData);
  const width = Dimensions.get('window').width;

  useEffect(() => {
    dispatch(FatchingData());
  }, []);

  console.log('productData', productData);

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

        <View style={styles.carousalContainer}>
          <Carousel
            loop
            width={width}
            height={width / 2 + 10}
            autoPlay={true}
            data={veggiImages}
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
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Fruits')}>
          <Text style={styles.productHeading}>Poppular Product</Text>
        </TouchableOpacity>
        <TrendingItems data={productData} />
        <TouchableOpacity onPress={() => navigation.navigate('Vegetables')}>
          <Text style={styles.productHeading}>Trending near you</Text>
        </TouchableOpacity>
        <TrendingItems data={productData} />
        <TouchableOpacity onPress={() => navigation.navigate('Pulses')}>
          <View style={styles.bottomItemStyl}>
            <Text style={styles.productHeading}>Other</Text>
            <ItemList data={productData} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
