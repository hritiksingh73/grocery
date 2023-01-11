import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import ButtonComponent from '../../../components/ButtonComponent';
import {getUserAddress} from '../../../redux/actions/userAction';
import {globalStyle} from '../../../constant/globalStyle';
import {styles} from './styles';
import Input from '../../../components/Input';

const AddAddress = ({navigation}) => {
  const dispatch = useDispatch();

  const {control, handleSubmit} = useForm({
    mode: 'onBlur',
    defaultValues: {firstName: 'mansi'},
  });

  const btnHandler = data => {
    dispatch(getUserAddress(data));
    navigation.navigate('Manage Address');
  };

  return (
    <SafeAreaView style={globalStyle.container}>
      <ScrollView>
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
        <Input
          name="addressType"
          control={control}
          placeholder="Address Type"
        />
        <Input name="street" control={control} placeholder="Street" />
        <Input
          name="house"
          control={control}
          placeholder="Apartments/ House/ Office No"
        />
        <Input name="block" control={control} placeholder="Block (Optional)" />

        <View style={styles.btnContainer}>
          <ButtonComponent>
            <Text>Cancel</Text>
          </ButtonComponent>
          <ButtonComponent onPress={handleSubmit(btnHandler)}>
            <Text>Add</Text>
          </ButtonComponent>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddAddress;
