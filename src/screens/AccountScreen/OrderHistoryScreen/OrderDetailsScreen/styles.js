import {StyleSheet} from 'react-native';
import {Color} from '../../../../constant/Color';

const styles = StyleSheet.create({
  parentContainer: {
    paddingLeft: 15,
    backgroundColor: Color.white,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 28,
    paddingLeft: 120,
    color: Color.black,
  },
  mainContainer: {
    backgroundColor: Color.white,
    flexDirection: 'row',
  },
  icon: {
    paddingTop: 30,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderId: {
    fontSize: 16,
    color: 'black',
    marginHorizontal: '2%',
    marginVertical: '4%',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: '800',
    color: 'black',
    marginHorizontal: '2%',
    marginVertical: '4%',
  },
  relatedItemContainer: {
    // left: 25,
    paddingRight: 10,
  },
  relatedItemImagecard: {
    width: 150,
    backgroundColor: Color.white,
    borderRadius: 5,
    borderColor: Color.liteGrey,
    borderWidth: 1,
    height: 250,
    // paddingBottom: 150,
  },
  addtocart: {
    borderColor: Color.darkGrey,
    fontWeight: '500',
    paddingVertical: 10,
    marginLeft: 20,
  },
  imgStyle: {
    width: '70%',
    height: 160,
    marginLeft: '15%',
    resizeMode: 'contain',
  },
  relatedItemImageTitle: {
    fontWeight: '600',
    color: Color.black,
    fontSize: 20,
    paddingLeft: 20,
  },
  relatedItemprice: {
    color: Color.green,
    paddingRight: 5,
    fontWeight: '800',
    fontSize: 16,
    paddingLeft: 20,
  },
  shippingDetailHeader: {
    fontSize: 20,
    fontWeight: '400',
    color: Color.black,
    paddingVertical: 20,
  },
  userName: {
    fontWeight: '500',
    color: Color.black,
    fontSize: 17,
    paddingBottom: 10,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  addressContainer: {
    borderWidth: 1,
    // marginHorizontal: '3%',
    marginVertical: '2%',
    padding: '4%',
    borderColor: Color.liteGrey,
  },
  paymentMode: {
    fontSize: 20,
    paddingTop: 20,
    fontWeight: '500',
    color: Color.black,
  },
  paymentMethod: {
    fontSize: 15,
  },
});

export default styles;
