import {StyleSheet} from 'react-native';
import {Color} from '../../constant/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    paddingLeft: 20,
  },
  card: {
    width: '96%',
    backgroundColor: Color.white,
    borderRadius: 5,
    borderColor: Color.darkGrey,
    height: 320,
    paddingRight: '1%',
  },
  imgStyle: {
    height: '95%',
    resizeMode: 'contain',
  },
  itemTitle: {
    fontWeight: '600',
    color: Color.black,
    fontSize: 20,
  },
  priceBracket: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  price: {
    color: Color.green,
    paddingRight: 5,
    fontWeight: '800',
    fontSize: 20,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontSize: 20,
    paddingLeft: 20,
    color: Color.greyish,
    fontWeight: '800',
  },
  addButton: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  addtocart: {
    borderColor: Color.darkGrey,
    borderWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 10,
    fontWeight: '500',
    marginTop: 20,
  },

  imageSize: {
    width: '90%',
    height: '85%',
  },
  headerBlock: {
    height: '35%',
  },
  itemName: {
    fontSize: 20,
    color: Color.black,
  },

  itemDescription: {
    fontSize: 16,
    paddingTop: 20,
  },
  itemDescriptionContainer: {
    marginTop: '20%',
  },

  footerheading: {
    fontWeight: '600',
    fontSize: 22,
    color: Color.black,
    marginVertical: 30,
  },

  buttonStyle: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footerButtonLeft: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#161e1b',
  },
  footerButtonRight: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    backgroundColor: Color.green,
  },
  btnText: {
    fontSize: 15,
    color: Color.white,
    fontWeight: '400',
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
  },
  relatedItemImagecard: {
    width: 200,
    backgroundColor: Color.white,
    borderRadius: 5,
    borderColor: Color.liteGrey,
    borderWidth: 1,
    height: 320,
    paddingBottom: 150,
  },
  relatedItemImageTitle: {
    fontWeight: '600',
    color: Color.black,
    fontSize: 20,
    paddingLeft: 20,
  },
  relatedItemPriceBracket: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  relatedItemprice: {
    color: Color.green,
    paddingRight: 5,
    fontWeight: '800',
    fontSize: 16,
  },
  relatedItemOldPrice: {
    textDecorationLine: 'line-through',
    fontSize: 16,
    paddingLeft: 10,
    color: Color.greyish,
    fontWeight: '800',
  },
});

export default styles;
