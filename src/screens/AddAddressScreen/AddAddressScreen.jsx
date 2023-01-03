import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {ScrollView} from 'react-native-virtualized-view';

import AddAddressFormComponent from '../../component/FormComponent/AddAddressFormComponent/AddAddressFormComponent';
import {addAddress} from '../../redux/action/Action';
import Icon from 'react-native-vector-icons/AntDesign';
import {uidGenerator} from '../../utils/uidGenerator';

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
    },
  });

  const submitHandler = data => {
    const addressData = {
      id: uidGenerator(),
    };

    dispatch(addAddress(data, ...addressData.id));
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
            <Text style={styles.AddAddressHeader}>Add Addresses</Text>
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
            {errors.mobileNumber && <Text>This is required.Field</Text>}
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
            {errors.area && <Text>This is required.Field</Text>}
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
            {errors.address && <Text>This is required.Field</Text>}
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
            {errors.street && <Text>This is required.Field</Text>}
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
            {errors.appartment && <Text>This is required.Field</Text>}
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
            {errors.block && <Text>This is required.Field</Text>}
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
