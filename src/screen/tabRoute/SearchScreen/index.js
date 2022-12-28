import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import homedata from '../../../staticData/homedata';

const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('popularProduct')}>
            <Ionicons name="chevron-back" size={35} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Search</Text>
        </View>
        <View style={styles.header}>
          <TextInput
            placeholder="Search Item"
            style={styles.searchBar}
            placeholderTextColor="grey"
          />
          <Ionicons name="search" size={25} style={styles.searchIcon} />
        </View>
        <Text style={styles.recentSearchText}>Recent Searches</Text>
        <View style={styles.recentSearch}>
          <Text style={styles.recentSearchData}>Rocoto</Text>
          <Text style={styles.recentSearchData}>Rocoto</Text>
          <Text style={styles.recentSearchData}>Rocoto</Text>
        </View>
        <View style={styles.recentSearch}>
          <Text style={styles.recentSearchData}>Rocoto</Text>
          <Text style={styles.recentSearchData}>Rocoto</Text>
          <Text style={styles.recentSearchData}>Rocoto</Text>
        </View>
        <View style={styles.recentSearch}>
          <Text style={styles.recentSearchData}>Rocoto</Text>
          <Text style={styles.recentSearchData}>Rocoto</Text>
          <Text style={styles.recentSearchData}>Rocoto</Text>
        </View>
        <View style={styles.recentSearch}>
          <Text style={styles.recentSearchData}>Rocoto</Text>
          <Text style={styles.recentSearchData}>Rocoto</Text>
          <Text style={styles.recentSearchData}>Rocoto</Text>
        </View>
        <Text style={styles.recentSearchText}>Recommended</Text>
        <View style={styles.recommend}>
          <FlatList
            data={homedata}
            horizontal={true}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('popularProduct')}>
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
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SearchScreen;
