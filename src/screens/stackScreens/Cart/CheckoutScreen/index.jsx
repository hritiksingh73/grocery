import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import LoginBtn from '../../../../components/loginBtn';
import CheckoutTimeline from '../../../../components/CheckoutTimeline';
import CheckoutSelectedAddress from '../CheckoutSelectedAddress';
import CheckoutSelectDeliverySlot from '../CheckoutSelectDeliverySlot';
import CheckoutPayment from '../CheckoutPayment';

const CheckoutScreen = ({navigation}) => {
  const [screenName, setScreenName] = useState('Address');

  const GoToAddAddress = () => {
    navigation.navigate('AddAddresses')
  }
  
  return (
    <SafeAreaView>
      <ScrollView>
        <CheckoutTimeline name={screenName} />

        {screenName === 'Address' ? (
          <CheckoutSelectedAddress />
        ) : screenName === 'Delivery' ? (
          <CheckoutSelectDeliverySlot />
        ) : (
          <CheckoutPayment />
        )}

          <LoginBtn
            name={'Add New Address'}
            onPress={GoToAddAddress}
          />

        <View style={styles.buttonContainer}>
          <LoginBtn
            name={
              screenName === 'Address' || screenName === 'Delivery'
                ? 'Save & Next'
                : 'Place Order'
            }
            onPress={() => {
              screenName === 'Address'
                ? setScreenName('Delivery')
                : screenName === 'Delivery'
                ? setScreenName('Payment')
                : setScreenName('Address');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20,
  },
});
