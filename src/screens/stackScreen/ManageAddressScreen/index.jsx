import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import strings from '../../../constant/strings.js';
import {useDispatch, useSelector} from 'react-redux';
import {deleteUser, editUser} from '../../../redux/action/Action.js';

const ManageAddressScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const addAddress = useSelector(state => state.userData.userAddress);
  //console.log("Add Data------->>>>>",add);
  const {goBack} = useNavigation();

  

  const dataReceive = ({item}) => {
    return (
      <View style={styles.dataStyle}>
        <Text style={styles.textStyle}>
          {item.firstname} {item.lastname}
        </Text>
        <Text style={styles.text}>
          {item.mobileno}, {item.area},{item.address}, {item.street},{' '}
          {item.house}, {item.block}
        </Text>
        <View style={styles.iconStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('Edit Address' , (product = item.id))}> 
          <Feather name="edit" size={20} style={styles.editStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(deleteUser(item))}>
            <AntDesign name="delete" size={20} style={styles.deleteStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <AntDesign name="left" size={20} onPress={() => goBack()} />
          <Text style={styles.headingText}>Manage Addresses</Text>
        </View>

        <FlatList
          data={addAddress}
          keyExtractor={item => item.id}
          renderItem={dataReceive}
        />
        <View style={styles.btnStyle}>
          <Button
            title="Add New Address"
            color="white"
            onPress={() => navigation.navigate('Add Address')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ManageAddressScreen;
