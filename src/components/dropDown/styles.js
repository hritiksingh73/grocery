import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  alinCntr: {
    alignItems: 'center',
  },
  padig: {
    padding: 10
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DropDownStyle: {
    width: '50%',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.lightgray,
    borderRadius: 3,
    margin: 2,
  },
  testing: {
    width: '60%',
    marginRight: '20%',
    marginLeft: '20%',
  }
});

export default styles;
