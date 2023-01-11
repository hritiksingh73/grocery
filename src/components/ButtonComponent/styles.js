import {StyleSheet} from 'react-native';
import {color} from '../../constant/color';

export const styles = StyleSheet.create({
  loginButtonContainer: {
    alignItems: 'center',
    paddingTop: 35,
  },
  loginButton: {
    width: 90,
    height: 45,
    justifyContent: 'center',
    backgroundColor: color.primary,
  },
  loginButtonStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
