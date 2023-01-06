import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';

const LoginBtn = props => {
  const {
    name,
    onPress,
    fontColor = colors.white,
    bgColor = colors.green,
    padHorizontal = 35,
    fontSize = 16,
    btnAlign = 'center',
    borderColor = colors.green,
  } = props;
  return (
    <View style={{alignItems: btnAlign}}>
      <TouchableOpacity
        style={[styles.loginTxtArea, {backgroundColor: bgColor, borderColor: borderColor}]}
        onPress={onPress}>
        <Text
          style={[
            styles.loginBtn,
            {
              fontSize: fontSize,
              paddingHorizontal: padHorizontal,
              color: fontColor,
            },
          ]}>
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginBtn;
