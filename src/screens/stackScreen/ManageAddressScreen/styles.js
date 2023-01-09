import {StyleSheet} from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
  },
  headingText: {
    marginLeft: 140,
    fontSize: 20,
    margin: 10,
    fontWeight: '500',
  },
  btnStyle: {
    backgroundColor: color.primary,
    width: '50%',
    marginLeft: 100,
    margin: 10,
  },
  dataStyle: {
    borderWidth: 1,
    borderColor: 'grey',
    marginLeft: 20,
    height: 100,
    width: '92%',
    padding: 5,
    margin: 5,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '400',
    margin: 5,
    marginLeft: 10,
  },
  text: {
    fontSize: 12,
    color: 'grey',
    marginLeft: 10,
  },
  iconStyle: {
    flexDirection: 'row',
    marginLeft: 320,
    color: 'grey',

    bottom: 40,
  },
  editStyle: {
    color: 'grey',
    marginRight: 20,
  },
  deleteStyle: {
    color: 'grey',
    marginRight: 10,
  },
});

export default styles;
