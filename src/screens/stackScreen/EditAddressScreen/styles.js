import {StyleSheet} from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headingText: {
    marginLeft: 160,
    fontSize: 20,
    margin: 10,
    fontWeight: '500',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  inputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '80%',
  },
  btnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 120,
    marginLeft: 100,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    backgroundColor: color.primary,
  },
});
export default styles;
