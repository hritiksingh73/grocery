import React from 'react';
import {TextInput, HelperText} from 'react-native-paper';
import {Controller} from 'react-hook-form';

import {styles} from './styles';

const Input = ({name, control, placeholder, style, label}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: true,
          message: 'Field is required!',
        },
      }}
      render={({
        field: {onChange, value, onBlur, onChangeText},
        fieldState: {error},
      }) => (
        <>
          <TextInput
            label={label}
            placeholder={placeholder}
            value={value}
            onChangeText={value => onChange(value)}
            onBlur={onBlur}
            style={[styles.inputContainer, style]}
            error={!!error?.message}
          />
          {error && <HelperText type="error">{error.message}</HelperText>}
        </>
      )}
    />
  );
};
export default Input;
