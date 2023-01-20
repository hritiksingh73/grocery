import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
  orderIdHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  orderIdStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
  numOfItem: {
    justifyContent: 'center',
  },
  superFreshText: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgSize: {
    width: 40,
    height: 40,
  },
  imgStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },

  // FlatList style
  flatListContainer: {
    marginHorizontal: 10,
  },
  flatListBlock: {
    width: 140,
    height: 200,
    borderWidth: 1,
    borderColor: colors.gray_70,
    margin: 5,
  },
  imageContainer: {
    width: '100%',
    height: '50%',
    padding: 5,
  },
  itemImgStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    width: '100%',
    height: '50%',
    padding: 10,
  },
  title: {
    fontWeight: '500',
  },
  price: {
    marginVertical: 8,
    fontWeight: '500',
    color: 'green',
  },
  quantity: {
    marginTop: 5,
    fontWeight: '500',
  },

  // shipping Details style
  addressHeader: {
    fontSize: 20,
    fontWeight: '500',
    margin: 15,
  },
  addressContainer: {
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.gray_70,
    borderRadius: 3,
    padding: 20,
  },
  addressTitle: {
    fontSize: 18,
    marginBottom: 12,
  },
  addressDescription: {
    color: colors.gray,
  },

  // billing styles
  billingContainer: {
    borderWidth: 1,
    marginVertical: 25,
    paddingVertical: 25,
    borderColor: colors.gray_70,
  },
  billingBoxStyling: {
    marginHorizontal: 15,
  },
  billBoxHeader: {
    fontSize: 22,
    marginVertical: 8,
  },
  billingTxtBorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightgray,
  },
  subTotalBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  billingTotalTxt: {
    fontSize: 17,
    fontWeight: '700',
    marginVertical: 15,
  },
  totalPricingStyl: {
    fontSize: 17,
    fontWeight: '700',
    marginVertical: 15,
  },
  billDetailTxt: {
    fontSize: 16,
    marginVertical: 15,
    borderBottomColor: colors.black,
  },
  pricingStyl: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 15,
  },
  paymentHeader: {
    fontSize: 22,
    fontWeight: '500',
    marginHorizontal: 15,
  },
  paymentType: {
    marginHorizontal: 15,
    marginVertical: 10,
    fontWeight: '500',
  },
});

export default styles;
