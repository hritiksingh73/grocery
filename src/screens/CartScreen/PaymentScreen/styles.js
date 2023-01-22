import {StyleSheet, Text, View} from 'react-native';

import {Color} from '../../../constant/Color';

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    color: Color.black,
    paddingVertical: 15,
    paddingLeft: 20,
  },
  paymentmethod: {
    flexDirection: 'row',
    paddingLeft:10
  },
  paymentButtonText: {
    paddingTop: 5,
    fontSize: 20,
  },
  placeOrderButtonContainer: {
    width: 100, height: 35,
    alignItems:'center',
    justifyContent:'center',
    paddingLeft:"50%",
    paddingVertical:50
},
  placeOrderButton: {
    extAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
    width: 100,
    height: 35,
    backgroundColor: Color.green,
    color:Color.white,textAlign:'center'
  },
});

export default styles;
