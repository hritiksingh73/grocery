import {StyleSheet} from 'react-native';
import {color} from '../../constant/color';

export const styles = StyleSheet.create({
  productContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: 216,
  },
  priceTxt: {
    color: color.primary,
  },
  iconContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
  txtContainer: {marginHorizontal: 20},
  btnContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: '80%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  btnTxt: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: 'lightgrey',
  },
});
