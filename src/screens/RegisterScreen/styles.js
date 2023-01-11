import {StyleSheet} from 'react-native';
import {color} from '../../constant/color';

export const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    fontWeight: '800',
    marginTop: 30,
    marginLeft: 20,
  },
  loginText: {
    color: color.primary,
  },
  textStyle: {
    fontSize: 18,
  },
  accountText: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '8%',
    marginHorizontal: '13%',
    paddingTop: '20%',
  },
});
