import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const AccountInfo = props => {
  const {name, text, onPress} = props;
  return (
    <TouchableOpacity style={styles.accountMain} onPress={onPress}>
      <AntDesign name={name} size={20} style={styles.iconStyle} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AccountInfo;
