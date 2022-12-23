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
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {Rating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';
import RecentSearchItems from '../../constant/RecentSearchItems/RecentSearchItems';
import {ScrollView} from 'react-native-virtualized-view';
import {addItemToCart} from '../../redux/action/Action';

const SearchScreen = () => {
  const {productData} = useSelector(state => state.userInfo);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const shoppingCards = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageCard} source={{uri: item.image}} />
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
    <ScrollView nestedScrollEnabled={true}>
      <SafeAreaView>
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
      </SafeAreaView>
    </ScrollView>
  );
};

export default SearchScreen;
