import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import CheckoutTimeline from '../../../../components/CheckoutTimeline';
import colors from '../../../../constants/colors';

import LoginBtn from '../../../../components/loginBtn';
import globaStyle from '../../../../constants/globalStyle';
import Timings from '../../../../data/cartSrnData/deliverySlotData';
// import styles from './styles';

const DeliverySlot = ({navigation}) => {
  const [isTimeSelected, setIsTimeSelected] = useState(false);
  const dayNTime = [
    {
      day: 'Today',
      date: '01',
      month: 'Jul',
    },
    {
      day: 'Tue',
      date: '01',
      month: 'Jul',
    },
    {
      day: 'Wed',
      date: '01',
      month: 'Jul',
    },
    {
      day: 'Thu',
      date: '01',
      month: 'Jul',
    },
    {
      day: 'Fri',
      date: '01',
      month: 'Jul',
    },
  ];

  const timeSelectedHandler = () => {
    setIsTimeSelected(!isTimeSelected);
    console.log(isTimeSelected);
  };

  const DeliveryTiming = ({item}) => {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.listFontStyle}>{item.time}</Text>
        <Text style={styles.listFontStyle}> $ 4.00 </Text>
        <View style={styles.buttonContainer}>
          <LoginBtn
            name={'Choose'}
            onPress={timeSelectedHandler}
            btnAlign="flex-start"
            padHorizontal={17}
            bgColor={colors.white}
            borderColor={colors.gray_70}
            fontColor={colors.gray}
            fontSize={14}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <CheckoutTimeline name={'Delivery'} /> */}

        <View style={styles.pageLayout}>
          <View style={styles.headingContainer}>
            <Text style={globaStyle.heading}>Reserve your delivery slot</Text>
          </View>

          <FlatList
            data={dayNTime}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={styles.buttonContainer}> 
                  <LoginBtn
                    name={item.day}
                    bgColor={colors.white}
                    borderColor={colors.gray_70}
                    fontColor={colors.black}
                  />
                </View>
              );
            }}
          />

          <FlatList
            data={Timings}
            showsHorizontalScrollIndicator={false}
            renderItem={DeliveryTiming}
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
  }
});

export default DeliverySlot;
