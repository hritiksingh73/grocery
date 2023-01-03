import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Edit from 'react-native-vector-icons/Feather';

import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {deleteAddress} from '../../redux/action/Action';

const ManageAddressScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const address = useSelector(state => state.userAddress.userAddressList);

  const cartData = ({item}) => {
    return (
      <View style={styles.addressContainer}>
        <View style={styles.recipientName}>
          <View style={styles.nameContainer}>
            <Text>{item.firstName}</Text>
            <Text>{item.firstName}</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(
                  'EditAddressScreen',
                  (productItem = item.id),
                )
              }>
              <Edit name="edit" size={24} style={styles.Icons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(deleteAddress(item))}>
              <Icon name="delete" size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <Text>{item.area}</Text>
        <Text>{item.address}</Text>
        <Text>{item.block}</Text>
        <Text>{item.street}</Text>
        <Text>{item.appartment}</Text>
      </View>
    );
  };
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="left" size={24} />
          </TouchableOpacity>
          <Text style={styles.AddAddressHeader}>Add Addresses</Text>
        </View>

        <FlatList
          data={address}
          renderItem={cartData}
          numColumns={1}
          keyExtractor={item => item.id}
        />

        <Button
          title="Add New Address"
          onPress={() => navigation.navigate('AddAddressScreen')}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default ManageAddressScreen;
