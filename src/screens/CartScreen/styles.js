import {StyleSheet} from 'react-native';
import {Color} from '../../constant/Color';

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#f9f9f9',
  },
  mainHeader: {
    flexDirection: 'row',
  },
  icon: {
    paddingTop: 30,
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 28,
    paddingLeft: 150,
  },
  headerNavigation: {
    paddingLeft: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  mainContainer: {
    width: '100%',
    height: 100,
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: Color.white,
    borderBottomColor: Color.darkGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    width: '75%',
    padding: 5,
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: '600',
    paddingRight: 20,
    color: Color.green,
    paddingTop: 5,
  },
  itemtitle: {
    width: '91%',
  },
  decreaseButton: {
    height: 30,
    borderRadius: 5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.darkGrey,
  },
  increarseButton: {
    height: 30,
    borderRadius: 5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.darkGrey,
  },
  quantityupdate: {
    height: 30,
    borderRadius: 5,
    width: 40,
    borderColor: Color.darkGrey,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    paddingLeft: 15,
    paddingTop: 5,
  },
  flatlistImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderWidth: 1,
    marginLeft: 10,
    borderColor: Color.darkGrey,
  },
  Quantityadjustment: {
    flexDirection: 'row',
    paddingTop: '3%',
    paddingRight: 20,
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
    paddingTop: 5,
  },
  QuantityHandler: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: '3%',
    justifyContent: 'flex-end',
    paddingRight: 20,
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
  },
  billingText: {
    fontSize: 20,
    color: '#1a1b1d',
  },

  total: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 15,
  },

  billing: {
    marginLeft: 20,
    paddingTop: 30,
  },
  apply: {
    color: 'green',
    paddingLeft: 140,
    paddingTop: 20,
    fontSize: 16,
    fontWeight: '450',
  },
  couponInput: {
    paddingLeft: 10,
    paddingTop: 0,
    placeholderTextColor: Color.black,
    fontWeight: '550',
    fontSize: 20,
    paddingTop: 10,
  },
  couponContainer: {
    paddingLeft: 20,
    flexDirection: 'row',
    borderWidth: 1,
    width: '95%',
    paddingTop: 20,
    borderColor: Color.white,
    marginLeft: 10,
    borderBottomColor: Color.darkGrey,
  },
  couponCode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  couponIcon: {
    paddingTop: 10,
  },

  bottom: {
    backgroundColor: '#161e1b',
    padding: 10,
    flexDirection: 'row',
    position:'relative'
  },
  footerBar: {
    color: 'green',
  },
  subTotal: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
  saveMsg: {
    color: 'white',
    fontWeight: '500',
    fontSize: 13,
  },
  checkOut: {
    marginLeft: 120,
    marginTop: 10,
    width: 130,
    padding: 5,
    alignItems: 'center',
    textAlign: 'center',
    height: 40,
    backgroundColor: Color.green,
  },
  checkoutButton: {
    color: Color.white,
    fontSize: 17,
  },
  modalcontainer: {
    flex: 1,
    backgroundColor: Color.blackLite,
  },
  modal: {
    height: '15%',
    width: '80%',
    marginLeft: '10%',
    marginVertical: '70%',

    backgroundColor: Color.white,
    padding: 20,
    borderRadius: 10,
  },
  modalOkButton: {
    color: Color.green,
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 20,
  },
  modalOkButtonContainer: {
    alignItems: 'center',
    flexDirection: 'column-reverse',
  },
  modalCartMessage: {
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default styles;
