import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native-virtualized-view';

import AddAddressFormComponent from '../../component/FormComponent/AddAddressFormComponent/AddAddressFormComponent';
import {updateAddress} from '../../redux/action/Action';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const EditAddressScreen = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const address = useSelector(state => state.userAddress.userAddressList);

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
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'Required',
                  },
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <AddAddressFormComponent
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="First Name"
                  />
                )}
                name="firstName"
              />
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <AddAddressFormComponent
                    onBlur={onBlur}
                    onChangeText={item => onChange(item)}
                    value={value}
                    placeholder="Last Name"
                  />
                )}
                name="lastName"
              />
            </View>

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <AddAddressFormComponent
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Mobile Number"
                />
              )}
              name="mobileNumber"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <AddAddressFormComponent
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Area"
                />
              )}
              name="area"
            />

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <AddAddressFormComponent
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Address Type"
                />
              )}
              name="address"
            />

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <AddAddressFormComponent
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Street"
                />
              )}
              name="street"
            />

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <AddAddressFormComponent
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Appartments/House/Office No"
                />
              )}
              name="appartment"
            />

            <Controller
              control={control}
              rules={{
                required: {
                  message: 'Required',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <AddAddressFormComponent
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Block(Optional)"
                />
              )}
              name="block"
            />
          </View>
          <View style={styles.footerButton}>
            <TouchableOpacity onPress={() => navigation.goBack('')}>
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              // disabled={
              //   firstName == '' ||
              //   lastName == '' ||
              //   mobileNumber == '' ||
              //   area == '' ||
              //   address == '' ||
              //   street == '' ||
              //   appartment == ''
              //     ? true
              //     : false
              // }
              onPress={handleSubmit(submitHandler)}>
              <Text style={styles.add}>Save Edit</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default EditAddressScreen;
