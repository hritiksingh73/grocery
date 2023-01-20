import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import HomeScreen from '../screens/tabScreens/HomeScreen';

import FruitsGalleryScreen from '../screens/Home/FruitsGalleryScreen';
import VegetablesGalleryScreen from '../screens/Home/VegetablesGalleryScreen';
import PulsesGalleryScreen from '../screens/Home/PulsesGalleryScreen';

import Sort from '../screens/Home/Sort';
import ItemDetails from '../screens/Home/ItemDetails';
import Notification from '../screens/Home/Notification';

const TabHomeNavigator = ({navigation}) => {
  const Filter = createNativeStackNavigator();
  return (
    <Filter.Navigator>
      <Filter.Screen
        name="Super Fresh"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                <Feather name={'bell'} size={25} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Filter.Screen
        name="Fruits"
        component={FruitsGalleryScreen}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                <Feather name={'bell'} size={25} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Filter.Screen
        name="Vegetables"
        component={VegetablesGalleryScreen}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Feather name={'bell'} size={25} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Filter.Screen
        name="Pulses"
        component={PulsesGalleryScreen}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Feather name={'bell'} size={25} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Filter.Screen
        name="Sort"
        component={Sort}
        options={{headerShown: false}}
      />
      <Filter.Screen
        name="ItemDetails"
        component={ItemDetails}
        options={{headerShown: false}}
      />
      <Filter.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
    </Filter.Navigator>
  );
};

export default TabHomeNavigator;
