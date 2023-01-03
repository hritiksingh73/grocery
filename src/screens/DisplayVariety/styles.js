import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Color} from '../../constant/Color';

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#e6e6e6',
    marginVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  card: {
    width: '50%',
    borderColor: Color.liteGrey,
    marginVertical: 0,
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  txtFields: {
    fontSize: 18,
    paddingLeft: 10,
  },
  mainContainer: {
    paddingBottom: 8,
    paddingLeft: 8,
    borderColor: Color.black,
  },
  imageCard: {
    resizeMode: 'contain',
    width: 150,
    height: 150,
  },
  imgContainer: {
    paddingHorizontal: 0,
    alignItems: 'center',
  },
  imageTitle: {
    fontSize: 15,
    color: Color.black,
    fontWeight: '500',
    paddingRight: 80,
  },
  priceBracket: {
    flexDirection: 'row',
    paddingRight: 50,
    paddingTop: 10,
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
  addButton: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  addtocart: {
    borderColor: Color.liteGrey,
    borderWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 10,
    fontWeight: '500',
    marginTop: 20,
  },

  rating: {
    paddingRight: 70,
  },
  imagerating: {
    fontSize: 15,
    color: Color.black,
    fontWeight: '500',
    paddingLeft: 20,
  },
  searchIcon: {
    paddingTop: 13,
  },
  container: {
    backgroundColor: 'white',
    paddingBottom: 120,
  },
});

export default styles;
