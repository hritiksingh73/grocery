import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    pageMargin: {
      marginHorizontal: '5%',
      marginVertical: '5%',
    },
    userNameBlock: {
      flexDirection: 'row',
      width: '100%',
    },
    userNameStyle: {
      flex: 1,
      marginRight: '3%',
    },
    userSurNameStyle: {
      flex: 1,
      marginLeft: '3%',
    },
    btnStyl: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 1,
    },
    btnMargin: {
      margin: 5,
    },
    customBtnContainerStyle: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.green,
    },
    customBtnTextStyle: {
      color: colors.green,
    }
  });
  
  export default styles;