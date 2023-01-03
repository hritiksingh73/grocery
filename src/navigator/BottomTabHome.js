import React from 'react';
import {useSelector} from 'react-redux';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cart from '../screens/CartScreen/Cart';

import Icon from 'react-native-vector-icons/AntDesign';
import HomeNavigationStack from './HomeNavigationStack';
import {Color} from '../constant/Color';
import SearchNavigationStack from './SearchNavigationStack';
import AccountNavigationStack from './AccountNavigationStack';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  const item = useSelector(state => state.userInfo.cart);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: Color.black,
        tabBarActiveTintColor: Color.green,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigationStack}
        options={{
          headerShown: false,
          tabBarIcon: props => <Icon name="home" {...props} />,
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchNavigationStack}
        options={{
          headerShown: false,
          tabBarIcon: props => <Icon name="search1" {...props} />,
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarBadge: item.length,
          tabBarBadgeStyle: {backgroundColor: Color.green},
          tabBarIcon: props => <Icon name="shoppingcart" {...props} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigationStack}
        options={{
          headerShown: false,
          tabBarIcon: props => <Icon name="user" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
