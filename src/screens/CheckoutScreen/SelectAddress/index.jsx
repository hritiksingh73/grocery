import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import {globalStyle} from '../../../constant/globalStyle';
import CustomButton from '../../../components/Button';
import {styles} from './styles';
import {getSelectedAddress} from '../../../redux/actions/userAction';
import {useState} from 'react';

const SelectAddress = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const address = useSelector(state => state.userDataReducer.address);
  const orders = useSelector(state => state.ordersReducer.selectedAddress);
  console.log('selected address------>', orders);

  const renderSelectedAddress = ({item}) => {
    const onSelectedAddress = () => {
      dispatch(getSelectedAddress(item));
      setSelectedAddress(item.id);
    };

    return (
      <View
        style={[
          styles.addressContainer,
          item.id === selectedAddress ? styles.addressSelected : null,
        ]}>
        <View>
          <Text style={globalStyle.nameStyle}>
            {item.firstName}
            {item.lastName}
          </Text>
          <Text style={globalStyle.itemFontSize}>
            {item.area}
            {item.addressType}
            {item.street}
            {item.house}
            {item.block}
          </Text>

          <CustomButton
            btnTitle="Deliver here"
            style={styles.btnWidth}
            onPress={onSelectedAddress}
          />
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.screen}>
        <FlatList
          data={address}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={renderSelectedAddress}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          mode="contained-tonal"
          buttonColor="white"
          style={styles.btnStyle}
          labelStyle={{color: 'grey'}}
          onPress={() => navigation.navigate('Add Address')}
          icon={() => <AntDesign name="pluscircleo" size={20} />}>
          Add New Address
        </Button>
      </View>

      <View style={styles.btnContainer}>
        <CustomButton btnTitle="Save & Next" />
      </View>
    </>
  );
};
export default SelectAddress;
