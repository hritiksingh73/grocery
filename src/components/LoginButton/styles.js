import {StyleSheet} from 'react-native';
import color from '../../constant/color';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  loginText: {
    backgroundColor: color.primary,
    marginVertical: 10,
    borderRadius: 2,
  },
  button: {
    textAlign: 'center',
    color: color.white,
    fontWeight: 'bold',
    fontSize: 20,
    height: 50,
    width: 120,
    padding: 10,
  },
});

export default styles;
