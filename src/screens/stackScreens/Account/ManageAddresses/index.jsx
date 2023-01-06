import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import LoginBtn from '../../../../components/loginBtn';
import {useDispatch, useSelector} from 'react-redux';
import {DeleteAddress} from '../../../../redux/action/action';
import Feather from 'react-native-vector-icons/Feather';

const ManageAddresses = ({navigation}) => {
  const dispatch = useDispatch();
  const userAddresses = useSelector(state => state.user.userAddresses);

  const AddUserAddress = () => {
    navigation.navigate('AddAddresses');
  };

  const EditDetails = id => {
    navigation.navigate('AddAddresses', {ItemId: id});
  };

  const DeleteItem = id => {
    dispatch(DeleteAddress(id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageMargin}>
        <FlatList
          data={userAddresses}
          renderItem={({item}) => {
            return (
              <View style={styles.addressContainer}>
                <View style={styles.addressHeader}>
                  <Text style={styles.headerTxt}>
                    {item.firstName} {item.lastName}
                  </Text>
                  <View style={styles.iconContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        EditDetails(item.addressID);
                      }}>
                      <Feather
                        style={styles.iconStyl}
                        name={'edit'}
                        size={22}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        DeleteItem(item.addressID);
                      }}>
                      <Feather
                        style={styles.iconStyl}
                        name={'trash-2'}
                        size={22}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.fullAddress}>
                  {item.apartment}, {item.block}-block {item.street} {item.area}{' '}
                  {item.addressType}
                </Text>
              </View>
            );
          }}
        />
        <LoginBtn name="Add New Address" onPress={AddUserAddress} />
      </View>
    </SafeAreaView>
  );
};

export default ManageAddresses;
