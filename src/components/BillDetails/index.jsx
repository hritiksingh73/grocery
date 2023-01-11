import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './style';

const BillDetails = ({detail, price}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={{fontSize: 16}}>{detail}</Text>
        <Text style={{fontSize: 16}}>{price}</Text>
      </View>
      <View style={styles.itemDivider}></View>
    </>
  );
};
export default BillDetails;
