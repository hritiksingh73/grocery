import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FruitsApi from '../../../data/localFruitsapi/FruitsApi';
import ItemList from '../../../components/ItemList';
import styles from './styles';

const FruitsGalleryScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.topLeftHeader}
          onPress={() => navigation.navigate('Sort')}>
          <MaterialCommunityIcons name={'sort-descending'} size={25} />
          <Text style={styles.sortStyl}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topRightHeader}
          onPress={() => navigation.navigate('ItemSearch')}>
          <MaterialCommunityIcons name={'sort-variant'} size={25} />
          <Text style={styles.sortStyl}>Filter</Text>
        </TouchableOpacity>
      </View>

      <ItemList data={FruitsApi} />
    </SafeAreaView>
  );
};

export default FruitsGalleryScreen;
