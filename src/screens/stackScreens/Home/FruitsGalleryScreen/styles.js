import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: colors.gray,
  },
  topRightHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLeftHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sortStyl: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: '9%',
    marginHorizontal: 8,
  },
});

export default styles;
