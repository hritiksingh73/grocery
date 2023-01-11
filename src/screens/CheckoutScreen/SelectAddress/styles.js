import {StyleSheet} from 'react-native';
import {color} from '../../../constant/color';

export const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  addressContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    marginHorizontal: 10,
    width: 320,
    padding: 20,
  },
  btnStyle: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 0,
  },
  btnContainer: {
    alignItems: 'center',
  },
  btnWidth: {
    width: '63%',
  },
  addressSelected: {
    borderColor: color.primary,
  },
});
