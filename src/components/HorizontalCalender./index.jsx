import React, {useMemo} from 'react';
import {FlatList, Dimensions, Text, Pressable} from 'react-native';

import {styles} from './styles';
import {globalStyle} from '../../constant/globalStyle';
import {selectedDeliverySlot} from '../../redux/actions/userAction';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = width * 0.12;
const ITEM_OFFSET = ITEM_WIDTH + 18;

const dateAddDays = (date, days) => {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const getDayString = date => {
  return date.toString().split(' ')[0];
};
const getMonthString = month => {
  return month.toString().split(' ')[1];
};

const isSameDay = (date1, date2) => {
  return date1.getDate() === date2.getDate();
};

const isToday = date => {
  return new Date().getDate() == date.getDate();
};

const generateHorizontalCalendarDates = days => {
  const today = new Date();
  let result = [];
  for (let i = 0; i < days; i++) {
    result[i] = dateAddDays(today, i);
  }

  return result;
};

const HorizontalCalendar = ({selectedDate, setSelectedDate}) => {
  const dispatch = useDispatch();
  const {selectedAddress, deliverySlot} = useSelector(
    state => state.ordersReducer,
  );
  console.log('order----->', selectedAddress, deliverySlot);
  const dates = useMemo(() => {
    return generateHorizontalCalendarDates(8);
  }, []);

  const onDatePress = date => {
    setSelectedDate(date);
    dispatch(
      selectedDeliverySlot(
        moment(date).format('DD MMMM YYYY hh:mm a').toString(),
      ),
    );
  };

  const renderItem = ({item}) => {
    const dayNumber = item.getDate();
    const dayString = getDayString(item);
    const monthString = getMonthString(item);
    const isActive = isSameDay(selectedDate, item);
    return (
      <Pressable
        onPress={() => onDatePress(item)}
        style={[styles.item, isActive && globalStyle.backgroundColor]}>
        <Text style={[styles.dayStyle, isActive && styles.activeText]}>
          {isToday(item) ? 'Today' : dayString}
        </Text>
        <Text style={[styles.dateOutput, isActive && styles.activeText]}>
          {dayNumber} {''}
          {monthString}
        </Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={dates}
      renderItem={renderItem}
      horizontal={true}
      contentContainerStyle={styles.contentContainerStyle}
      showsHorizontalScrollIndicator={false}
      getItemLayout={(_, index) => ({
        length: ITEM_WIDTH,
        offset: ITEM_OFFSET * index,
        index,
      })}
    />
  );
};
export default HorizontalCalendar;
