import React from 'react';
import {TextInput, HelperText} from 'react-native-paper';
import {Controller} from 'react-hook-form';

import styles from './styles';

const AddressInput = ({name, control, placeholder, style}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: true,
          message: 'Required!',
        },
      }}
      render={({
        field: {onChange, value, onBlur, onChangeText},
        fieldState: {error},
      }) => (
        <>
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={value => onChange(value)}
            onBlur={onBlur}
            placeholderTextColor="black"
            style={styles.placeholderStyle}
            error={!!error?.message}
          />
          {error && <HelperText type="error">{error.message}</HelperText>}
        </>
      )}
    />
  );
};
export default AddressInput;
