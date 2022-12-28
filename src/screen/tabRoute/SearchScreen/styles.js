
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  innerContainer: {
    marginHorizontal: '10%',
  },
  header: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  headerText: {
    marginHorizontal: '30%',
    marginTop: '2%',
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  searchBar: {
    borderColor: 'rgb(243,243,243)',
    borderWidth: 1,
    width: '100%',
    paddingVertical: '2%',
    paddingLeft: 40,
    backgroundColor: 'rgb(243,243,243)',
  },
  searchIcon: {
    right: 310,
    paddingTop: '3%',
    color: 'black',
  },
  recentSearchText: {
    marginTop: '5%',
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  recentSearch: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  recentSearchData: {
    marginHorizontal: '2%',
    borderColor: 'rgb(243,243,243)',
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    right: 20,
    backgroundColor: 'rgb(243,243,243)',
    color: 'black',
  },
  itemContainer: {
    width: 200,
    height: 300,
    marginVertical: -25,
    marginTop: -10,
    flexDirection: 'column',
  },
  innerSection: {
    width: '100%',
    height: '100%',
    borderWidth: 0.2,
  },
  block1: {
    width: 200,
    height: '60%',
  },
  bgimage: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  productPrice: {
    fontWeight: 'bold',
    marginHorizontal: 20,
    color: 'green',
  },
  productName: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  AtoCBtn: {
    textAlign: 'center',
    //borderWidth: 0.5,
    padding: 15,
  },
  recommend: {
    marginTop: '5%',
    borderWidth: 1,
    borderColor: 'lightgray',
  },
});
export default styles;
