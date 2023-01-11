import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import GroceryStackNavigator from './GroceryStackNavigator';
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';
import {color} from '../constant/color';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();

export default function GroceryTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: color.primary}}>
      <Tab.Screen
        name="Home"
        component={GroceryStackNavigator}
        options={{
          tabBarIcon: () => <Icon name="home" size={30} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => <Icon name="search1" size={30} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{tabBarIcon: () => <Icon name="shoppingcart" size={30} />}}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: () => <Icon name="user" size={30} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
