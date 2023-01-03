import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ManageAddressScreen from '../screens/ManageAddressScreen/ManageAddressScreen';
import AddAddressScreen from '../screens/AddAddressScreen/AddAddressScreen'
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import EditAddressScreen from '../screens/EditAddressScreen/EditAddressScreen';


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
    </stack.Navigator>
  );
};

export default AccountNavigationStack;
