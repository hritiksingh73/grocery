import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const CartBillingData = props => {
  const {text, Count} = props;
  return (
    <View style={styles.billingStyling}>
      <Text styles={styles.billingTextStyling}>{text} </Text>
      <Text style={styles.billingUnits}>{Count}</Text>
    </View>
  );
};

export default CartBillingData;
