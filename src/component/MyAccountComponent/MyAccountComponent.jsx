import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MyAccountComponent = ({name, onPress, ...props}) => {
  return (
    <TouchableOpacity style={styles.menuList} onPress={onPress}>
      <AntDesign name={name} size={24} style={styles.favourite} />
      <Text style={styles.mycarticonsize}>{props.Text}</Text>
    </TouchableOpacity>
  );
};

export default MyAccountComponent;
