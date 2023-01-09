import {StyleSheet} from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: 20,
    width: 20,
  },
  register: {
    fontSize: 20,
    margin: 10,
    marginLeft: 10,
    padding: 10,
  },
  placeholderInput: {
    padding: 20,
    width: 320,
  },
  text: {
    marginRight: 180,
    color: 'red',
    padding: 10,
  },
  button: {
    width: 90,
    margin: 20,
  },
  account: {
    marginTop: 10,
    fontSize: 15,
  },
  bottomLine: {
    flexDirection: 'row',
  },
  login: {
    marginTop: 10,
    color: color.primary,
    fontSize: 15,
  },
});

export default styles;
