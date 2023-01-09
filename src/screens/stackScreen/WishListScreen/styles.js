import {StyleSheet} from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 10,
    padding:10
  },
  buttonText: {
    paddingHorizontal: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  deleteStyle: {
    color: color.lightgrey,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingStyle: {
    fontSize: 20,
    marginRight: 160,
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
    margin: 10,
  },
  price: {
    fontSize: 15,
    marginLeft: 10,
    color: color.primary,
  },
  imageStyle: {
    width: '70%',
    height: 160,
    marginLeft: '15%',
    resizeMode: 'contain',
  },
  cart: {
    margin: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: color.grey,
    padding: 10,
  },
  imageContainer: {
    width: '50%',
    backgroundColor: color.white,
    borderColor: color.grey,
    borderWidth: 1,
    height: 310,
  },
});

export default styles;
