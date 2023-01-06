import React from 'react';
import {Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../constants/colors';
import styles from './styles';

const MyAccFields = props => {
  const {icon, txt} = props;
  return (
    <>
      <View style={styles.flexDirForRow}>
        <Feather name={icon} size={25} color={colors.gray_25} />
        <Text style={styles.txtArea}>{txt}</Text>
      </View>
      <View style={styles.itemSepertor} />
    </>
  );
};

export default MyAccFields;
