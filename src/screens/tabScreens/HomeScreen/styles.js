import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 15,
  },
  imgBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgStyl: {
    width: 40,
    height: 40,
    margin: 10,
    borderRadius: 20,
  },
  headerTitleBlock: {
    paddingVertical: 3,
  },
  headerTitleTxt: {
    fontSize: 16,
    fontWeight: '600',
  },
  headerRatingBlock: {
    alignItems: 'center',
    paddingVertical: 5,
  },
  bottomArrowIcon: {
    paddingLeft: 12,
  },
  heartIcon: {
    padding: 10,
    paddingLeft: 0,
    marginTop: 5,
    marginRight: 5,
  },
  carousalContainer: {
    paddingBottom: 10,
  },
  horizontalSlidebar: {
    // width: 350,
    height: 200,
    marginVertical: 10,
    // marginRight: 10,
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  txtOnImageContainer: {
    width: '80%',
    height: '60%',
    position: 'absolute',
    marginHorizontal: '10%',
    marginVertical: '10%',
  },
  txtOnImageHeader: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 40,
    textAlign: 'center',
    paddingVertical: 10,
  },
  txtOnImageContent: {
    color: colors.white,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 10,
  },
  bottomItemStyl: {
    marginVertical: 20,
  },
  productHeading: {
    fontSize: 18,
    fontWeight: '500',
    padding: 10,
  },

  //Api Data Styles
  productList: {
    width: 200,
    height: 300,
    borderWidth: 1,
    borderColor: colors.lightgray,
    marginVertical: 10,
    borderRightWidth: 0,
  },
  imgContainer: {
    width: '100%',
    height: '50%',
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  txtContainer: {
    width: '100%',
    height: '50%',
  },
  itemTitle: {
    fontSize: 18,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  addToCartBtn: {
    textAlign: 'center',
    fontSize: 15,
  },
  addToCartContainer: {
    borderWidth: 1,
    borderColor: colors.lightgray,
    marginHorizontal: 25,
    marginVertical: 10,
    padding: 15,
    borderRadius: 3,
  },
});

export default styles;
