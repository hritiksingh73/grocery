import React from 'react';
import {TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ErrorMessage from '../ErrorMessage';
import {styles} from './styles';

const TextField = props => {
  const {name, text} = props;

  return (
    <View style={styles.inputContainer}>
      <View style={styles.textInput}>
        <AntDesign name={name} size={20} style={{margin: 15}} />
        <TextInput {...props} placeholderTextColor="black" />
      </View>
      <ErrorMessage>{text}</ErrorMessage>
    </View>
  );
};
export default TextField;
