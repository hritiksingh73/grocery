import {StyleSheet} from 'react-native';
import {color} from '../../constant/color';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  imgContainer: {
    alignItems: 'center',
  },
  imgStyle: {
    width: '50%',
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  price: {
    marginVertical: 5,
    color: color.primary,
    fontSize: 20,
    marginHorizontal: 20,
  },
  description: {
    fontSize: 16,
    marginHorizontal: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    height: 80,
    justifyContent: 'center',
    marginTop: '32%',
  },
  btnStyle: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: 'white',
  },
  productContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  divider: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginVertical: 30,
  },
  productsTxt: {
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 20,
  },
  relatedProductContainer: {
    height: 330,
    paddingTop: 20,
  },
});
