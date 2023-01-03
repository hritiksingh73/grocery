import {StyleSheet} from 'react-native';

import {Color} from '../../constant/Color';
const styles = StyleSheet.create({
  search: {
    alignItems: 'center',
    marginLeft: '35%',
    fontSize: 20,
    color: Color.black,
  },
  mainContainer: {
    paddingBottom: 2,
    // paddingLeft: 15,
     backgroundColor:Color.white
  },
  imageCard: {
    resizeMode: 'contain',
    width: '100%',
    height: '55%',
  },
  imageContainer: {
    width: 185,
    height: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.liteGrey,
    // paddingLeft: 15,
  },
  imageTitle: {
    fontSize: 15,
    color: Color.black,
    fontWeight: '500',
    paddingLeft: 20,
  },
  rating: {
    paddingRight: 70,
  },
  price: {
    color: Color.green,
    paddingLeft: 20,
  },
  addButton: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  addtocart: {
    borderColor: Color.liteGrey,
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontWeight: '500',
    marginTop: 20,
  },
  searchBar: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: Color.liteGrey,
    marginTop: '10%',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    right:40
  },
  searchIcon: {
    paddingTop: 13,
    color: Color.black,
  },
  txtFields: {
    fontSize: 18,
    paddingLeft: 10,
  },

  title: {
    fontSize: 18,
    margin: 10,
    marginLeft: 10,
  },

  header: {
    flexDirection: 'row',
    // paddingLeft: 20,
  },

  flatlistData: {
    marginTop: 30,
    height: 150,
    width: 220,
  },
  recent: {
    fontSize: 18,
    fontWeight: 'bold',
    // paddingLeft: 20,
    paddingVertical: 20,
    color: Color.black,
  },
  container:{
    paddingLeft: 20,
    backgroundColor:Color.white
  }
  
});

export default styles;
