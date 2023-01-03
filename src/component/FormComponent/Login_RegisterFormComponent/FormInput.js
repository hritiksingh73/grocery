import React from 'react';
import {TextInput, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const FormContainer = ({...props}) => {
  return (
    <>
      <Text style={styles.userInputHeader}>{props.Text}</Text>
      <View style={styles.userDetails}>
        <Icon name={props.Icon} size={24} />
        <TextInput {...props} />
      </View>
    </>
  );
};

export default FormContainer;
