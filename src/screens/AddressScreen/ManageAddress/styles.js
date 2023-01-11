import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  addressScreen: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginHorizontal: '4%',
    marginVertical: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameContainer: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexBasis: '50%',
  },
  iconStyle: {
    flexBasis: 35,
    alignSelf: 'flex-end',
  },
  btnContainer: {
    alignItems: 'center',
  },
  addressDetailContainer: {
    margin: 15,
  },
});
