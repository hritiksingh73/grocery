import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/Ionicons';

const Touchable = props => {
  const {name, text, onPress} = props;
  return (
    <TouchableOpacity style={styles.arrange} onPress={onPress}>
      <IconAntDesign name={name} size={35} style={styles.icondesign} />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  arrange: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    alignItems: 'center',
    width: 400,
    padding: 15,
  },
  icondesign: {
    paddingHorizontal: 20,
  },
});
export default Touchable;
