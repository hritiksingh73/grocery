import {StyleSheet} from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: color.white,
  },
  groceryImage: {
    width: 200,
    height: 50,
    marginTop: 35,
  },
  welcome: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  placeholderInput: {
    padding: 20,
    width: 350,
  },
  error: {
    marginRight: 260,
    color: 'red',
  },
  forgot: {
    color: color.primary,
    fontSize: 15,
    padding: 10,
  },
  login: {
    margin: 10,
  },
  or: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    margin: 5,
  },
  text: {
    width: 50,
    textAlign: 'center',
  },
  continuewith: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  button: {
    flexDirection: 'row',
    padding: 30,
  },
  facebook: {
    flexDirection: 'row',
    marginBottom: 20,
    marginRight: 20,
    paddingTop: 20,
    marginLeft: 15,
  },
  google: {
    flexDirection: 'row',
    marginBottom: 10,
    marginRight: 20,
    paddingTop: 20,
    height: 42,
    width: 140,
    marginLeft: 15,
  },
  account: {
    marginTop: 5,
    fontSize: 15,
  },
  bottomLine: {
    flexDirection: 'row',
  },
  register: {
    marginTop: 5,
    color: color.primary,
    fontSize: 15,
  },
});

export default styles;
