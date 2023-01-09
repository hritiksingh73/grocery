import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const LoginButton = props => {
  const {name, onPress} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginText} onPress={onPress}>
        <Text style={styles.button}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginButton;
