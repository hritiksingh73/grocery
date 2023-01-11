import {StyleSheet} from 'react-native';
import {color} from '../../constant/color';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '35%',
  },
  recentSearch: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '4%',
    marginBottom: 10,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '93%',
    height: '7%',
    backgroundColor: color.secondry,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  recommendedTxt: {
    fontWeight: 'bold',
    marginVertical: 5,
    fontSize: 20,
    marginLeft: '4%',
  },
  recommendedProductContainer: {
    height: '40%',
    paddingTop: 10,
  },
});
