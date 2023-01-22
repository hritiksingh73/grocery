import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../../constant/Color';

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: Color.white,
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
    marginHorizontal:20
  },
  textInputheaderContainer: {
    flexDirection: 'row',
  },
  halfInputContainer: {
    width: '45%',
    margin: 5,
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
