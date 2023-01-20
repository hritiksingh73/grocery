import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const PrimaryButton = props => {
  const {
    name,
    onPress,
    customBtnAlignment,
    customBtnContainerStyle,
    customBtnTextStyle,
  } = props;
  return (
    <View style={[styles.btnAlign, customBtnAlignment]}>
      <TouchableOpacity
        style={[styles.loginTxtArea, customBtnContainerStyle]}
        onPress={onPress}>
        <Text style={[styles.loginBtn, customBtnTextStyle]}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
