import {StyleSheet} from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 15,
  },
  heart: {
    paddingLeft: '25%',
  },
  heartIcon: {
    color: color.grey,
  },
  image: {
    resizeMode: 'contain',
    width: '82%',
    height: '64%',
    marginTop: 5,
  },
  mainHeadingStyle: {
    flexDirection: 'row',
    top: 10,
  },
  arrowIconStyle: {
    paddingLeft: '45%',
  },
  buttonText: {
    borderWidth: 1,
    borderColor: color.lightgrey,
    width: 150,
    height: 45,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    bottom: 30,
  },
  fresh: {
    color: color.white,
    marginTop: 50,
    position: 'absolute',
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 100,
  },
  superFresh: {
    fontSize: 18,
    margnLeft: 50,
    margin: 10,
  },
  rating: {
    fontSize: 30,
    color: color.primary,
    marginLeft: 10,
  },
  title: {
    position: 'absolute',
    top: '50%',
    color: color.white,
    fontSize: 15,
    paddingHorizontal: 30,
    width: 350,
    fontWeight: 'bold',
  },
  vegetableImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginLeft: 100,
  },
  titleText: {
    fontSize: 18,
    bottom: 40,
    marginLeft: 10,
  },
  freshImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainImageStyle: {
    height: 260,
    width: 390,
    flexDirection: 'row',
    marginLeft: 8,
  },
  imageBoxStyle: {
    width: 220,
    height: 280,
    borderWidth: 1,
    borderColor: color.lightgrey,
    marginTop: 25,
  },
  button: {
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  headingStyle: {
    fontWeight: '500',
    fontSize: 20,
    paddingLeft: 10,
  },
  imageBrderStyle: {
    height: 200,
    width: 390,
  },
  priceText: {
    fontSize: 18,
    color: color.primary,
    marginLeft: 10,
    bottom: 30,
  },
  productData: {
    width: '50%',
    height: 250,
    borderWidth: 1,
    borderColor: color.grey,
    backgroundColor: color.white,
  },
  products: {
    fontSize: 20,
    margin: 10,
  },
  superImage: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  trendingTextStyle: {
    fontWeight: '500',
    fontSize: 20,
    padding: 10,
  },
});

export default styles;
