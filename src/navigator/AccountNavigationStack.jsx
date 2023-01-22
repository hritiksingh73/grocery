import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ManageAddressScreen from '../screens/AccountScreen/ManageAddressScreen/ManageAddressScreen';

import EditAddressScreen from '../screens/AccountScreen/EditAddressScreen/EditAddressScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen/AccountScreen';
import AddAddressScreen from '../screens/AccountScreen/AddAddressScreen/AddAddressScreen';
import OrderHistoryScreen from '../screens/AccountScreen/OrderHistoryScreen/OrderHistoryScreen/OrderHistoryScreen';
import OrderDetailScreen from '../screens/AccountScreen/OrderHistoryScreen/OrderDetailsScreen/OrderDetailScreen';
import MyProfileScreen from '../screens/AccountScreen/MyProfileScreen/MyProfileScreen';

const stack = createNativeStackNavigator();
const AccountNavigationStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Accountscreen"
        component={AccountScreen}
        options={{
          headerShown: false,
        }}
      />

      <stack.Screen
        name="ManageAddressScreen"
        component={ManageAddressScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="AddAddressScreen"
        component={AddAddressScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="EditAddressScreen"
        component={EditAddressScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="OrderHistoryScreen"
        component={OrderHistoryScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="OrderDetailScreen"
        component={OrderDetailScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="MyProfileScreen"
        component={MyProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
};

export default AccountNavigationStack;
