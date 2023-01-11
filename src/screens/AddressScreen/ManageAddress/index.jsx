import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';

import ListItem from '../../../components/ListItem';
import {globalStyle} from '../../../constant/globalStyle';
import {styles} from './styles';
import {deleteUserAddress} from '../../../redux/actions/userAction';
import CustomButton from '../../../components/Button';

const ManageAddress = ({navigation}) => {
  const dispatch = useDispatch();
  const address = useSelector(state => state.userDataReducer.address);
  // console.log('get address---->', address);

  const renderAddressDetail = ({item}) => {
    return (
      <View style={styles.addressScreen}>
        <View style={styles.addressDetailContainer}>
          <View style={styles.nameContainer}>
            <Text style={globalStyle.nameStyle}>
              {item.firstName} {item.lastName}
            </Text>

            <View style={styles.iconContainer}>
              <AntDesign
                name="form"
                size={20}
                style={styles.iconStyle}
                onPress={() => {
                  navigation.navigate('Edit Address', {
                    addressId: item.id,
                  });
                }}
              />
              <AntDesign
                name="delete"
                size={20}
                style={styles.iconStyle}
                onPress={() => dispatch(deleteUserAddress(item))}
              />
            </View>
          </View>

          <Text style={globalStyle.itemFontSize}>
            {item.area},{item.addressType},{item.street},{item.house},
            {item.block}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={globalStyle.container}>
      <ListItem data={address} renderItem={renderAddressDetail} />

      <View style={styles.btnContainer}>
        <CustomButton
          onPress={() => navigation.navigate('Add Address')}
          btnTitle=" Add New Address"
        />
      </View>
    </SafeAreaView>
  );
};
export default ManageAddress;
