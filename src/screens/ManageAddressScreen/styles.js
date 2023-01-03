import {StyleSheet} from 'react-native';
import {Color} from '../../constant/Color';

const styles = StyleSheet.create({
  AddAddressHeader: {
    alignItems: 'center',
    marginLeft: '28%',
    fontSize: 20,
    color: Color.black,
  },
  header: {
    flexDirection: 'row',
    paddingTop: '4%',
  },
  addressContainer:{
    borderWidth:1
  },
  nameContainer:{
    flexDirection:'row',
    // borderWidth:1,
    flex:1,
    //padding:'4%'
  },
  iconContainer:{
    flexDirection:'row'
  },
  recipientName:{
    flexDirection:'row'
  },
  addressContainer:{
    borderWidth:1,
    margin:"5%",
    padding:'4%'
  },
  Icons:{
    paddingRight:20
  }
});
export default styles;
