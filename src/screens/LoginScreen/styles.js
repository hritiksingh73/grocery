import {StyleSheet} from 'react-native';
import {color} from '../../constant/color';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: '25%',
  },
  headerImage: {
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
  },
  forgotStyle: {
    textAlign: 'center',
    color: color.primary,
    fontSize: 16,
    marginTop: 24,
  },
  orImage: {
    alignItems: 'center',
    paddingTop: 25,
  },
  accountText: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '8%',
    marginHorizontal: '13%',
  },
});
