import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    padding: Platform.OS === 'ios' ? 25 : 10,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    marginHorizontal: 20,
  },
});
