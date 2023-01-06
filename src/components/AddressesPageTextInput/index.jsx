import React from 'react';
import {View, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';
import styles from './styles';

const AddressesPageTextInput = props => {
  const {placeholder, control, name, rules = {},} = props;
  return (
    <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <View style={styles.container}>
            <TextInput
              style={styles.TxtStyling}
              placeholder={placeholder}
              // placeholderTextColor={'black'}
              value={value}
              onBlur={onBlur}
              onChangeText={val => onChange(val)}
              {...props}
              />
            </View>
        )}
      />
  );
};

export default AddressesPageTextInput;
