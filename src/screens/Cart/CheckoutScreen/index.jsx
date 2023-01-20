import React from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton';
import CheckoutTimeline from '../../../components/CheckoutTimeline';
import CheckoutSelectedAddress from '../CheckoutSelectedAddress';
import CheckoutSelectDeliverySlot from '../CheckoutSelectDeliverySlot';
import CheckoutPayment from '../CheckoutPayment';
import {useDispatch, useSelector} from 'react-redux';
import {ComponentChangeByIndex} from '../../../redux/action/action';

const CheckoutScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const screenIndex = useSelector(state => state.orderDetails.screenIndex);

  const SelectIcon = val => {
    dispatch(ComponentChangeByIndex(val));
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <CheckoutTimeline screenIndex={screenIndex} onPress={SelectIcon} />

        {screenIndex === 0 ? (
          <CheckoutSelectedAddress />
        ) : screenIndex === 1 ? (
          <CheckoutSelectDeliverySlot />
        ) : (
          <CheckoutPayment />
        )}

        {screenIndex === 2 ? (
          <View style={styles.buttonContainer}>
            <PrimaryButton
              name={'Save & Next'}
              onPress={() => {
                if (screenIndex === 2) {
                  navigation.navigate('Thankyou');
                  dispatch(ComponentChangeByIndex(0));
                }
              }}
            />
          </View>
        ) : (
          <View></View>
        )}
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
