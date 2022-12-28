import React, {useState,useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles.js';
import Feather from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native';
import remoteConfig from '@react-native-firebase/remote-config';


const DropDown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Indore');
  const [items, setItems] = useState([
    {label: 'Indore', value: 'Indore'},
    {label: 'Mumbai', value: 'Mumbai'},
    {label: 'Pune', value: 'Pune'},
    {label: 'Delhi', value: 'Delhi'},
    {label: 'Punjab', value: 'Punjab'},
    {label: 'Jabalpur', value: 'Jabalpur'},
  ]);
  const fetchRemoteData = () => {
    remoteConfig().setDefaults({
      items,
    });
    remoteConfig()
      .fetch(5)
      .then(() => remoteConfig().fetchAndActivate())
      .then(fetchedRemotely => {
        if (fetchedRemotely) {
          const drop = remoteConfig().getValue('citi');
          let remoteCities = JSON.parse(drop.asString()).cities;
          setItems(remoteCities);
          console.log(' new city has been added to flatlist');
        } else {
          console.log('No new Data has been Fetched');
        }
      });
  };

  useEffect(() => {
    fetchRemoteData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Feather name={'map-pin'} size={20} />
      <DropDownPicker
        style={styles.dropdown}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        placeholder={value}
        setItems={setItems}
      />
      </SafeAreaView>
   
  );
};

export default DropDown;
