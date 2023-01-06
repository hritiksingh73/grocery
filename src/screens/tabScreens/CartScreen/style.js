import {Platform, StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    marginTop: Platform.OS === 'ios' ? '0%' : 10,
  },
  horizontlmrgn: {
    marginHorizontal: 12,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
  itemHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.lightgray,
  },
  headerTxt: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 5,
    paddingVertical: 20,
  },
  imgStyl: {
    width: 40,
    height: 40,
    margin: 10,
    borderRadius: 20,
  },
  cartItemContainer: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  imgCntnr: {
    padding: 5,
    borderWidth: 1,
    borderColor: colors.lightgray,
  },
  itemImg: {
    width: 60,
    height: 60,
  },
  itemTitleArea: {
    flex: 2,
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  itemTitle: {
    flex: 1,
    fontSize: 16,
    paddingTop: 10,
  },
  itemMrp: {
    flex: 1,
    fontSize: 16,
    paddingBottom: 5,
    color: 'green',
  },
  countingCntnr: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.lightgray,
    width: 110,
    height: 35,
    marginRight: 5,
    marginTop: 20,
  },
  counterBorder: {
    borderRightWidth: 1,
    borderColor: colors.lightgray,
  },
  dec: {
    width: 30,
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 3,
  },
  num: {
    width: 50,
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 6,
  },
  incrementBtnStyle: {
    backgroundColor: colors.green,
    borderLeftWidth: 1,
    borderColor: colors.lightgray,
  },
  inc: {
    width: 30,
    color: colors.white,
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 3,
  },
  borderBotm: {
    borderBottomWidth: 1,
    borderColor: colors.lightgray,
  },
  couponBlock: {
    backgroundColor: colors.gray_90,
    marginVertical: 12,
    paddingHorizontal: 20,
  },
  couponInnerBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray_70,
    padding: 10,
    paddingBottom: 16,
    paddingLeft: 0,
  },
  flxdir: {
    flexDirection: 'row',
  },
  couponIconStyl: {
    paddingHorizontal: 10,
    paddingTop: 1,
    marginTop: Platform.OS === 'ios' ? '0%' : 12,
  },
  couponTxt: {
    fontSize: 18,
  },
  applyBtn: {
    fontSize: 18,
    textAlign: 'right',
    color: colors.green,
    fontWeight: '600',
    marginTop: Platform.OS === 'ios' ? '0%' : 12,
  },
  billingBoxStyling: {
    marginHorizontal: 5,
  },
  billBoxHeader: {
    fontSize: 22,
    marginVertical: 15,
  },
  billingTxtBorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightgray,
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
  checkoutTxtBorder: {
    flexDirection: 'row',
    backgroundColor: colors.black,
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 20,
  },
  totClr: {
    color: colors.green,
    fontWeight: '600',
    marginTop: 20,
  },
  checkoutTotalTxt: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '500',
  },
  totMsg: {
    color: colors.gray,
    fontWeight: '500',
    marginBottom: 20,
  },
  topMrgn: {
    marginTop: 10,
  },
});

export default styles;
