import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';

import styles from './styles';
const AddAddressFormComponent = ({name, control, placeholder, style}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: true,
          message: 'Required',
        },
      }}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={value => onChange(value)}
            onBlur={onBlur}
            style={styles.textinput}
            error={!!error?.message}
          />
        </View>
      )}
    />
  );
};

export default AddAddressFormComponent;
