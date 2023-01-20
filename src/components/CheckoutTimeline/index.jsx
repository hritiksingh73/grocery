import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import colors from '../../constants/colors';

const CheckoutTimeline = ({screenIndex, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconTxtPair}>
          <TouchableOpacity onPress={() => onPress(0)}>
            <View style={[styles.circleStyle, {backgroundColor: colors.green}]}>
              <Feather
                name={'map-pin'}
                size={20}
                style={styles.iconStyle}
                color={colors.white}
              />
            </View>
          </TouchableOpacity>
          <Text style={[styles.txtStyling, {color: colors.black}]}>
            Select Address
          </Text>
        </View>

        <View style={styles.iconTxtPair}>
          <TouchableOpacity onPress={() => onPress(1)}>
            <View
              style={[
                styles.circleStyle,
                {
                  backgroundColor:
                    screenIndex === 1 || screenIndex === 2
                      ? colors.green
                      : colors.gray_85,
                },
              ]}>
              <Feather
                name={'truck'}
                size={20}
                style={styles.iconStyle}
                color={
                  screenIndex === 1 || screenIndex === 2
                    ? colors.white
                    : colors.gray_25
                }
              />
            </View>
          </TouchableOpacity>
          <Text
            style={[
              styles.txtStyling,
              {
                color:
                  screenIndex === 1 || screenIndex === 2
                    ? colors.black
                    : colors.gray,
              },
            ]}>
            Select Delivery Slot
          </Text>
        </View>

        <View style={styles.iconTxtPair}>
          <TouchableOpacity onPress={() => onPress(2)}>
            <View
              style={[
                styles.circleStyle,
                {
                  backgroundColor:
                    screenIndex === 2 ? colors.green : colors.gray_85,
                },
              ]}>
              <Feather
                name={'credit-card'}
                size={20}
                style={styles.iconStyle}
                color={screenIndex === 2 ? colors.white : colors.gray_25}
              />
            </View>
          </TouchableOpacity>
          <Text
            style={[
              styles.txtStyling,
              {color: screenIndex === 2 ? colors.black : colors.gray},
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
                  screenIndex === 1 || screenIndex === 2
                    ? colors.green
                    : colors.gray_85,
              },
            ]}></View>
          <View
            style={[
              styles.timelineProgressLeft,
              {
                backgroundColor:
                  screenIndex === 2 ? colors.green : colors.gray_85,
              },
            ]}></View>
        </View>
      </View>
    </View>
  );
};

export default CheckoutTimeline;
