import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {View, Text, Image, ScrollView} from 'react-native';
import {Card, RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import Input from '../../../components/Input';
import {globalStyle} from '../../../constant/globalStyle';
import {styles} from './styles';
import image from '../../../config/image';
import {color} from '../../../constant/color';
import CustomButton from '../../../components/Button';
import {getPayment} from '../../../redux/actions/userAction';

const Payment = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {control, handleSubmit} = useForm({mode: 'onBlur'});
  const [value, setValue] = useState('first');

  const placeOrderBtnHandler = () => {
    dispatch(getPayment());
    navigation.navigate('Thank you');
  };

  return (
    <ScrollView>
      <Text style={[globalStyle.header, globalStyle.headerText]}>
        Saved Card
      </Text>

      <Card.Title
        title="xxxx xxxx xxxx 3455"
        style={styles.card}
        left={props => (
          <RadioButton.Group
            {...props}
            onValueChange={newValue => setValue(newValue)}
            value={value}>
            <RadioButton value="first" color={color.primary} />
          </RadioButton.Group>
        )}
      />
      <Image source={image.orImage} style={styles.orImage} />
      <Text style={[globalStyle.header, globalStyle.headerText]}>
        Add Card Details
      </Text>

      <Input name="nameOnCard" control={control} label="Name on Card" />
      <Input name="cardNumber" control={control} label="Card Number" />

      <Text style={styles.dateHeading}>Expiry Date</Text>
      <View style={styles.expiryDateContainer}>
        <Input name="month" control={control} placeholder="MM" />
        <Input name="year" control={control} placeholder="YYYY" />
        <Input name="cvv" control={control} placeholder="CVV" />
      </View>

      <View style={styles.btnContainer}>
        <CustomButton
          btnTitle="Place Order"
          onPress={handleSubmit(placeOrderBtnHandler)}
        />
      </View>
    </ScrollView>
  );
};
export default Payment;
