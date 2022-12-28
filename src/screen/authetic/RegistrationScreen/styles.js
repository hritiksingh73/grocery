import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  subContainer: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    top: '20%',
    right: '33%',
  },
  icon: {
    top: '2%',
    right: '35%',
  },
  field: {
    bottom: 238,
    right: 130,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: 'rgb(112,192,59)',
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    top: -140,
  },
  log: {
    bottom: 60,
    fontSize: 15,
    fontWeight: 'bold',
    right: 20,
  },
  logtwo: {
    bottom: 78,
    left: 112,
  },
  icontwo: {
    bottom: 230,
    right: 165,
  },
  errorMsg: {
    color: 'red',
    bottom: '20%',
    right: '30%',
  },
  loginText: {
    color: 'rgb(112,192,59)',
    fontSize: 15,
    fontWeight: 'bold',
  },
  errorMsgofPass: {
    color: 'red',
    bottom: '380%',
    right: '30%',
  },
});
