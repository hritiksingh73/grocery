import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    container: {
      marginHorizontal: '8%',
    },
    heading: {
      fontSize: 25,
      fontWeight: '600',
      marginVertical: '4%',
    },
    footer: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
      marginTop: '60%',
    },
    loginHereTxt: {
      color: colors.green,
    }
  });

export default styles;