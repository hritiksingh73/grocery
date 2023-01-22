import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import {DeliveryTimeSlot} from '../../../dummyData/Cards';
import {deliveryDateSlot} from '../../../utils/dateGenerator';
import {
  selectDeliveryDate,
  selectDeliveryTime,
} from '../../../redux/action/Action';

const DeliverySlotScreen = ({onScreenChange}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //   const orderData = useSelector(state => state.OrderInfo.orders);
  //  console.log("orderData from slot selection Screen",orderData)

  const DeliverySlot = ({item}) => {
    //console.log("Selected Date from Delivery Slot Screen =====>>>",item)
    return (
      <View style={styles.deliverySlotContainer}>
        <TouchableOpacity onPress={() => dispatch(selectDeliveryDate(item))}>
          <Text style={styles.day}>{item.day}</Text>
          <Text>
            {item.date} {item.month}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const TimeSlot = ({item}) => {
    //console.log("Selected Time from Delivery Slot Screen =====>>>",item)
    return (
      <View style={styles.deliveryTimeSlotContainer}>
        <View style={styles.deliveryTimeSlot}>
          <Text style={styles.text}>{item.time}</Text>
          <Text style={styles.text}>{item.deliveryCharges}</Text>
          <TouchableOpacity
            style={styles.timeSlotButtonContainer}
            onPress={() => dispatch(selectDeliveryTime(item))}>
            <Text style={styles.timeSlotButtonText}>Choose</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.containerBody}>
          <Text style={styles.headerTitle}>Reserve your delivery slot</Text>
        </View>
        <FlatList
          data={deliveryDateSlot}
          renderItem={DeliverySlot}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          data={DeliveryTimeSlot}
          renderItem={TimeSlot}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity
          style={styles.nextButtonTextContainer}
          onPress={() => onScreenChange(2)}>
          <Text style={styles.nextButtonText}>Save & Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeliverySlotScreen;
