import {StyleSheet} from 'react-native';
import {color} from '../../../constant/color';

export const styles = StyleSheet.create({
  card: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    backgroundColor: color.secondry,
    borderRadius: 5,
    margin: 10,
  },
  dateHeading: {
    marginLeft: '10%',
    top: '3%',
    fontSize: 16,
  },
  expiryDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orImage: {
    alignSelf: 'center',
    width: '100%',
  },
  btnContainer: {
    alignItems: 'center',
  },
});
