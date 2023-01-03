import {StyleSheet, Text, View} from 'react-native';
import {Color} from '../Color';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    justifyContent: 'center',
    flex: 1,
  },
  chip: {
    margin: 8,
    width: 100,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: Color.liteGrey,
  },
});

export default styles;
