import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray_85,
    paddingVertical: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '2%',
  },
  iconTxtPair: {
    alignItems: 'center',
  },
  circleStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.gray_85,
    alignItems: 'center',
  },
  iconStyle: {
    marginTop: 10,
  },
  txtStyling: {
    width: 80,
    fontSize: 13,
    color: colors.gray,
    textAlign: 'center',
    marginVertical: 12,
  },
  timelineBarContainer: {
    width: '79%',
    height: 5,
    position: 'absolute',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: '10.5%',
  },
  timelineProgressLeft: {
    width: '36%',
    height: 2,
    backgroundColor: colors.gray_85,
    marginTop: 0,
  },
  // timelineProgressRight: {
  //     width: '36%',
  //     height: 2,
  //     backgroundColor: colors.gray_85,
  //     marginTop: 2,
  // },
});

export default styles;
