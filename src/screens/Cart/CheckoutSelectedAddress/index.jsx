import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  SelectedAddress,
  ComponentChangeByIndex,
} from '../../../redux/action/action';
import {StyleSheet} from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton';
import colors from '../../../constants/colors';

const Addresses = ({navigation}) => {
  const {width} = useWindowDimensions();
  const dispatch = useDispatch();
  const userAddresses = useSelector(state => state.user.userAddresses);
  const [isAddressSelected, setIsAddressSelected] = useState(0);

  return (
    <View>
      <FlatList
        data={userAddresses}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View
              style={[
                styles.addressContainer,
                index + 1 === isAddressSelected
                  ? styles.selectedAddressContainer
                  : styles.addressContainer,
                {width: width - 60},
              ]}>
              <Text style={styles.title}>
                {item.firstName} {item.lastName}
              </Text>
              <Text style={styles.description}>
                {item.apartment}, {item.block}-block {item.street} {item.area}{' '}
                {item.addressType}
              </Text>
              <PrimaryButton
                name={'Deliver here'}
                onPress={() => {
                  setIsAddressSelected(index + 1);
                  dispatch(SelectedAddress(item));
                }}
                customBtnAlignment={styles.customBtnAlignment}
              />
            </View>
          );
        }}
      />

      <View style={styles.btnAlign}>
        <TouchableOpacity
          style={styles.loginTxtArea}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginBtn}>Add New Address</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          name={'Save & Next'}
          onPress={() => {
            dispatch(ComponentChangeByIndex(1));
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addressContainer: {
    margin: 16,
    marginRight: 0,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.gray_70,
    borderRadius: 3,
  },
  selectedAddressContainer: {
    borderWidth: 2,
    borderRadius: 3,
    borderColor: colors.green,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  description: {
    textAlign: 'justify',
    marginVertical: 20,
  },
  primaryButtomStyle: {},

  loginBtn: {
    textAlign: 'center',
    fontWeight: '500',
    paddingVertical: 14,
    fontSize: 16,
    paddingHorizontal: 35,
    color: colors.gray,
  },
  loginTxtArea: {
    margin: 10,
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.gray,
  },
  btnAlign: {
    alignItems: 'center',
  },
  bgColorChange: {
    color: colors.red,
  },
  customBtnAlignment: {
    alignItems: 'flex-start',
  },
  buttonContainer: {
    margin: 20,
  },
});

export default Addresses;
