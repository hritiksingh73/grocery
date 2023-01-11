import React from 'react';
import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {GROCERIES} from '../../data/groceryICarousel';
import {styles} from './styles';
import CarouselComponent from '../../components/CarouselComponent';
import ProductList from '../../components/ProductList';
import {globalStyle} from '../../constant/globalStyle';

const renderSuperFreshItem = ({item}) => {
  return (
    <View style={styles.renderItem}>
      <Image source={{uri: item.imageUrl}} style={styles.carouselImgStyle} />
    </View>
  );
};
const SuperFreshScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={globalStyle.container}>
      <ScrollView>
        <View style={globalStyle.header}>
          <MaterialIcon name="menu" size={30} />
          <Text style={globalStyle.headerText}>Super Fresh</Text>
          <MaterialIcon
            name="bell-badge-outline"
            size={30}
            onPress={() => navigation.navigate('Notifications')}
          />
        </View>

        <CarouselComponent data={GROCERIES} renderItem={renderSuperFreshItem} />

        <View style={styles.iconContainer}>
          <Text style={styles.productsTxt}>Popular Products</Text>
          <MaterialIcon
            name="arrow-right"
            size={25}
            style={{bottom: 20}}
            onPress={() => navigation.navigate('Popular Products')}
          />
        </View>

        <ProductList
          horizontal={true}
          numColumns={0}
          style={globalStyle.productList}
        />
        <Text style={[styles.productsTxt, {marginTop: 40}]}>
          Trending near you
        </Text>
        <ProductList horizontal={false} numColumns={2} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default SuperFreshScreen;
