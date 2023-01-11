import React, {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import remoteConfig from '@react-native-firebase/remote-config';

import Location from '../../data/location';
import {styles} from './styles';

export default function DropDown() {
  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [cities, setCities] = useState(Location);

  const fetchRemoteData = async () => {
    try {
      await remoteConfig().setDefaults({cities});
      await remoteConfig().fetch(10);
      const activated = await remoteConfig().activate();
      if (activated) {
        const value = remoteConfig().getValue('cities');
        console.log('Cities........>', JSON.parse(value.asString()));
        let remoteCities = JSON.parse(value.asString()).cities;
        setCities(remoteCities);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRemoteData();
  }, []);

  return (
    <DropDownPicker
      style={styles.dropdownStyle}
      open={open}
      value={selectedCity}
      items={cities}
      setOpen={setOpen}
      setValue={setSelectedCity}
      setItems={setCities}
      placeholder="Select any place"
      placeholderStyle={{marginLeft: '10%'}}
      showBadgeDot={true}
    />
  );
}
