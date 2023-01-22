import { StyleSheet } from 'react-native'
import { Color } from '../../../constant/Color';


const styles = StyleSheet.create({
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
  avator:{
   alignItems:'center',
   marginTop:"5%"
  }
})

export default styles;