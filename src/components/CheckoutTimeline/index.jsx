import React from 'react';
import {View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import colors from '../../constants/colors';

const CheckoutTimeline = ({name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconTxtPair}>
          <View style={[styles.circleStyle, {backgroundColor: colors.green}]}>
            <Feather
              name={'map-pin'}
              size={20}
              style={styles.iconStyle}
              color={colors.white}
            />
          </View>
          <Text style={[styles.txtStyling, {color: colors.black}]}>
            Select Address
          </Text>
        </View>

        <View style={styles.iconTxtPair}>
          <View
            style={[
              styles.circleStyle,
              {
                backgroundColor:
                  name === 'Delivery' || name === 'Payment'
                    ? colors.green
                    : colors.gray_85,
              },
            ]}>
            <Feather
              name={'truck'}
              size={20}
              style={styles.iconStyle}
              color={
                name === 'Delivery' || name === 'Payment'
                  ? colors.white
                  : colors.gray_25
              }
            />
          </View>
          <Text
            style={[
              styles.txtStyling,
              {
                color:
                  name === 'Delivery' || name === 'Payment'
                    ? colors.black
                    : colors.gray,
              },
            ]}>
            Select Delivery Slot
          </Text>
        </View>

        <View style={styles.iconTxtPair}>
          <View
            style={[
              styles.circleStyle,
              {
                backgroundColor:
                  name === 'Payment' ? colors.green : colors.gray_85,
              },
            ]}>
            <Feather
              name={'credit-card'}
              size={20}
              style={styles.iconStyle}
              color={name === 'Payment' ? colors.white : colors.gray_25}
            />
          </View>
          <Text
            style={[
              styles.txtStyling,
              {color: name === 'Payment' ? colors.black : colors.gray},
            ]}>
            Payment
          </Text>
        </View>

        <View style={styles.timelineBarContainer}>
          <View
            style={[
              styles.timelineProgressLeft,
              {
                backgroundColor:
                  name === 'Delivery' || name === 'Payment'
                    ? colors.green
                    : colors.gray_85,
              },
            ]}></View>
          <View
            style={[
              styles.timelineProgressLeft,
              {
                backgroundColor:
                  name === 'Payment' ? colors.green : colors.gray_85,
              },
            ]}></View>
        </View>
      </View>
    </View>
  );
};

export default CheckoutTimeline;
