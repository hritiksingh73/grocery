import {StyleSheet} from "react-native";
import color from '../../constant/color'

const styles = StyleSheet.create({
    priceText: {
        fontSize: 18,
        color: color.primary,
        marginLeft: 10,
        bottom:30
      },
      imageContainerStyle: {
        width: '50%',
        height: 280,
        borderWidth: 1,
        borderColor: color.grey,
        backgroundColor: color.white,
      },
      imageStyle: {
        resizeMode: 'contain',
        width: '82%',
        height: '64%',
        marginTop:10
      },
      titleText: {
        fontSize: 18,
        bottom: 40,
        marginLeft: 10,
      },
      buttonText: {
        borderWidth: 1,
        borderColor: color.lightgrey,
        width: 150,
        height: 45,
        bottom:30,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
      },
})

export default styles;
