import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  itemOuterContainer: {
    width: '50%',
    height: 300,
    borderWidth: 1,
    borderColor: colors.lightgray,
    borderRadius: 3,
  },
  imgContainer: {
    width: '100%',
    height: '55%',
    padding: 20,
  },
  textContainer: {
    width: '100%',
    height: '45%',
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  itemTitle: {
    fontSize: 18,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  mrpBlock: {
    marginHorizontal: 15,
    marginVertical: 5,
  },
  itemMrp: {
    fontSize: 17,
    color: 'green',
    fontWeight: '500',
  },
  itemMaxMrp: {
    fontSize: 14,
    color: colors.gray,
    textDecorationLine: 'line-through',
    fontWeight: '500',
  },
  itemQnty: {
    fontSize: 14,
    color: colors.gray,
    fontWeight: '500',
  },
  addToCartBtn: {
    textAlign: 'center',
    fontSize: 15,
  },
  addToCartContainer: {
    borderWidth: 1,
    borderColor: colors.lightgray,
    marginHorizontal: 25,
    marginVertical: 10,
    padding: 15,
    borderRadius: 3,
  },
});

export default styles;
