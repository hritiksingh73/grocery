import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Timings} from '../../../data/cartScreen';
import {timeZone} from '../../../utils';
import {useDispatch} from 'react-redux';
import {
  DeliveryDate,
  DeliveryTime,
  ComponentChangeByIndex,
} from '../../../redux/action/action';
import PrimaryButton from '../../../components/PrimaryButton';
import globaStyle from '../../../constants/globalStyle';
import colors from '../../../constants/colors';

const DeliverySlot = () => {
  const dispatch = useDispatch();
  const [isDateSelected, setIsDateSelected] = useState(0);
  const [isTimeSelected, setIsTimeSelected] = useState(0);

  const DeliveryTiming = ({item, index}) => {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.listFontStyle}>{item.time}</Text>
        <Text style={styles.listFontStyle}> $ 4.00 </Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            name={'Choose'}
            onPress={() => {
              setIsTimeSelected(index + 1);
              dispatch(DeliveryTime(item.time));
            }}
            customBtnContainerStyle={
              index + 1 === isTimeSelected
                ? styles.isSelectedCustomBtn
                : styles.customBtnContainerStyle
            }
            customBtnTextStyle={
              index + 1 === isTimeSelected
                ? styles.isSelectedCustomBtnText
                : styles.customBtnTextStyle
            }
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.pageLayout}>
          <View style={styles.headingContainer}>
            <Text style={globaStyle.heading}>Reserve your delivery slot</Text>
          </View>

          <FlatList
            data={timeZone}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setIsDateSelected(index + 1);
                    dispatch(DeliveryDate(item));
                  }}>
                  <View
                    style={[
                      styles.dateTimeContainer,
                      index + 1 === isDateSelected
                        ? styles.isDateTimeContainerSelected
                        : styles.dateTimeContainer,
                    ]}>
                    <Text
                      style={[
                        styles.dayStyle,
                        index + 1 === isDateSelected
                          ? styles.isDayStyleSelected
                          : styles.dayStyle,
                      ]}>
                      {item.day}
                    </Text>
                    <Text
                      style={[
                        styles.dateStyle,
                        ,
                        index + 1 === isDateSelected
                          ? styles.isDateStyleSelected
                          : styles.dateStyle,
                      ]}>
                      {item.date} {item.month}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />

          <FlatList
            data={Timings}
            showsHorizontalScrollIndicator={false}
            renderItem={DeliveryTiming}
          />
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            name={'Save & Next'}
            onPress={() => {
              dispatch(ComponentChangeByIndex(2));
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageLayout: {
    marginHorizontal: '4%',
  },
  headingContainer: {
    marginVertical: 20,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray_70,
    borderRadius: 3,
    marginVertical: 8,
    paddingLeft: 15,
  },
  listFontStyle: {
    fontWeight: '600',
  },
  buttonContainer: {
    margin: 10,
  },
  dateTimeContainer: {
    margin: 10,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: colors.lightgray,
  },
  isDateTimeContainerSelected: {
    borderRadius: 3,
    borderColor: colors.green,
    backgroundColor: colors.green,
  },
  ifSelectedDateTimeContainer: {
    margin: 10,
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: colors.green,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: colors.green,
  },
  dayStyle: {
    fontSize: 16,
    fontWeight: '500',
  },
  isDayStyleSelected: {
    color: colors.white,
  },
  dateStyle: {
    color: colors.gray,
    marginVertical: 2,
  },
  isDateStyleSelected: {
    color: colors.white,
  },
  ifSelectedDayTime: {
    color: colors.white,
  },
  customBtnContainerStyle: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray_70,
  },
  isSelectedCustomBtn: {
    backgroundColor: colors.green,
    borderWidth: 1,
    borderColor: colors.green,
  },
  customBtnTextStyle: {
    color: colors.gray_70,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  isSelectedCustomBtnText: {
    color: colors.white,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  buttonContainer: {
    margin: 20,
  },
});

export default DeliverySlot;
