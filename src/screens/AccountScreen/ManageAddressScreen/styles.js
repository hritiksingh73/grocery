import {StyleSheet} from 'react-native';
import {Color} from '../../../constant/Color';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.white,
    flex: 1,
  },
  AddAddressHeader: {
    alignItems: 'center',
    marginLeft: '28%',
    fontSize: 20,
    color: Color.black,
  },
  header: {
    flexDirection: 'row',
    paddingTop: '4%',
    marginHorizontal: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  userName: {
    fontWeight: '500',
    color: Color.black,
    fontSize: 15,
    paddingBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  recipientName: {
    flexDirection: 'row',
  },
  addressContainer: {
    borderWidth: 1,
    marginHorizontal: '3%',
    marginVertical: '2%',
    padding: '4%',
    borderColor: Color.liteGrey,
  },
  Icons: {
    paddingRight: 20,
  },
  parentContainer: {
    top: 20,
  },
  add: {
    width: 150,
    height: 50,
    paddingTop: 10,
    textAlign: 'center',
    backgroundColor: Color.green,
    color: Color.white,
  },
  addbutton: {
    alignItems: 'center',
    marginTop: 30,
  },
});
export default styles;
