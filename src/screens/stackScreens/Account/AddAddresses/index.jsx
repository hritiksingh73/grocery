import React, {useEffect} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import AddressesPageTextInput from '../../../../components/AddressesPageTextInput';
import LoginBtn from '../../../../components/loginBtn';
import {ManageAddresses, UpdateAddress} from '../../../../redux/action/action';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import styles from './styles';

const AddAddresses = ({navigation, route}) => {
  const dispatch = useDispatch();
  const userAddresses = useSelector(state => state.user.userAddresses);

  var ItemID = route.params;
  if (ItemID !== undefined) {
    var ID = ItemID.ItemId;
    const addressIndex = userAddresses.findIndex(value => {
      return value.addressID === ID;
    });
    const defaultVal = userAddresses[addressIndex];
    var initialValues = {
      firstName: defaultVal.firstName,
      lastName: defaultVal.lastName,
      number: defaultVal.number,
      area: defaultVal.area,
      addressType: defaultVal.addressType,
      street: defaultVal.street,
      apartment: defaultVal.apartment,
      block: defaultVal.block,
    };
  }

  const {control, handleSubmit, reset} = useForm({
    defaultValues: initialValues,
  });

  const AddDetails = data => {
    var uniqueID = 'id' + new Date().getTime();
    const uDetails = {
      addressID: uniqueID,
      ...data,
    };
    if (ItemID === undefined) {
      dispatch(ManageAddresses(uDetails));
    }
    if (ID) {
      dispatch(UpdateAddress(ID, data));
    }
    reset();
    navigation.navigate('Manage Addresses');
  };

  const cancelEditing = () => {
    console.log('check: ', userAddresses);
    reset();
    navigation.navigate('Manage Addresses');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.pageMargin}>
          <View style={styles.userNameBlock}>
            <View style={styles.userNameStyle}>
              <AddressesPageTextInput
                name="firstName"
                control={control}
                placeholder="First Name"
                rules={{required: true}}
              />
            </View>
            <View style={styles.userSurNameStyle}>
              <AddressesPageTextInput
                name="lastName"
                control={control}
                placeholder="Last Name"
              />
            </View>
          </View>
          <AddressesPageTextInput
            name="number"
            control={control}
            placeholder="Mobile Number"
          />
          <AddressesPageTextInput
            name="area"
            control={control}
            placeholder="Area"
          />
          <AddressesPageTextInput
            name="addressType"
            control={control}
            placeholder="Address Type"
          />
          <AddressesPageTextInput
            name="street"
            control={control}
            placeholder="Street"
          />
          <AddressesPageTextInput
            name="apartment"
            control={control}
            placeholder="Apartments / House / Office No"
          />
          <AddressesPageTextInput
            name="block"
            control={control}
            placeholder="Block"
          />

          <View style={styles.btnStyl}>
            <LoginBtn name="Cancel" onPress={cancelEditing} />
            <LoginBtn name="Add" onPress={handleSubmit(AddDetails)} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddAddresses;
