import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import HomeScreen from '../screens/tabScreens/HomeScreen';

import FruitsGalleryScreen from '../screens/stackScreens/Home/FruitsGalleryScreen';
import VegetablesGalleryScreen from '../screens/stackScreens/Home/VegetablesGalleryScreen';
import PulsesGalleryScreen from '../screens/stackScreens/Home/PulsesGalleryScreen';

import Sort from '../screens/stackScreens/Home/Sort';
import ItemDetails from '../screens/stackScreens/Home/ItemDetails';

const TabHomeNavigator = () => {
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
              <TouchableOpacity>
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
              <TouchableOpacity>
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
    </Filter.Navigator>
  );
};

export default TabHomeNavigator;
