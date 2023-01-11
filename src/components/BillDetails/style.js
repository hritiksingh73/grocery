import {StyleSheet} from 'react-native';
import {color} from '../../constant/color';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  itemDivider: {
    borderWidth: 1,
    borderColor: color.secondry,
    margin: 10,
    marginHorizontal: 15,
  },
});
