import {StyleSheet} from 'react-native';
import color from '../../constant/color';

const styles = StyleSheet.create({
  billingTextStyling: {
    fontSize: 15,
    marginVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: color.black,
  },
  billingStyling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: color.lightgrey,
    margin: 5,
  },
  priceTotal: {
    fontSize: 17,
    fontWeight: '700',
    marginVertical: 15,
  },
});

export default styles;
