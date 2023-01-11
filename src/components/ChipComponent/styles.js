import {StyleSheet} from 'react-native';
import {color} from '../../constant/color';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  chip: {
    width: Platform.OS === 'android' ? 120 : 108,
    height: 50,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: color.secondry,
  },
});
