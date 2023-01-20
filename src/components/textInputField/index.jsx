import React, {useState} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const TextInputField = props => {
  const {icon, secureTextEntry, rightIcon, warrning} = props;
  const [isEyeOn, setIsEyeOn] = useState(true);

  return (
    <>
      <View style={styles.container}>
        <Feather name={icon} size={20} style={styles.icons} />
        <TextInput
          style={styles.txtField}
          {...props}
          secureTextEntry={secureTextEntry ? isEyeOn : false}
        />

        {secureTextEntry ? (
          <TouchableOpacity
            style={styles.rightIconsArea}
            onPress={() => {
              isEyeOn ? setIsEyeOn(false) : setIsEyeOn(true);
            }}>
            {isEyeOn ? (
              <Feather name="eye-off" size={20} style={styles.rightIcons} />
            ) : (
              <Feather name={rightIcon} size={20} style={styles.rightIcons} />
            )}
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}
      </View>
      <Text style={styles.warningTxt}>{warrning}</Text>
    </>
  );
};

export default TextInputField;
