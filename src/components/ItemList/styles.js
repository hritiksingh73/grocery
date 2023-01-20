import {StyleSheet, useWindowDimensions} from 'react-native';
import colors from '../../constants/colors';

// const {width} = useWindowDimensions();

const styles = StyleSheet.create({
  itemOuterContainer: {
    borderWidth: 1,
    borderColor: colors.lightgray,
    borderRadius: 3,
  },
  imgContainer: {
    padding: 15,
  },
  textContainer: {},
  itemImage: {
    width: '100%',
    height: '100%',
  },
  itemTitle: {
    fontSize: 18,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  mrpBlock: {
    marginHorizontal: 15,
    marginVertical: 5,
  },
  itemMrp: {
    fontSize: 17,
    color: 'green',
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

  // wishlist and plain item list styling apply conditionally
  addToCartBtn: {
    textAlign: 'center',
    fontSize: 15,
  },
  deleteWishlistBtn: {
    textAlign: 'center',
    fontSize: 15,
  },
  addToCartContainer: {
    borderWidth: 1,
    borderColor: colors.lightgray,
    marginHorizontal: 25,
    marginVertical: 14,
    padding: 15,
    borderRadius: 3,
  },
  addToCartContainerWishlist: {
    borderWidth: 1,
    borderColor: colors.lightgray,
    marginHorizontal: 10,
    marginVertical: 14,
    padding: 15,
    borderRadius: 3,
  },
  deleteBtnBlock: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default styles;
