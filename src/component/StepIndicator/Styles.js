import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Color } from '../../constant/Color';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
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
});

export default styles;
