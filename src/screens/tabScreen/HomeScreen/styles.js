import {StyleSheet} from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
  itemContainer: {
    width: '45%',
    height: 200,
    marginLeft: 15,
    marginRight: 1,
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 5,
    margin: 5,
  },
  veggies: {
    width: '100%',
    height: '70%',
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  input: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#EBEDEF',
    marginLeft: 15,
    width: '93%',
    height: '6%',
    margin: 7,
    borderWidth: 1,
    borderColor: 'silver',
  },
  mainHeader: {
    backgroundColor: color.white,
    flex:1
  },
  rating: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  textInput: {
    fontSize: 16,
    paddingLeft: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 7,
  },
});

export default styles;
