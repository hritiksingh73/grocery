import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  constainer: {
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
  flexStyl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
  },
  headertitle: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  bgimage: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  horizontalSlidebar: {
    width: 350,
    height: 200,
    marginVertical: 10,
    marginRight: 10,
    marginTop: 25,
  },
  PopTxt: {
    fontWeight: '500',
    fontSize: 20,
    marginVertical: 10,
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
  block2: {
    width: 200,
    height: '40',
  },
  AtoCBtn: {
    textAlign: 'center',
    //borderWidth: 0.5,
    padding: 15,
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 0.5,
  },
  touchableArea: {
    marginHorizontal: 30,
    marginVertical: 10,
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
  superFresh: {
    alignItems: 'center',
  },
  productPrice: {
    fontWeight: 'bold',
    marginHorizontal: 20,
    color: 'green',
  },
  headerIcon: {
    right: 160,
    top: 5,
  },
  headerIconTwo: {
    left: 160,
    bottom: 25,
  },
  heartIcon: {
    left: 70,
  },
  trendingNearContain: {
    marginHorizontal: -20
  }
});
