import {Platform ,StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
      borderBottomWidth: 1,
      borderBottomColor: colors.lightgray,
      paddingVertical: '3%',
      marginTop: '6%',
      marginBottom: 4,
      flexDirection: 'row',
      width: '100%',
    },
    txtField: {
      color: colors.black,
      fontSize: 18,
      width: '78%',
    },
    icons: {
      color: colors.black,
      width: '6%',
      marginRight: '4%',
      marginLeft: '1%',
      marginTop: Platform.OS === 'ios' ? '0%' : '4%',
    },
    rightIconsArea: {
      width: '6%',
      marginRight: '1%',
      marginLeft: '4%',
    },
    rightIcons: {
      color: colors.black,
      width: '100%',
      marginTop: Platform.OS === 'ios' ? '0%' : '70%',
    },
    warningTxt: {
      color: colors.red,
    }
  });

export default styles;
