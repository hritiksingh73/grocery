import {StyleSheet} from 'react-native';
import {Color} from '../../constant/Color';

const styles = StyleSheet.create({
  billingTextStyling: {
    fontSize: 16,
    marginVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Color.darkGrey,
    color: Color.black,
  },
  billingUnits: {
    fontWeight: '800',
    fontSize: 15,
  },
  billingStyling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Color.darkGrey,
    padding: 10,
    margin: 10,
  },
});

export default styles;
