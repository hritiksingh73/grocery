import {StyleSheet} from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchTextStyle: {
    alignItems: 'center',
    marginLeft: 150,
    fontSize: 20,
    fontWeight: '500',
  },
  mainContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  textInputStyle: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    margin: 10,
    marginLeft: 10,
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    padding: 10,
  },
  inputStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#EBEDEF',
    marginTop: 20,
    marginLeft: 20,
    width: '90%',
    height: 50,
  },
  searchIconStyle: {
    padding: 8,
  },
  textStyle: {
    borderRadius: 25,
    margin: 8,
    padding: 12,
    height: 42,
    fontSize: 15,
    width: '26%',
    marginLeft: 20,
    backgroundColor: '#EBEDEF',
  },
  imageBoxStyle: {
    width: 220,
    height: 280,
    borderWidth: 1,
    borderColor: color.lightgrey,
  },
  image: {
    resizeMode: 'contain',
    width: '82%',
    height: '64%',
    marginTop: 5,
  },
  titleText: {
    fontSize: 18,
    bottom: 40,
    marginLeft: 10,
  },
  priceText: {
    fontSize: 18,
    color: color.primary,
    marginLeft: 10,
    bottom: 30,
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
});

export default styles;
