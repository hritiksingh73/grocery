import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';

import styles from './styles';
import RecentSearchItems from '../../constant/RecentSearchItems/RecentSearchItems';
import Icon from 'react-native-vector-icons/AntDesign';
import {addItemToCart} from '../../redux/action/Action';

const SearchScreen = () => {
  const {productData} = useSelector(state => state.userInfo);
  console.log(productData);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const shoppingCards = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageCard} source={{uri: item.imageUrl}} />
          <Text style={styles.imageTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.price}>${item.price} each</Text>
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.header}>
          <Icon
            name="left"
            size={24}
            onPress={() => navigation.goBack()}
            style={styles.leftArrow}
          />
          <Text style={styles.search}>Search</Text>
        </View>

        <View style={styles.searchBar}>
          <Icon name="search1" size={20} style={styles.searchIcon} />
          <TextInput placeholder="Search Items" style={styles.txtFields} />
        </View>

        <View>
          <Text style={styles.recent}>Recent Searches</Text>
        </View>

        <RecentSearchItems
          textLeft="Rocoto"
          textCenter="Lomo"
          textRight="Saltado"
        />
        <RecentSearchItems
          textLeft="Papas"
          textCenter="Huancaina"
          textRight="Relleno"
        />
        <RecentSearchItems
          textLeft="Contrary"
          textCenter="There"
          textRight="Passage"
        />
        <RecentSearchItems
          textLeft="Source"
          textCenter="Cicero"
          textRight="Treatise"
        />
        <Text style={styles.recent}>Recommended</Text>

        <FlatList
          horizontal={true}
          data={productData}
          renderItem={shoppingCards}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
