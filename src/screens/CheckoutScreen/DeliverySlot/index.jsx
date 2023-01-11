import * as React from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import CustomButton from '../../../components/Button';

import HorizontalCalendar from '../../../components/HorizontalCalender.';
import {globalStyle} from '../../../constant/globalStyle';
import {DELIVERYSLOT} from '../../../data/deliverySlot';
import {styles} from './styles';

const renderDeliverySlots = ({item}) => {
  return (
    <View style={styles.deliverySlotsContainer}>
      <Text style={globalStyle.itemFontSize}>{item.time} </Text>
      <Text style={globalStyle.itemFontSize}>$ {item.price}</Text>
      <View style={styles.customBtnContainer}>
        <CustomButton btnTitle="Choose" />
      </View>
    </View>
  );
};

export default function DeliverySlot() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[globalStyle.header, globalStyle.headerText]}>
          Reserve your delivery slot
        </Text>
        <HorizontalCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        <FlatList data={DELIVERYSLOT} renderItem={renderDeliverySlots} />
      </View>
    </ScrollView>
  );
}
