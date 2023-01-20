import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  pageMargin: {
    marginHorizontal: '4%',
    marginVertical: '5%',
    width: '92%',
  },
  addressContainer: {
    marginBottom: 20,
    padding: 16,
    width: '100%',
    borderWidth: 0.5,
    borderColor: colors.gray_70,
    borderRadius: 3,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  headerTxt: {
    fontSize: 18,
    // borderWidth : 1,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconStyl: {
    marginLeft: 15,
    color: colors.gray,
  },
  fullAddress: {
    width: '75%',
    fontSize: 15,
    color: colors.gray,
    textAlign: 'justify',
  },
});

export default styles;
