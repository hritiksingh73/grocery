import {StyleSheet} from 'react-native';
import {Color} from '../../../constant/Color';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.white,
    flex: 1,
  },
  menuList: {
    flexDirection: 'row',
    marginTop: '10%',
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: '5%',
  },
  favourite: {
    color: Color.black,
  },
  mycarticonsize: {
    fontSize: 18,
  },
  header: {
    fontSize: 18,
    color: Color.black,
    fontWeight: '600',
  },
});

export default styles;
