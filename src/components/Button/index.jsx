import React from 'react';
import {Button} from 'react-native-paper';
import {color} from '../../constant/color';
import {styles} from './styles';

const CustomButton = ({btnTitle, icon, style, onPress}) => {
  return (
    <Button
      mode="contained-tonal"
      buttonColor={color.primary}
      style={[styles.btnStyle, style]}
      icon={icon}
      onPress={onPress}
      labelStyle={{color: 'white'}}>
      {btnTitle}
    </Button>
  );
};
export default CustomButton;
