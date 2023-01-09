import {StyleSheet} from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  dataText: {
    margin: 10,
    fontSize: 16,
    bottom: 25,
  },
  headingText: {
    margin: 30,
    marginLeft: 2,
  },
  relatedStyle: {
    marginLeft: 20,
    bottom: 17,
  },
  headingStyle: {
    fontWeight: '600',
    fontSize: 16,
    color: 'black',
  },
  mainImageStyle: {
    width: '96%',
    backgroundColor: color.white,
    borderColor: color.darkgrey,
    height: 320,
    paddingRight: '1%',
  },
  titleText: {
    fontSize: 18,
    margin: 10,
    marginLeft: 10,
  },
  imageStyle: {
    resizeMode: 'cover',
    width: 280,
    height: '52%',
    marginLeft: 60,
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
  },
  priceStyle: {
    fontSize: 18,
    color: color.primary,
    marginLeft: 10,
  },
  detailStyle: {
    flexDirection: 'row',
    marginTop: '5%',
    marginLeft: 70,
    justifyContent: 'space-between',
  },
  detailText: {
    color: color.primary,
    fontWeight: '600',
    fontSize: 15,
  },
  oftenTextStyle: {
    fontWeight: '600',
    fontSize: 15,
    marginRight: 70,
  },
  textStyle: {
    marginLeft: 34,
    paddingVertical: 5,
    fontSize: 15,
    fontWeight: '600',
  },
  mainHeading: {
    right: '5%',
    marginTop: '2%',
    fontSize: 15,
  },
  buttonStyle: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    
  },
  bottomBtn: {
    flex: 1,
    //top: 20,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 15,
    top: 20,
    color: color.white,
    fontWeight: '400',
  },
  leftIconStyle: {
    paddingTop: 50,
  },
  descriptionStyle: {
    fontSize: 16,
    marginLeft: 15,
  },
});

export default styles;
