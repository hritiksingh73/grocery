import React, {useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles.js';
import Feather from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native';
import remoteConfig from '@react-native-firebase/remote-config';

const DropDown = () => {
  const [open, setOpen] = useState(false);
  const [selectedCiti, setSelectedCiti] = useState('Banglore');
  const [citi, setCiti] = useState([
    {label: 'Gujarat', value: 'Gujarat'},
    {label: 'Banglore', value: 'Banglore'},
    {label: 'Hyderabad', value: 'Hyderabad'},
    {label: 'Kolkata', value: 'Kolkata'},
  ]);

  const fetchRemoteData = () => {
    remoteConfig().setDefaults({
      citi,
    });
    remoteConfig()
      .fetch(5)
      .then(() => remoteConfig().fetchAndActivate())
      .then(fetchedRemotely => {
        if (fetchedRemotely) {
          const value = remoteConfig().getValue('citi');
          let remoteCities = JSON.parse(value.asString()).cities;
          setCiti(remoteCities);
          console.log(' new city has been added to flatlist');
        } else {
          console.log('No new Data has been Fetched');
        }
      });
  };

  useEffect(() => {
    fetchRemoteData();
  }, []);

  console.log(selectedCiti);
  return (
    <SafeAreaView style={styles.container}>
      <Feather name={'map-pin'} size={22} />

      <DropDownPicker
        style={styles.dropdown}
        open={open}
        value={selectedCiti}
        items={citi}
        setOpen={setOpen}
        setValue={setSelectedCiti}
        placeholder={selectedCiti}
        setItems={setCiti}
      />
    </SafeAreaView>
  );
};

export default DropDown;
