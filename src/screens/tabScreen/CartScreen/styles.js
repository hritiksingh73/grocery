import {StyleSheet} from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  cartTextStyle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 180,
  },
  mainMargin: {
    marginHorizontal: 12,
  },
  leftIconStyle: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 15,
  },
  vegetableImage: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: color.lightgrey,
  },
  superImageStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 7,
    paddingVertical: 18,
  },
  delete: {
    color: color.white,
  },
  itemDivide: {
    borderWidth: 1,
    borderColor: color.lightgrey,
    margin: 8,
  },
  counting: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: color.lightgrey,
    width: 100,
    height: 40,
    marginRight: 40,
  },
  increase: {
    backgroundColor: 'green',
    borderLeftWidth: 1,
    borderColor: color.lightgrey,
    padding: 5,
  },
  plus: {
    width: 30,
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 3,
  },
  minus: {
    width: 30,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    paddingTop: 3,
  },
  number: {
    width: 50,
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 6,
  },
  itemDetail: {
    width: '60%',
    padding: 20,
  },
  remove: {
    height: 30,
    borderRadius: 10,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    marginTop: 5,
  },
  addButton: {
    backgroundColor: 'green',
    borderLeftWidth: 1,
    borderColor: color.lightgrey,
    padding: 5,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '400',
    bottom: 5,
    marginRight: 1,
  },
  dollarText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'green',
  },
  freshImage: {
    width: 40,
    height: 40,
    margin: 10,
    borderRadius: 20,
  },
  borderBotm: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  mainList: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  imageStyle: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: color.lightgrey,
  },
  itemStyle: {
    flex: 2,
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  fruitImage: {
    width: 40,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
    marginLeft: 10,
    resizeMode: 'center',
  },
  coupon: {
    backgroundColor: color.white,
    marginVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  couponBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: color.white,
    padding: 10,
    paddingBottom: 16,
    paddingLeft: 0,
  },
  couponInput: {
    marginLeft: 10,
  },
  apply: {
    color: 'green',
    padding: 30,
    marginLeft: 150,
    fontSize: 15,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 15,
    color: color.white,
  },
  billing: {
    marginLeft: 8,
  },
  billingText: {
    fontSize: 20,
  },
  billingStyling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: color.lightgrey,
    padding: 10,
    margin: 10,
  },
  billingText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  priceTotal: {
    fontSize: 17,
    fontWeight: '700',
    marginVertical: 15,
  },
  checkoutText: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 10,
  },
  subTotalText: {
    color: color.white,
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
  },
  totalText: {
    color: color.primary,
    fontWeight: 'bold',
    marginTop: 15,
  },
  saveText: {
    color: 'gray',
    fontWeight: 'bold',
    marginBottom: 18,
  },
  checkoutButton: {
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: color.lightgrey,
  },
  modalStyle: {
    height: '20%',
    width: '80%',
    marginLeft: '10%',
    marginVertical: '70%',
    backgroundColor: color.white,
    padding: 20,
    borderRadius: 10,
  },
  modalBtnStyle: {
    color: color.primary,
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 20,
  },
  modalBtn: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  modalMessage: {
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
  },
});

export default styles;
