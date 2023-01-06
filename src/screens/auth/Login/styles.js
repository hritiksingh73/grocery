import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  screenMargin: {
    marginHorizontal: '8%',
  },
  cntrItm: {
    alignItems: 'center',
  },
  headerImg: {
    marginTop: '15%',
    marginBottom: '2%',
  },
  headerfnt: {
    color: colors.black,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  forgotTxtOpacity: {
    alignItems: 'center',
    marginHorizontal: '20%',
  },
  forgotTxt: {
    fontSize: 18,
    color: colors.green,
    fontWeight: '500',
  },
  flxDirectn: {
    flexDirection: 'row',
  },
  orTxtRow: {
    width: '43%',
    textAlign: 'center',
    color: colors.lightgray,
    marginTop: '4%',
    marginBottom: '8%',
  },
  orTxt: {
    width: '8%',
    textAlign: 'center',
    fontSize: 18,
    color: colors.black,
    marginHorizontal: 10,
    marginTop: '4%',
    marginBottom: '8%',
  },
  footerTxt: {
    color: colors.black,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: '10%',
  },
  imgContainer: {
    flexDirection: 'row',
    marginVertical: '12%',
  },
  fbBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.lightgray,
    borderRadius: 3,
    marginRight: 6,
  },
  googleBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.lightgray,
    borderRadius: 3,
    marginLeft: 6,
  },
  rgstrTxt: {
    color: colors.green,
  },
});

export default styles;
