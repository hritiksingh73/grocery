import {useState} from 'react';
import StepIndicator from 'react-native-step-indicator';
import {useNavigation} from '@react-navigation/native';

import {Color} from '../../constant/Color';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import CheckOutScreen from '../../screens/CartScreen/CheckOutScreen/CheckOutScreen';
import DeliverySlotScreen from '../../screens/CartScreen/DeliverySlotScreen/DeliverySlotScreen';
import styles from './Styles';
import PaymentScreen from '../../screens/CartScreen/PaymentScreen/PaymentScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const StepIndicatorProgressBar = ({route}) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const labels = ['Select Address', 'Select Delivery Slot', 'Payment'];
  const icons = ['map', 'truck', 'credit-card'];
  const navigation = useNavigation();

  const customStyles = {
    currentStepStrokeWidth: 6,
    separatorUnFinishedColor: Color.greyish,
    stepStrokeCurrentColor: Color.green,
    stepStrokeWidth: 3,
    stepStrokeUnFinishedColor: '#aaaaaa',
    stepIndicatorCurrentColor: Color.green,
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    labelColor: '#999999',
    currentStepLabelColor: Color.black,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={30} />
          </TouchableOpacity>
          <Text style={styles.header}>Checkout</Text>
        </View>
        <StepIndicator
          customStyles={customStyles}
          stepCount={3}
          direction="horizontal"
          currentPosition={currentPosition}
          labels={labels}
          renderStepIndicator={({position}) => (
            <Feather name={icons[position]} size={16} color="#fff" />
          )}
        />
        <>
          {currentPosition === 0 ? (
            <CheckOutScreen
              onScreenChange={position => setCurrentPosition(position)}
            />
          ) : currentPosition === 1 ? (
            <DeliverySlotScreen
              onScreenChange={position => setCurrentPosition(position)}
            />
          ) : (
            <PaymentScreen />
          )}
        </>
      </ScrollView>
    </SafeAreaView>
  );
};
