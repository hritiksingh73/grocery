import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../constant/Color';

const styles = StyleSheet.create({
  AddAddressHeader: {
    alignItems: 'center',
    marginLeft: '28%',
    fontSize: 20,
    color: Color.black    
  },
  header: {
    flexDirection: 'row',
    paddingTop: '4%',
  },
  textInputheaderContainer: {
    flexDirection: 'row',
    width: '65%',
    justifyContent: 'space-between',
  },
  container: {
    paddingTop: '4%',
    paddingLeft: '5%',
    width: '100%',
  },
  add: {
    width: 80,
    height: 40,
    paddingTop: 10,
    textAlign: 'center',
    backgroundColor: Color.green,
    color: Color.white,
  },
  cancel: {
    width: 80,
    height: 40,
    paddingTop: 10,
    textAlign: 'center',
    color: Color.green,
  },
  footerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '10%',
  },
});
export default styles;
