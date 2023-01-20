import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import globaStyle from '../../../../constants/globalStyle';
import ItemList from '../../../components/ItemList';

const ItemSearch = ({navigation}) => {
  return (
    <SafeAreaView style={globaStyle.outerContainer}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerBar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                style={styles.goBackIcon}
                name={'chevron-left'}
                size={25}
              />
            </TouchableOpacity>
            <Text style={styles.heading}>Search</Text>
            <View></View>
          </View>

          <TextInput
            style={styles.txtInputStyles}
            placeholder={'Search Items'}
          />

          <Text style={styles.productHeading}>Recent Searches</Text>










          <TouchableOpacity onPress={() => navigation.navigate('Fruits')}>
            <Text style={styles.productHeading}>Recommended</Text>
          </TouchableOpacity>
        <ItemList data={productData} showHorizontal={true} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemSearch;
