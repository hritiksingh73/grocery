import React from 'react';
import {View, Text, FlatList, useWindowDimensions} from 'react-native';
import CheckoutTimeline from '../../../../components/CheckoutTimeline';
import LoginBtn from '../../../../components/loginBtn';
import colors from '../../../../constants/colors';
import {StyleSheet} from 'react-native';
// import styles from './styles';

const data = [
  {
    title: 'Moosa Abdul Rahman',
    description:
      'Building, Way No. 3109, Bldg No. 475, 2nd Floor, Ruwi, Muscat, Sultanate of Oman',
  },
  {
    title: 'Moosa Abdul Rahman',
    description:
      'Building, Way No. 3109, Bldg No. 475, 2nd Floor, Ruwi, Muscat, Sultanate of Oman Sultanate of Oman Sultanate of Oman',
  },
];

const Addresses = () => {
  const {width, height} = useWindowDimensions();

  return (
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={[styles.addressContainer, {width: width - 60}]}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <LoginBtn name={'Deliver here'} onPress={()=>alert('hello')} btnAlign = 'flex-start'/>
            </View>
          );
        }}
      />
  );
};

const styles = StyleSheet.create({
  addressContainer: {
    margin: 16,
    marginRight: 0,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.gray_70,
    borderRadius: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  description: {
    textAlign: 'justify',
    marginVertical: 20,
  },
  primaryButtomStyle: {

  }
});

export default Addresses;
