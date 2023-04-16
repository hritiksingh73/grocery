import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import {addAddress} from '../../../../redux/action/Action.js';
import AddressInput from '../../../../components/AddressInput';
import guidGenerator from '../../../../utils/guidGenerator';

const AddAddressScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {goBack} = useNavigation();
  const {control, handleSubmit} = useForm({
    mode: 'onBlur',
    defaultValues: {
      //firstname: '',
      // lastname: '',
      // mobileno: '',
      // area: '',
      // address: '',
      // street: '',
      // house: '',
      // block: '',
      id: guidGenerator(),
    },
  });

  const submitHandler = data => {
    console.log('---------->>>>>>>>>', data);
    dispatch(addAddress(data));
    // navigation.goBack('');
    navigation.navigate('Manage Address');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
      <View style={styles.container}>
        <AntDesign name="left" size={25} onPress={() => goBack()} />
        <Text style={styles.headingText}>Add Address</Text>
      </View>

      <View style={styles.inputStyle}>
        <AddressInput
          name="firstname"
          control={control}
          placeholder="First Name"
        />
        <AddressInput
          name="lastname"
          control={control}
          placeholder="Last Name"
        />
      </View>
      <AddressInput name="mobileno" control={control} placeholder="Mobile No" />
      <AddressInput name="area" control={control} placeholder="Area" />
      <AddressInput
        name="address"
        control={control}
        placeholder="Address Type"
      />

      <AddressInput name="street" control={control} placeholder="Street" />
      <AddressInput
        name="house"
        control={control}
        placeholder="Apartments / House / Office No"
      />
      <AddressInput
        name="block"
        control={control}
        placeholder="Block / Optional"
      />
      <View style={styles.btnStyle}>
        <View>
          <Button
            title="Cancel"
            color="green"
            onPress={() => navigation.navigate('Manage Address')}
          />
        </View>
        <View style={styles.buttonText}>
          <Button
            title="Add"
            color="white"
            onPress={handleSubmit(submitHandler)}
          />
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddAddressScreen;
