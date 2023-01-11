import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from '../../screens/AccountScreen/styles';

const AccountElements = props => {
  const {name, text, onPress} = props;

  return (
    <TouchableOpacity style={styles.accountContainer}>
      <AntDesign name={name} size={20} style={styles.iconStyle} />
      <Text style={styles.txtStyle} onPress={onPress}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default AccountElements;
