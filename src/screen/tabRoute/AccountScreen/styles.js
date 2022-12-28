import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  subHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHeader: {
    fontSize: 20,
    fontWeight: '600',
  },
  subContainer: {
    flex: 1,
    bottom: 250,
    right: 10,
  },
  arrange: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    alignItems: 'center',
    width: 400,
    padding: 15,
  },
  sequence: {
    flexDirection: 'row',

    top: -250,
    right: 20,

    borderBottomWidth: 3,
  },
  icondesign: {
    paddingHorizontal: 20,
  },
});
