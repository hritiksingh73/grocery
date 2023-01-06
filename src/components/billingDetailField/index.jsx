import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const BillingDetail = props => {
  const {name, myFunction} = props;
  return (
    <View style={styles.billingTxtBorder}>
      <Text style={styles.billDetailTxt}>{name}</Text>
      <Text style={styles.pricingStyl}>₹{myFunction()}</Text>
    </View>
  );
};

export default BillingDetail;
