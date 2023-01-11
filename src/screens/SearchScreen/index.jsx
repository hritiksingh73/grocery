import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {styles} from './styles';
import ProductList from '../../components/ProductList';
import ChipComponent from '../../components/ChipComponent';
import {globalStyle} from '../../constant/globalStyle';

const SearchScreen = () => {
  const {goBack} = useNavigation();

  return (
    <SafeAreaView style={globalStyle.container}>
      <View style={styles.header}>
        <AntDesign name="left" size={30} onPress={() => goBack()} />
        <Text style={styles.headerText}>Search</Text>
      </View>

      <View style={styles.searchSection}>
        <AntDesign name="search1" size={20} color="black" />
        <TextInput placeholder="Search Items" style={styles.input} />
      </View>

      <Text style={styles.recentSearch}>Recent Searches</Text>

      <ChipComponent />
      <Text style={styles.recommendedTxt}>Recommended</Text>
      <View style={styles.recommendedProductContainer}>
        <ProductList
          horizontal={true}
          numColumns={0}
          style={globalStyle.productList}
        />
      </View>
    </SafeAreaView>
  );
};
export default SearchScreen;
