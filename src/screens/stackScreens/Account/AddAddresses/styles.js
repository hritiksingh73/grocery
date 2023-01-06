import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';

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
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      margin: 1,
    },
    // btnMarginL: {
    //   marginRight: 5,
    // },
    // btnMarginR: {
    //   marginLeft: 5,
    // }
  });
  
  export default styles;