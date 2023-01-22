import {Color} from '../../../constant/Color';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  userDetails: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: 350,
    borderRightColor: Color.white,
    borderLeftColor: Color.white,
    borderTopColor: Color.white,
    backgroundColor: Color.white,
    paddingTop: 5,
    borderWidth: 1,
    borderBottomColor: Color.darkGrey,
  },
  userInputHeader: {
    paddingLeft: 55,
    paddingTop: '3%',
    backgroundColor: Color.white,
  },
});

export default styles;
