import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native-virtualized-view';

import AddAddressFormComponent from '../../../component/FormComponent/AddAddressFormComponent/AddAddressFormComponent';

import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {updateAddress} from '../../../redux/action/Action';

const EditAddressScreen = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const address = useSelector(state => state.userInfo.userAddressList);
  console.log(address);
  const receivedproductId = route.params;
  const currentAddress = address.filter(item => item.id === receivedproductId);

  const defaultFieldValue = {...currentAddress[0]};
  const {control, handleSubmit} = useForm({
    mode: 'onBlur',
    defaultValues: defaultFieldValue,
  });

  const submitHandler = data => {
    dispatch(updateAddress(data));
    navigation.goBack('');
  };

  return (
    <ScrollView nestedScrollEnabled={true}>
      <SafeAreaView>
        <KeyboardAvoidingView>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="left" size={24} />
            </TouchableOpacity>
            <Text style={styles.AddAddressHeader}>Edit Addresses</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.textInputheaderContainer}>
              <View style={styles.halfInputContainer}>
                <AddAddressFormComponent
                  name="firstName"
                  control={control}
                  placeholder="First Name"
                />
              </View>
              <View style={styles.halfInputContainer}>
                <AddAddressFormComponent
                  name="lastName"
                  control={control}
                  placeholder="Last Name"
                />
              </View>
            </View>

            <AddAddressFormComponent
              name="mobileNumber"
              control={control}
              placeholder="Mobile Number"
            />
            <AddAddressFormComponent
              name="area"
              control={control}
              placeholder="Area"
            />
            <AddAddressFormComponent
              name="address"
              control={control}
              placeholder="Address Type"
            />
            <AddAddressFormComponent
              name="street"
              control={control}
              placeholder="Street"
            />
            <AddAddressFormComponent
              name="appartment"
              control={control}
              placeholder="Appartments/House/Office No"
            />
            <AddAddressFormComponent
              name="block"
              control={control}
              placeholder="Block(Optional)"
            />
          </View>
          <View style={styles.footerButton}>
            <TouchableOpacity onPress={() => navigation.goBack('')}>
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSubmit(submitHandler)}>
              <Text style={styles.add}>Save Edit</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default EditAddressScreen;
