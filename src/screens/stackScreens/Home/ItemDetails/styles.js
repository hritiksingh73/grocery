import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  horizontalMargin: {
    marginHorizontal: '3%',
  },
  goBackIcon: {
    width: 20,
    height: 20,
    marginHorizontal: '3%',
    marginVertical: 10,
    resizeMode: 'contain',
  },
  itemBlock: {
    width: '100%',
    height: 300,
    // borderWidth: 1,
    alignItems: 'center',
  },
  bgImgBoxStyle: {
    width: '60%',
    height: '60%',
  },
  bgImgStyle: {
    width: '100%',
    height: '100%',
  },
  subItemsBox: {
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subItemBox: {
    width: '18%',
    height: '50%',
    borderWidth: 1,
    borderColor: colors.lightgray,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  priceRow: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  newPrice: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.greenNatural,
  },
  oldPrice: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 20,
    color: colors.gray,
    textDecorationLine: 'line-through',
  },
  quantityStyl: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.gray,
  },
  dummyTxt: {
    fontSize: 15,
    marginVertical: 20,
    textAlign: 'justify',
    color: colors.gray,
  },
  dummyTxt_2: {
    fontSize: 15,
    marginVertical: 10,
    textAlign: 'justify',
  },
  horizontalBar: {
    width: '100%', 
    backgroundColor: colors.gray_85, 
    height: 1,
    marginTop: 10,
  },
  productHeading: {
    fontSize: 18,
    fontWeight: '500',
    padding: 10,
    paddingTop: 20,
  },
  bottomBtnBar: {
    width: '100%', 
    height: 60, 
    flexDirection: 'row',
  },
  bottomBtn: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  btnTxtColor: {
    color: colors.white,
    fontWeight: '500',
  }
});

export default styles;
