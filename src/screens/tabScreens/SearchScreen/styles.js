import {Platform, StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
  HorizMargin: {
    marginHorizontal: '2%',
    marginTop: Platform.OS === 'ios' ? '0%' : '4%',
  },
  bgColor: {
    backgroundColor: colors.white,
  },
  txtContainer: {
    backgroundColor: colors.gray_90,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: '4%',
    flexDirection: 'row',
  },
  searchIconStyle: {
    marginTop: Platform.OS === 'ios' ? '0%' : 12,
  },
  txtFields: {
    fontSize: 18,
    paddingLeft: 10,
  },
  itemOuterContainer: {
    width: '46%',
    height: 200,
    borderWidth: 1,
    borderColor: colors.lightgray,
    borderRadius: 3,
    margin: '2%',
  },
  itemContainer: {
    width: '100%',
    height: '70%',
    borderWidth: 1,
    borderColor: colors.lightgray,
  },
  itemTextContainer: {
    width: '100%',
    height: '30%',
  },
  itemName: {
    fontSize: 16,
    padding: 8,
    paddingBottom: 2,
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  ratingStyl: {
    padding: 6,
    alignItems: 'flex-start',
  },
});

export default styles;
