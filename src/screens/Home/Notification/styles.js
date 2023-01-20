import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: colors.gray_70,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  flatlistContainer: {
    marginVertical: 20,
  },
  messageStyle: {
    fontSize: 16,
    fontWeight: '500',
    paddingBottom: 8,
  },
  timeStyle: {
    color: colors.gray_25,
  },
});

export default styles;
