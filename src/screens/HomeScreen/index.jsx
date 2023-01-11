import React from 'react';
import {Text, Image, View, TextInput, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import CATEGORIES from '../../data/dummy-data';
import DropDown from '../../components/DropDown';
import {styles} from './styles';
import ListItem from '../../components/ListItem';
import {color} from '../../constant/color';

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderGroceryShops = ({item}) => {
    return (
      <View style={styles.renderItemScreen}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate('Super Fresh')}>
          <Image source={item.image} style={styles.imgStyle} />
        </TouchableOpacity>

        <View style={styles.shopContainer}>
          <Text style={styles.shopTitle}>{item.title}</Text>
          <View style={styles.ratingContainer}>
            {[...Array(item.rating)].map(() => (
              <AntDesign name="star" size={15} color={color.primary} />
            ))}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <DropDown />

      <View style={styles.searchSection}>
        <AntDesign
          name="search1"
          size={20}
          color="black"
          style={styles.input}
        />
        <TextInput placeholder="Find Store" style={styles.input} />
      </View>

      <ListItem
        data={CATEGORIES}
        renderItem={renderGroceryShops}
        numColumns={2}
      />
    </View>
  );
};
export default HomeScreen;
