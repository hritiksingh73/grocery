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
import {deleteAddress} from '../../../redux/action/Action';

const ManageAddressScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const address = useSelector(state => state.userInfo.userAddressList);
  //console.log(address);
  const addressData = ({item}) => {
    return (
      <View style={styles.parentContainer}>
        <View style={styles.addressContainer}>
          <View style={styles.recipientName}>
            <View style={styles.nameContainer}>
              <Text style={styles.userName}>
                {item.firstName} {item.lastName}
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    'EditAddressScreen',
                    (productItem = item.id),
                  )
                }>
                <Edit name="edit" size={20} style={styles.Icons} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => dispatch(deleteAddress(item))}>
                <Icon name="delete" size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <Text>
            {item.area} {item.address} {item.block}
          </Text>
          <Text>
            {item.street} {item.appartment}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="left" size={24} />
          </TouchableOpacity>
          <Text style={styles.AddAddressHeader}>Add Addresses</Text>
        </View>

        <FlatList
          data={address}
          renderItem={addressData}
          numColumns={1}
          keyExtractor={item => item.id}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('AddAddressScreen')}
          style={styles.addbutton}>
          <Text style={styles.add}>Add New Address</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ManageAddressScreen;
