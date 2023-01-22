import {StyleSheet} from 'react-native';

import {Color} from '../../constant/Color';

const styles = StyleSheet.create({
  mainHeader: {
    flexDirection: 'row',
    padding: 20,
  },
  wishList: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: Color.black,
  },

  card: {
    width: '50%',
    backgroundColor: Color.white,
    borderRadius: 5,
    borderColor: Color.liteGrey,
    borderWidth: 1,
    height: '100%',
    borderRightWidth: 0.0,
  },
  imgStyle: {
    width: '60%',
    height: 160,
    marginLeft: '15%',
    resizeMode: 'contain',
  },
  itemTitle: {
    fontWeight: '600',
    paddingLeft: 20,
    color: Color.black,
    fontSize: 16,
  },
  priceBracket: {
    flexDirection: 'row',
  },
  price: {
    color: Color.green,
    paddingLeft: 20,
    paddingRight: 5,
    fontSize: 16,
    fontWeight: '800',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontSize: 16,
    color: Color.greyish,
    fontWeight: '800',
  },
  rating: {
    paddingRight: 100,
  },
  itemButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 1,
    paddingLeft: 20,
  },
  bin: {
    paddingTop: 30,
    paddingLeft: 15,
  },
  addButton: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  addtocart: {
    borderColor: Color.darkGrey,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontWeight: '500',
    marginTop: 20,
  },
});

export default styles;
