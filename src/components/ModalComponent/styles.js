import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    height: '20%',
  },
  message: {
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 16,
  },
  btnstyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
