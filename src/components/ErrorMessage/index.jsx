import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

const ErrorMessage = props => {
  return <Text style={styles.txtStyle} {...props} />;
};
export default ErrorMessage;
