import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  PaymentMethod,
  CheckoutDetails,
  ComponentChangeByIndex,
} from '../../../redux/action/action';
import {RadioButton} from 'react-native-paper';
import colors from '../../../constants/colors';

const Payment = ({navigation}) => {
  const {width} = useWindowDimensions();
  const dispatch = useDispatch();
  const selectedAddress = useSelector(
    state => state.orderDetails.selectedAddress,
  );
  const deliveryDate = useSelector(state => state.orderDetails.deliveryDate);
  const deliveryTime = useSelector(state => state.orderDetails.deliveryTime);
  const paymentMethod = useSelector(state => state.orderDetails.paymentMethod);
  const products = useSelector(state => state.orderDetails.products);
  const billingDetails = useSelector(
    state => state.orderDetails.billingDetails,
  );

  // const [checked, setChecked] = useState('first');
  const [isItemSelected, setIsItemSelected] = useState(0);

  const SubmitDetails = () => {
    var orderID = 'OID' + new Date().getTime();
    // console.log('setdata: ', products)
    const orderDetails = {
      orderID: orderID,
      selectedAddress: selectedAddress,
      deliverySlot: {
        time: deliveryTime,
        date: deliveryDate.date,
        day: deliveryDate.day,
        month: deliveryDate.month,
      },
      paymentMethod: paymentMethod,
      billingDetails: billingDetails,
      products: products,
    };
    dispatch(CheckoutDetails(orderDetails));
  };

  return (
    <SafeAreaView>
      <Text style={styles.heading}>Choose Payment Option</Text>

      {/* <RadioButton
        value="first"
        color={colors.green}
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        color={colors.green}
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /> */}

      <TouchableOpacity
        onPress={() => {
          setIsItemSelected(1);
          dispatch(PaymentMethod('Via Cart'));
        }}>
        <View
          style={[
            styles.container,
            isItemSelected === 1
              ? styles.selectedBorderColor
              : styles.container,
          ]}>
          <View style={styles.radioBtnContainer}></View>
          <View style={[styles.titleContainer, {width: width - 120}]}>
            <Text style={styles.title}>Via Cart</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setIsItemSelected(2);
          dispatch(PaymentMethod('Via UPI Option'));
        }}>
        <View
          style={[
            styles.container,
            isItemSelected === 2
              ? styles.selectedBorderColor
              : styles.container,
          ]}>
          <View style={styles.radioBtnContainer}></View>
          <View style={[styles.titleContainer, {width: width - 120}]}>
            <Text style={styles.title}>Via UPI Option</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setIsItemSelected(3);
          dispatch(PaymentMethod('Cash On Delivery'));
        }}>
        <View
          style={[
            styles.container,
            isItemSelected === 3
              ? styles.selectedBorderColor
              : styles.container,
          ]}>
          <View style={styles.radioBtnContainer}></View>
          <View style={[styles.titleContainer, {width: width - 120}]}>
            <Text style={styles.title}>Cash On Delivery</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          name={'Place Order'}
          onPress={() => {
            SubmitDetails();
            // dispatch(ComponentChangeByIndex(0))
            // navigation.navigate('Thankyou')
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 15,
    marginVertical: 20,
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 20,
    borderWidth: 1,
    borderRadius: 3,
  },
  selectedBorderColor: {
    borderWidth: 2,
    borderRadius: 3,
    borderColor: colors.green,
  },
  radioBtnContainer: {
    width: 30,
    height: 30,
    borderWidth: 1,
  },
  titleContainer: {
    marginLeft: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
  buttonContainer: {
    margin: 20,
  },
});

export default Payment;
