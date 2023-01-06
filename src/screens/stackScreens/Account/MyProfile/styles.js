import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
  alin: {
    alignItems: 'center',
    marginVertical: 40,
  },
  imgContainer: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderRadius: 60,
  },
});

export default styles;
