import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import image from '../../config/image';
import {styles} from './styles';

const LoginBtn = () => {
  return (
    <TouchableOpacity style={styles.continueButton} activeOpacity={0.9}>
      <Image style={styles.btnImage} source={image.facebook} />
      <Image style={styles.btnImage} source={image.google} />
    </TouchableOpacity>
  );
};
export default LoginBtn;
