import React, {useState} from 'react';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StepIndicator from 'react-native-step-indicator';
import {Divider} from 'react-native-paper';

import {color} from '../../constant/color';
import SelectAddress from './SelectAddress';
import DeliverySlot from './DeliverySlot';
import Payment from './Payment';
import {globalStyle} from '../../constant/globalStyle';
import {styles} from './styles';
import CustomButton from '../../components/Button';

const CheckoutScreen = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const labels = ['Select Address', 'Select Delivery Slot', 'Payment'];
  const icons = ['map-marker-outline', 'truck', 'wallet'];

  const customStyles = {
    // stepIndicatorSize: 25,
    // currentStepIndicatorSize: 30,
    // separatorStrokeWidth: 2,
    currentStepStrokeWidth: 10,
    stepStrokeCurrentColor: color.primary,
    stepStrokeWidth: 3,
    // stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: color.primary,
    separatorUnFinishedColor: 'lightgrey',
    // stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: 'grey',
    // stepIndicatorCurrentColor: color.primary,
    // stepIndicatorLabelFontSize: 13,
    // currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: 'black',
    stepIndicatorLabelUnFinishedColor: '#999999',
    labelColor: '#999999',
    // labelSize: 13,
    currentStepLabelColor: 'black',
  };

  return (
    <View style={globalStyle.container}>
      <View style={styles.stepIndicatorContainer}>
        <StepIndicator
          customStyles={customStyles}
          stepCount={3}
          currentPosition={currentPosition}
          onPress={position => setCurrentPosition(position)}
          renderStepIndicator={({position, stepStatus}) => (
            <MaterialCommunityIcons
              name={icons[position]}
              size={20}
              color="white"
              style={globalStyle.backgroundColor}
            />
          )}
          labels={labels}
        />
      </View>
      <Divider />
      {currentPosition == 0 ? (
        <SelectAddress />
      ) : currentPosition == 1 ? (
        <DeliverySlot />
      ) : (
        <Payment />
      )}
    </View>
  );
};
export default CheckoutScreen;
