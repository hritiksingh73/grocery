import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  popularProductContainer: {
    marginHorizontal: 10,
  },
  productList: {
    width: 200,
    height: 300,
    borderWidth: 1,
    borderColor: colors.lightgray,
    marginVertical: 10,
    borderRightWidth: 0,
  },
  imgContainer: {
    width: '100%',
    height: '50%',
    // borderWidth: 1,
    alignItem: 'center',
    justifyContent: 'center',
    // textAlign: 'center'
    // padding: 10,
  },
  itemImage: {
    width: '80%',
    height: '90%',
    marginLeft: '10%',
  },
  txtContainer: {
    width: '100%',
    height: '50%',
  },
  itemTitle: {
    fontSize: 18,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  mrpBlock: {
    marginHorizontal: 15,
    marginVertical: 5,
  },
  itemMrp: {
    fontSize: 17,
    color: colors.greenNatural,
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
