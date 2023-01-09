import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';

import CartScreen from '../screens/tabScreen/CartScreen/index';
import SearchScreen from '../screens/tabScreen/SearchScreen/index';
import AccountScreen from '../screens/tabScreen/AccountScreen/index';
import VeggiesStackNavigator from '../navigations/VeggiesStackNavigator';
import color from '../constant/color.js';

const Tab = createBottomTabNavigator();

const VeggiesTabNavigator = () => {
  const cartItem = useSelector(state => state.cartData.cartProducts);
  return (
    <Tab.Navigator screenOptions={{
      tabBarInactiveTintColor: color.black,
      tabBarActiveTintColor: color.primary,
    }}>
      <Tab.Screen
        name="Home"
        component={VeggiesStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: props => <Icon name="home" {...props} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: props => <Icon name="search1" {...props} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarBadge: cartItem.length,
          tabBarBadgeStyle: {backgroundColor: 'green'},
          tabBarIcon: props => <Icon name="shoppingcart" {...props} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: props => <Icon name="user" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default VeggiesTabNavigator;
