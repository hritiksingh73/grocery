import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  innerContainer: {
    marginHorizontal: 20,
  },
  header: {
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: -20,
    marginBottom: 10,
    bottom: 30,
  },
  headerIcon: {
    right: 160,
    top: 10,
  },
  headerIconTwo: {
    left: 160,
    bottom: 25,
  },
  sorting: {
    borderColor: 'grey',
    borderWidth: 1,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  sortIcon: {
    marginHorizontal: '15%',
  },
  sortText: {
    right: '170%',
    top: '1%',
    fontSize: 15,
    fontWeight: '500',
  },
  sortIconTwo: {
    marginHorizontal: '20%',
  },
  filterText: {
    right: '225%',
    top: '1%',
    fontSize: 15,
    fontWeight: '500',
  },
  itemContainer: {
    width: 200,
    height: 300,
    marginVertical: -25,
    marginTop: -10,
    flexDirection: 'column',
    borderColor: 'lightgrey',
    borderWidth: 2,
  },
  innerSection: {
    width: '100%',
    height: '100%',
  },
  block1: {
    width: 200,
    height: '60%',
  },
  bgimage: {
    width: '100%',
    height: '100%',
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
    padding: 15,
  },
});
export default styles;
