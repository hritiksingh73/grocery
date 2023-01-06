import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  rightIconContainer: {
    width: 40,
    alignItems: 'flex-end'
  },
  leftIconContainer: {
    width: 40,
    alignItems: 'flex-start'
  }
});

export default styles;
