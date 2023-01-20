import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    itemSepertor: {
      width: '100%',
      borderBottomWidth: 1,
      borderColor: colors.gray_85,
      marginVertical: 22,
    },
    txtArea: {
      fontSize: 16,
      color: colors.black_10,
      marginHorizontal: 20,
      marginTop: 5,
    },
    flexDirForRow: {
      flexDirection: 'row', 
      marginLeft: 18
    },
  });

export default styles;