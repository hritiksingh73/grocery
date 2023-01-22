import {StyleSheet} from 'react-native';

import {Color} from '../../../constant/Color';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.white
  },
  containerBody: {
    paddingLeft: '3%',
    paddingVertical: 35,
    backgroundColor: Color.white,
    
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5%',
  },
  header: {
    fontSize: 20,
    color: Color.black,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
  addressContainer: {
    borderWidth: 2,
    borderColor: Color.greyish,
    width: 320,
    padding: 15,
    margin: 5,
    marginLeft: 20,
  },
  recipientName: {
    flexDirection: 'row',
  },
  nameContainer: {
    flexDirection: 'row',
  },
  deliverHere: {
    textAlign: 'center',
    justifyContent: 'center',
    color: Color.white,
  },
  deliverButtonContainer: {
    backgroundColor: Color.green,
    width: '45%',
    height: 45,
    paddingTop: '3%',
    marginTop: 8,
  },
  customerName: {
    flexDirection: 'row',
  },
  userName: {
    fontSize: 18,
    color: Color.black,
    fontWeight: '600',
  },
  addNewAddressButtonContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: Color.white,
    borderColor: Color.greyish,
    width: '45%',
    height: 45,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30%',
  },
  addNewAdddressButton: {
    color: Color.darkGrey,
    paddingLeft:10
  },
  saveAndNextButtonContainer: {
    borderWidth: 1,
    backgroundColor: Color.green,
    borderColor: Color.greyish,
    width: '35%',
    height: 45,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '35%',
    marginTop: 20,
  },
  saveAndNextButton: {
    color: Color.white,
  },
});

export default styles;
