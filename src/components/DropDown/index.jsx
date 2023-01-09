import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles.js';
import remoteConfig from '@react-native-firebase/remote-config';

const DropDown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [selectedcity, setSelectedCity] = useState();
  const [cities, setCities] = useState([
    {label: 'Indore', value: 'Indore'},
    {label: 'Mumbai', value: 'Mumbai'},
    {label: 'Pune', value: 'Pune'},
    {label: 'Delhi', value: 'Delhi'},
    {label: 'Punjab', value: 'Punjab'},
    {label: 'Jabalpur', value: 'Jabalpur'},
  ]);
  const firebaseRemoteConfigCity = async () => {
    try {
      await remoteConfig().setDefaults({cities_name: cities});
      await remoteConfig().fetch(10);
      const activated = await remoteConfig().fetchAndActivate();
      console.log({activated});
      if (activated) {
        const value = await remoteConfig().getValue('cities_name');
        console.log({value})
        console.log('Cities------------>', JSON.parse(value.asString()));
        let remoteCities = JSON.parse(value.asString()).cities;
        setCities(remoteCities);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    firebaseRemoteConfigCity();
  }, []);

  return (
    <View style={styles.container}>
      <Feather name={'map-pin'} size={22} style={styles.map} />
      <DropDownPicker
        style={styles.dropdown}
        open={open}
        value={value}
        items={cities}
        setOpen={setOpen}
        setValue={setValue}
        placeholder={value}
        setItems={setCities}
      />
    </View>
  );
};

export default DropDown;
