import {StyleSheet, Text, View} from 'react-native';
import {Color} from '../../../constant/Color';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.white,
    flex: 1,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: "5%",
  },
  header: {
    fontSize: 20,
    color: Color.black,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
  orderPlacedImage: {
    width: '100%',
    height: '30%',
    resizeMode: 'contain',
  },
  orderConformationHeading:{
    fontSize:20,
    fontWeight:"700",
    color:Color.black,
    textAlign:'center'
  },
  orderConformationSubHeading:{
    fontSize:20,
    fontWeight:"400",
    color:Color.black,
    paddingTop:10,
    textAlign:'center'
  },
  orderid:{
    // marginTop: 20,
    // flexDirection: 'row',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Color.darkGrey,
    padding: 10,
    margin: 10,
  },
  orderDetail: {
    margin: 15,
    fontSize: 16,
    marginRight: '10%'
  },
  finalOrderText:{
    // fontSize:15,
    // fontWeight:"600",
    color:Color.black,
    margin: 15,
    fontSize: 16,
    marginRight: '10%',
  },
  finalFetchOrderText:{
    color:Color.black,
    margin: 15,
    fontSize: 16,
    marginRight: '10%',
    justifyContent:'space-between'
  },
  footerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '10%',
  },
  continueShoppingButton:{
    width: 120,
    height: 40,
    paddingTop: 10,
    marginRight:30,
    textAlign: 'center',
    color: Color.green,
  },
  okButton:{
    width: 80,
    height: 40,
    paddingTop: 10,
    textAlign: 'center',
    backgroundColor: Color.green,
    color: Color.white,
  }
});
export default styles;
