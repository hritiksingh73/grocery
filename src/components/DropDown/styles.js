import {StyleSheet} from 'react-native';
import color from '../../constant/color.js';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 120,
    zIndex: 2,
    marginTop: 20,
    marginRight: 100,
  },
  dropdown: {
    borderColor: color.white,
    alignItems: 'center',
    height: 18,
    width: 120,
    margin: 25,
  },
});

export default styles;
