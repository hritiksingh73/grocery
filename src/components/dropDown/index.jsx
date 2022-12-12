import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import dropDownData from '../../data/dropDownData';

const DropDown = props => {
  const data = props.data;
  const SelectedCity = props.SelectedCity;

  const [isTrue, setIsTrue] = useState(true);
  var val = true;

  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   {label: 'Apple', value: 'apple'},
  //   {label: 'Banana', value: 'banana'},
  // ]);

  return (
    // <View>
    //   <DropDownPicker
    //     style={styles.testing}
    //     open={open}
    //     value={value}
    //     items={items}
    //     setOpen={setOpen}
    //     setValue={setValue}
    //     setItems={setItems}
    //     zIndex={1000}
    //     zIndexInverse={3000}
    //   />
    // </View>

    <View style={styles.alinCntr}>
      <View style={styles.container}>
        <Feather name={'map-pin'} size={22} />
        <TouchableOpacity
          onPress={() => {
            {
              val ? (val = false) : (val = true);
            }
            setIsTrue(val);
          }}>
          <Text style={styles.padig}>Choose Area</Text>
        </TouchableOpacity>
      </View>

      {isTrue ? (
        <Text></Text>
      ) : (
        data.map((value, index) => {
          return (
            <TouchableOpacity
              style={styles.DropDownStyle}
              onPress={() => {
                // console.log('value ---: ',value);
                SelectedCity(value);
              }}>
              <Text key={String(index)}>{value.name}</Text>
            </TouchableOpacity>
          );
        })
      )}
    </View>
  );
};

export default DropDown;
