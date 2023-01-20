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
  userName: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 40,
  },
  itemSeperator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.gray_70,
    marginVertical: 18,
  },
  emailContainer: {
    marginHorizontal: 15,
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
    marginVertical: 25,
  },
});

export default styles;
