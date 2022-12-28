import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import DummyString from '../../../constants/DummyString';
import homedata from '../../../staticData/homedata';

const DetailItems = ({navigation, route}) => {
  useEffect(() => {
    getProductDetail();
  }, []);

  const [itemData, setItemData] = useState();
  const receive = route.params;

  const getProductDetail = async () => {
    try {
      const response = await fetch(
        `https://grocery-backend-in.vercel.app/products/${receive}`,
      );
      const myData = await response.json();
      setItemData(myData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.navigate('popularProduct')}>
              <Ionicons name="chevron-back" size={25} color="black" />
            </TouchableOpacity>

            <FlatList
              data={itemData}
              renderItem={({item}) => {
                return (
                  <>
                    <Image
                      source={{uri: item.imageUrl}}
                      style={styles.headerImage}
                      resizeMode="contain"
                    />

                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>${item.oldPrice} each</Text>
                  </>
                );
              }}
            />
          </View>
          <Text style={styles.string}>{DummyString.paragraph3}</Text>

          <View style={styles.detail}>
            <Text style={styles.detailOption}>Detail</Text>
            <Text>often Bought With</Text>
          </View>
          <View style={styles.diffOptionConatin}>
            <Text style={styles.diffOption}>sit amet consectetur</Text>
            <Text style={styles.diffOption}>incidunt ipsum</Text>
            <Text style={styles.diffOption}>Tempore doloremque aliquid</Text>
            <Text style={styles.diffOption}>ipsum ab ratione </Text>
          </View>
          <Text style={styles.string}>{DummyString.paragraph1}</Text>
          <Text style={styles.string}>{DummyString.paragraph1}</Text>
          <Text style={styles.relatedItemsHeading}>Related Items</Text>

          <View style={styles.flatlistContain}>
            <FlatList
              data={homedata}
              horizontal={true}
              renderItem={({item}) => {
                return (
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
                );
              }}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.textInButton}>Add to WishList</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButtonTwo}>
            <Text style={styles.textInButton}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DetailItems;
