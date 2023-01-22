import {StyleSheet, Text, View} from 'react-native';
import {Color} from '../../../../constant/Color';

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: 'white',
  },
  mainHeader: {
    flexDirection: 'row',
    backgroundColor: Color.white,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
    margin: 15,
  },
  containerHeader: {
    flexDirection: 'row',
  },
  orderId: {
    fontSize: 15,
    fontWeight: '600',
    color: Color.black,
  },
  containerHeaderPrice: {
    left: 150,
    fontWeight: '800',
    color: Color.black,
  },
  icon: {
    paddingTop: 30,
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 28,
    paddingLeft: 120,
    color: Color.black,
  },
  viewDetailButton: {
    width: 120,
    height: 40,
    paddingTop: 10,
    textAlign: 'center',
    backgroundColor: Color.green,
    color: Color.white,
  },
  rateOrderButton: {
    width: 120,
    height: 40,
    paddingTop: 10,
    marginRight: 30,
    textAlign: 'center',
    color: Color.green,
  },
  footerButton: {
    flexDirection: 'row',
    //justifyContent: 'center',
    marginTop: '3%',
    paddingBottom: 16,
  },
});

export default styles;
