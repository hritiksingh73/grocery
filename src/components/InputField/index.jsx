import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';
import color from '../../constant/color.js';
import styles from './styles.js';

const InputField = props => {
  const {
    placeholder,
    style,
    value,
    onBlur,
    onChangeText,
    autoCapitalize,
    icon,
  } = props;
  return (
    <>
      <View style={styles.inputText}>
        <Icon name={icon} size={24} />
        <TextInput
          style={style}
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
        />
      </View>
    </>
  );
};

export default InputField;
