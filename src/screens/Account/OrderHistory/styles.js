import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  screenMargin: {
    marginHorizontal: 14,
    marginVertical: 20,
  },
  historyRecordContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.gray_85,
    paddingHorizontal: 15,
    paddingVertical: 20,
    paddingTop: 25,
  },
  orderAndPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  orderIdBlock: {
    fontSize: 16,
    fontWeight: '600',
  },
  dateStyling: {
    color: colors.gray,
  },
  statusStyling: {
    fontSize: 16,
    marginTop: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  customBtnContainerStyle: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.green,
  },
  customBtnTextStyle: {
    color: colors.green,
  },
});

export default styles;
