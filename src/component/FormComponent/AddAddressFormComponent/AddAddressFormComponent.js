import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
const AddAddressFormComponent = ({...props}) => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput {...props} style={styles.textinput} />
    </View>
  );
};

export default AddAddressFormComponent;
