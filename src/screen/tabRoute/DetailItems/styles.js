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
    right: '8%',
    marginTop: '1%',
  },
  headerImage: {
    height: 200,
    width: '100%',
    marginLeft: '5%',
  },
  title: {
    marginVertical: '1%',
    fontSize: 25,
    fontWeight: '300',
  },
  price: {
    color: 'rgb(121,194,81)',
    fontSize: 18,
    fontWeight: '600',
  },
  string: {
    width: '125%',
    right: '10%',
    marginVertical: '5%',
    lineHeight: 25,
  },
  detail: {
    flexDirection: 'row',
    marginTop: '5%',
    justifyContent: 'space-between',
  },
  detailOption: {
    color: 'rgb(121,194,81)',
    fontWeight: '500',
  },
  diffOption: {
    paddingVertical: 5,
    fontSize: 15,
    fontWeight: '600',
  },
  diffOptionConatin: {
    right: '5%',
    marginTop: '2%',
  },
  relatedItemsHeading: {
    marginTop: '8%',
    right: '10%',
    fontSize: 20,
    fontWeight: '700',
  },
  itemContainer: {
    width: 200,
    height: 300,
    marginVertical: 10,
    marginTop: -10,
    flexDirection: 'column',
  },
  block1: {
    width: 200,
    height: '60%',
  },
  innerSection: {
    width: '100%',
    height: '100%',
    borderWidth: 0.5,
  },
  productName: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  AtoCBtn: {
    textAlign: 'center',
    //borderWidth: 0.5,
    padding: 15,
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 0.5,
  },
  productPrice: {
    fontWeight: 'bold',
    marginHorizontal: 20,
    color: 'green',
  },
  bgimage: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  footer: {
    flexDirection: 'row',
    marginTop: '2%',
    justifyContent: 'space-between',
  },
  footerButton: {
    borderColor: 'rgb(22,30,27)',
    borderWidth: 2,
    backgroundColor: 'rgb(22,30,27)',

    width: '50%',
    paddingVertical: 15,
  },
  textInButton: {
    bottom: 10,
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',
  },
  footerButtonTwo: {
    borderColor: 'rgb(115,191,73)',
    borderWidth: 2,
    backgroundColor: 'rgb(115,191,73)',

    width: '50%',
    paddingVertical: 15,
  },
  flatlistContain: {
    marginTop: '5%',
  },
});
export default styles;
