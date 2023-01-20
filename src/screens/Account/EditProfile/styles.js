import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  alin: {
    alignItems: 'center',
  },
  imgContainer: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderRadius: 60,
    marginVertical: 30,
    marginBottom: 20,
  },
  uploadPhoto: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.green,
    marginBottom: 40,
  },
  userNameBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  nameBoxWidth: {
    width: '46%',
  },
  userNameBox: {
    borderBottomWidth: 1,
    borderColor: colors.gray_70,
  },
  userDetailsBox: {
    marginHorizontal: 25,
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: colors.gray_70,
  },
  emailContainer: {
    marginVertical: 18,
  },
  title: {
    color: colors.gray,
    fontWeight: '500',
    marginBottom: 10,
  },
  userEmail: {
    fontSize: 18,
    fontWeight: '500',
  },
  btnContainer: {
    marginVertical: 35,
  },
});

export default styles;
