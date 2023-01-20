import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import globalStyle from '../../constants/globalStyle';
import styles from './styles';

const Header = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftIconContainer} onPress={onPress}>
        <Feather name={'chevron-left'} size={25}/>
      </TouchableOpacity>
      <Text style={globalStyle.heading}>Checkout</Text>
      <View style={styles.rightIconContainer}></View>
    </View>
  );
};

export default Header;
