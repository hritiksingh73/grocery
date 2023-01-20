import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  btnAlign: {
    alignItems: 'center',

  },
  loginTxtArea: {
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 3,
    backgroundColor: colors.green,
  },
  loginBtn: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    paddingHorizontal: 35,
    paddingVertical: 14,
  },
});

export default styles;

// customBtnAlignment: {
//   alignItems: 'flex-end',
//   alignItems: 'flex-start',
// }
// customBtnContainerStyle: {
//   backgroundColor: colors.white,
//   borderWidth: 1,
//   borderColor: colors.green,
// },
// customBtnTextStyle: {
//   color: colors.gray_70,
//   paddingHorizontal: 14,
//   paddingVertical: 12,
// },