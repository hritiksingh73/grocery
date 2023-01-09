import {StyleSheet} from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
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

  textStyle: {
    fontSize: 15,
    marginLeft: 10,
    margin:4
  },

  itemDivider: {
    borderWidth: 1,
    borderColor: 'lightgrey',
  },

  itemContainer: {
    margin: '4%',
    //marginLeft: 10,
  },
  timeStyle: {
    fontSize: 15,
    color: 'grey',
    marginLeft: 10,
   
  },
});

export default styles;
