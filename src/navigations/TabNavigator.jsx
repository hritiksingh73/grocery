import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import SearchScreen from '../screens/tabScreens/SearchScreen';
import TabHomeNavigator from './TabHomeNavigator';
import TabCartNavigator from './TabCartNavigator';
import TabAccountNavigator from './TabAccountNavigator';

const TabNavigator = () => {
  const tabStack = createBottomTabNavigator();
  return (
    <tabStack.Navigator>
      <tabStack.Screen
        name="Home"
        component={TabHomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: props => <Feather name={'home'} size={25} {...props} />,
        }}
      />
      <tabStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: props => <Feather name={'search'} size={25} {...props} />,
        }}
      />
      <tabStack.Screen
        name="Cartt"
        component={TabCartNavigator}
        options={{
          headerShown: false,
          tabBarIcon: props => (
            <Feather name={'shopping-bag'} size={25} {...props} />
          ),
        }}
      />
      <tabStack.Screen
        name="MyAccount"
        component={TabAccountNavigator}
        options={{
          headerShown: false,
          tabBarIcon: props => <Feather name={'user'} size={25} {...props} />,
        }}
      />
    </tabStack.Navigator>
  );
};

export default TabNavigator;
