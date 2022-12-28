import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  conatiner: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  innerContainer: {
    marginHorizontal: '5%',
  },
  headerConatiner: {
    marginTop: '4%',
    flexDirection: 'row',
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  headImg: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 1,
    // marginHorizontal: 20,
    // marginVertical: 20,
  },
  headTxt: {
    fontWeight: '500',
    marginLeft: '35%',
    fontSize: 20,
  },
  headerConatinerTwo: {
    marginTop: '4%',
    flexDirection: 'row',
    marginLeft: '5%',
  },
  superFreshTxt: {
    marginLeft: '3%',
    fontWeight: '600',
    marginTop: '2%',
  },
  flatcontainer: {
    width: '100%',
    height: 100,
    //height: 120,
    //backgroundColor: 'white',
    //alignSelf: 'center',

    //flexDirection: 'row',

    //borderBottomWidth: 1,
    //alignItems: 'center',
    //margin: '2%',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
  imgcontain: {
    width: '18%',
    height: '60%',
    marginTop: '8%',
    borderColor: 'grey',
    borderWidth: 0.5,
    marginHorizontal: '3%',
    //paddingVertical: '7%',
  },
  productName: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: '25%',
    bottom: '55%',
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',

    fontSize: 16,
    fontWeight: '400',
    marginLeft: '25%',
    bottom: '48%',
    color: 'green',
  },
  incBtn: {
    backgroundColor: 'white',

    height: 30,
    justifyContent: 'center',

    paddingLeft: 10,
    paddingRight: 10,
    left: 20,
    borderColor: 'grey',
    borderWidth: 2,
    marginHorizontal: 10,
  },
  incTxt: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  num: {
    left: 20,

    fontSize: 20,
    fontWeight: 'bold',
  },
  mathcontain: {
    flexDirection: 'row',
  },
  calculateButton: {
    marginLeft: '65%',
    bottom: '54%',
    flexDirection: 'row',
    //borderColor: 'green',
    //borderWidth: 1,
    //marginRight: '5%',
    //paddingVertical: '2%',
  },
  calculate: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 12,
    borderColor: 'grey',
    borderWidth: 0.5,
    paddingVertical: '2%',
  },
  couponCodeConatin: {
    flexDirection: 'row',
    marginTop: '5%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    paddingVertical: '4%',
  },
  couponText: {
    marginLeft: '2%',
    fontSize: 16,
  },
  applyText: {
    fontSize: 15,
    color: 'green',
    marginLeft: '50%',
    fontWeight: '600',
  },
  billDetailsCont: {
    marginTop: '5%',
  },
  billDetailHead: {
    paddingVertical: 20,
    fontSize: 22,
    fontWeight: '300',
  },
  billDInnerCont: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    paddingVertical: '2%',
    marginVertical: 5,
  },
  billDetailData: {
    fontWeight: '500',
    marginLeft: '75%',
  },
  billDDataTitle: {
    fontSize: 16,
  },
  subTotal: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  billTotalData: {
    fontWeight: '500',
    marginLeft: '70%',
    fontWeight: 'bold',
  },

  footer: {
    flexDirection: 'row',
    backgroundColor: 'rgb(22,30,27)',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 20,
  },
  totalAmount: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  totalText: {
    color: 'rgb(115,191,73)',
    fontWeight: '600',
    marginTop: 15,
  },
  discountMsg: {
    color: 'grey',
    fontWeight: '700',
    marginBottom: 15,
  },
  spaceBetwwen: {
    marginTop: 20,
  },
  checkOutBtn: {
    backgroundColor: 'rgb(115,191,73)',
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
  checkoutText: {
    fontWeight: 'bold',
    color: 'white',
  },
});
