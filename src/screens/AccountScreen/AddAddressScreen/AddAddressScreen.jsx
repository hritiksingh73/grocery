import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {ScrollView} from 'react-native-virtualized-view';

import AddAddressFormComponent from '../../../component/FormComponent/AddAddressFormComponent/AddAddressFormComponent';
import {addAddress} from '../../../redux/action/Action';
import Icon from 'react-native-vector-icons/AntDesign';
import {uidGenerator} from '../../../utils/uidGenerator';

import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const AddAddressScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      mobileNumber: '',
      area: '',
      address: '',
      street: '',
      appartment: '',
      block: '',
      id: uidGenerator(),
    },
  });

  const submitHandler = data => {
    dispatch(addAddress(data));
    navigation.goBack('');
  };

  return (
    <ScrollView nestedScrollEnabled={true}>
      <SafeAreaView style={styles.maincontainer}>
        <KeyboardAvoidingView>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="left" size={24} />
            </TouchableOpacity>
            <Text style={styles.AddAddressHeader}>Add Addresses</Text>
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
              <Text style={styles.add}>Add</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AddAddressScreen;
