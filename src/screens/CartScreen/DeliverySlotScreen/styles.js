import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../../constant/Color';

const styles = StyleSheet.create({
  containerBody: {
    paddingLeft: '3%',
    paddingVertical: 35,
  },
  headerTitle: {
    fontSize: 20,
    color: Color.black,
    // paddingVertical:15
  },
  
  day: {
    color: Color.black,
    fontWeight: '700',
    fontSize: 18,
  },
  text: {
    color: Color.black,
    fontWeight: '700',
    fontSize: 15,
  },
  deliverySlotContainer: {
    borderWidth: 1,
    width: 110,
    height: 50,
    alignItems: 'center',
    borderColor: Color.greyish,
  },
  deliveryTimeSlotContainer: {
    borderWidth: 1,
    borderColor: Color.greyish,
    height: 50,
    marginHorizontal: 10,
    justifyContent: 'center',
    marginTop: 20,
  },
  deliveryTimeSlot: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  timeSlotButtonContainer: {
    width: 100,
    height: 35,
  },
  timeSlotButtonText: {
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 5,
    width: 100,
    height: 35,
    backgroundColor: Color.green,
    color:Color.white
  },
  nextButtonTextContainer:{
    textAlign: 'center',
    alignItems: 'center',
    width: 100,
    height: 35,
    backgroundColor: Color.green,
    color:Color.white,
    marginVertical:20,
    left:"40%"
  },
  nextButtonText:{
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 5,
    width: 100,
    height: 35,
    backgroundColor: Color.green,
    color:Color.white,
  }
  
});

export default styles;
