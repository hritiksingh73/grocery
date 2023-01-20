import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import SearchScreen from '../screens/tabScreens/SearchScreen';
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import AccountNavigator from './AccountNavigator';

const TabNavigator = () => {
  const tabStack = createBottomTabNavigator();
  return (
    <tabStack.Navigator>
      <tabStack.Screen
        name="Home"
        component={HomeNavigator}
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
        name="Cart"
        component={CartNavigator}
        options={{
          headerShown: false,
          tabBarIcon: props => (
            <Feather name={'shopping-bag'} size={25} {...props} />
          ),
        }}
      />
      <tabStack.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          headerShown: false,
          tabBarIcon: props => <Feather name={'user'} size={25} {...props} />,
        }}
      />
    </tabStack.Navigator>
  );
};

export default TabNavigator;
