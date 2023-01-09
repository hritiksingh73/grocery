import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const BillInfo = props => {
  const {title, onPress} = props;
  return (
    <View style={styles.billingStyling}>
      <Text style={styles.billingTextStyling}>{title}</Text>
      <Text style={styles.priceTotal}>₹{onPress()}</Text>
    </View>
  );
};

export default BillInfo;