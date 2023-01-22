import {Color} from '../../../constant/Color';
import {StyleSheet} from 'react-native';

styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    flex: 1,
    borderWidth: 1,
  },
  groceryHeader: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '10%',
    backgroundColor: Color.white,
  },
  userInputHeader: {
    paddingLeft: 55,
    paddingTop: '5%',
  },
  userDetails: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    width: 330,
    borderBottomColor: Color.green,
  },
  forgetPassword: {
    fontSize: 20,
    color: Color.green,
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: '3%',
  },
  loginButtonContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: '2%',
  },
  loginButton: {
    fontSize: 20,
    color: Color.white,
    borderRadius: 3,
    width: 100,
    height: 30,
    backgroundColor: Color.green,
    textAlign: 'center',
  },

  bottomHeadline: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: '5%',
  },
  errormsg: {
    color: Color.red,
    paddingLeft: '14%',
  },
  or: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '5%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    marginHorizontal: '5%',
  },
  text: {
    width: 50,
    textAlign: 'center',
  },
  continuewith: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: '7%',
  },
  imagebutton: {
    width: 130,
    height: 50,
  },
  bottomSocialMedia: {
    flexDirection: 'row',
    paddingHorizontal: '13%',
    alignContent: 'space-between',
    paddingTop: '4%',
  },
  facebook: {
    width: 130,
    height: 50,
  },
  googleImage: {
    width: 130,
    height: 50,
  },
  bottomFacebook: {
    paddingRight: '8%',
  },
  bottomGoogle: {
    paddingLeft: '8%',
  },
});

export default styles;
