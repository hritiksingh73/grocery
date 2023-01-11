import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';

import ButtonComponent from '../../../components/ButtonComponent';
import {editUserAddress} from '../../../redux/actions/userAction';
import {globalStyle} from '../../../constant/globalStyle';
import {styles} from '../AddAddress/styles';
import Input from '../../../components/Input';

const EditAddress = ({navigation}) => {
  const dispatch = useDispatch();
  const addressID = useRoute().params.addressId;
  const address = useSelector(state => state.userDataReducer.address);

  const updateCurrentAddress = address.filter(item => item.id === addressID);
  const defaultFieldValue = {...updateCurrentAddress[0]};

  const {control, handleSubmit} = useForm({
    mode: 'onBlur',
    defaultValues: defaultFieldValue,
  });

  const btnHandler = data => {
    dispatch(editUserAddress(data, addressID));
    navigation.navigate('Manage Address');
  };

  return (
    <SafeAreaView style={globalStyle.container}>
      <View style={styles.nameContainer}>
        <Input
          name="firstName"
          control={control}
          placeholder="First Name"
          style={styles.firstName}
        />
        <Input
          name="lastName"
          control={control}
          placeholder="Last Name"
          style={styles.firstName}
        />
      </View>
      <Input name="mobileNo" control={control} placeholder="Mobile Number" />
      <Input name="area" control={control} placeholder="Area" />
      <Input name="addressType" control={control} placeholder="Address Type" />
      <Input name="street" control={control} placeholder="Street" />
      <Input
        name="house"
        control={control}
        placeholder="Apartments/ House/ Office No"
      />
      <Input name="block" control={control} placeholder="Block (Optional)" />

      <View style={styles.btnContainer}>
        <ButtonComponent onPress={handleSubmit(btnHandler)}>
          <Text>save</Text>
        </ButtonComponent>
      </View>
    </SafeAreaView>
  );
};
export default EditAddress;
