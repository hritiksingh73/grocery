import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imgStyle: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
    margin: 10,
  },
  carouselImgStyle: {
    height: '88%',
    margin: 5,
  },
  renderItem: {
    marginTop: 25,
  },
  productsTxt: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: '4%',
    bottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
  },
  txtContainer: {marginHorizontal: 20},
  itemDivider: {
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  bottomLine: {
    marginVertical: 20,
  },
  sortedItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
