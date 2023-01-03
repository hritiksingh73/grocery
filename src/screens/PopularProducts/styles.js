import {StyleSheet} from 'react-native';
import {Color} from '../../constant/Color';

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: Color.white,
  },
  card: {
    width: '50%',
    borderColor: Color.liteGrey,
    marginVertical: 0,
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  itemTitle: {
    fontWeight: '600',
    paddingRight: 80,
    color: Color.black,
    fontSize: 16,
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
    color:Color.greyish,
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
  imgStyle: {
    width: '70%',
    height: 160,
    marginLeft: '15%',
    resizeMode: 'contain',
  },
  imgContainer: {
    paddingHorizontal: 0,
    alignItems: 'center',
  },
  popularProducts: {
    fontSize: 20,
    color: Color.black,
    fontWeight: '500',
  },
  choices: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Color.liteGrey,
    backgroundColor: Color.white,
  },
  filter: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Color.liteGrey,
  },
  choicebracket: {
    fontSize: 14,
    color: Color.black,
    fontWeight: '600',
  },
});

export default styles;
