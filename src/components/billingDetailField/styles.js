import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  billingTxtBorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1, 
    borderBottomColor: colors.lightgray,
  },    
    billDetailTxt: {
    fontSize: 16,
    marginVertical: 15,
    borderBottomColor: colors.black,
  },
  pricingStyl: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 15,
  },
});
  
  export default styles;