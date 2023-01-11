import {StyleSheet} from 'react-native';
import {color} from '../../constant/color';

const styles = StyleSheet.create({
  itemText: {
    fontSize: 17,
    marginLeft: 10,
    marginTop: 10,
  },
  priceTxt: {
    color: color.primary,
    marginLeft: 10,
    fontSize: 17,
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: '80%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  productDetailContainer: {
    margin: 10,
    flex: 1,
    flexDirection: 'row',
  },
  imgStyle: {
    width: '17%',
    height: '100%',
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  cartButton: {
    borderWidth: 1,
    width: 40,
    height: 40,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numTxt: {
    textAlign: 'center',
    padding: 10,
  },
  cartBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: '3%',
    justifyContent: 'flex-end',
  },
  itemDivider: {
    borderWidth: 1,
    borderColor: color.secondry,
    margin: 8,
  },
  cartImgContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  cartImgStyle: {
    width: '70%',
    height: '70%',
  },
  emptyCartTxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  emptyBag: {
    fontSize: 16,
    margin: 8,
  },
  billDetail: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10,
  },
  apply: {
    fontSize: 16,
    color: color.primary,
  },
  coupon: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  billingDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: color.secondry,
    padding: 30,
  },
  bottomContainer: {
    height: '20%',
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30,
  },
  total: {
    color: color.primary,
    fontSize: 18,
  },
  totalPrice: {
    color: 'white',
    fontSize: 25,
  },
  checkoutBtn: {
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 10,
  },
});
export default styles;
