import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const ButtonComponent = props => {
  const {disabled, onPress} = props;

  return (
    <View style={[styles.loginButtonContainer]}>
      <TouchableOpacity
        style={styles.loginButton}
        disabled={disabled}
        activeOpacity={0.8}
        onPress={onPress}>
        <Text {...props} style={styles.loginButtonStyle} />
      </TouchableOpacity>
    </View>
  );
};
export default ButtonComponent;
