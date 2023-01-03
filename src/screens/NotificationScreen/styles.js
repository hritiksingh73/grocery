import {StyleSheet, Text, View} from 'react-native';
import {Color} from '../../constant/Color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: "5%",
  },
  header: {
    fontSize: 20,
    color: Color.black,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
  notificationDataRow: {
    borderBottomColor: Color.liteGrey,
    paddingVertical: 12,
    borderWidth: 1,
    borderLeftColor: Color.white,
    borderRightColor: Color.white,
    borderTopColor: Color.white,
  },
  notification: {
    paddingLeft: "5%",
    fontWeight: '500',
    color: Color.black,
  },
  notificationDate: {
    fontSize: 12,
    paddingLeft: "5%",
    fontWeight: '500',
  },
});

export default styles;
