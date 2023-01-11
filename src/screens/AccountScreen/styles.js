import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 25,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  accountContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  iconStyle: {
    margin: 10,
  },
  txtStyle: {
    fontSize: 16,
  },
});
