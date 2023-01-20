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
  horizontalSlidebar: {
    height: 200,
    marginVertical: 10,
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
  productHeading: {
    fontSize: 18,
    fontWeight: '500',
    padding: 10,
    paddingVertical: 20,
  },
});

export default styles;
