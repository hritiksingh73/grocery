import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '3%',
    marginVertical: 10,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  goBackIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 18,
  },
  txtInputStyles: {
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 16,
    fontSize: 16,
    backgroundColor: colors.gray_95,
  },
  productHeading: {
    fontSize: 16,
    fontWeight: '500',
    padding: 10,
    paddingTop: 20,
  },
  recentItemBlock: {
    flexDirection: 'column',
    width: '100%',
    height: 200,
    borderWidth: 1
  },
  itemRow: {
    flex: 1,
    flexDirection: 'row', 
    borderWidth: 1,
  },
  itemBlock: {
    flex: 1, 
    borderWidth: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // margin: 5,
    // borderRadius: 10,
    // backgroundColor: colors.gray_70,
  },
  itemBlockStyl: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 23,
    // margin: 10,
    paddingHorizontal: 40,
    paddingVertical: 12,
    backgroundColor: colors.gray_70,
  }
});

export default styles;
