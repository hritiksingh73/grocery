import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ItemList from '../../../components/ItemList';
import styles from './styles';

const VegetablesGalleryScreen = ({navigation}) => {
  const productData = useSelector(state => state.user.productData);

  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.topLeftHeader}
          onPress={() => navigation.navigate('Sort')}>
          <MaterialCommunityIcons name={'sort-descending'} size={25} />
          <Text style={styles.sortStyl}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topRightHeader}>
          <MaterialCommunityIcons name={'sort-variant'} size={25} />
          <Text style={styles.sortStyl}>Filter</Text>
        </TouchableOpacity>
      </View>

      <ItemList data={productData} />
    </SafeAreaView>
  );
};

export default VegetablesGalleryScreen;
