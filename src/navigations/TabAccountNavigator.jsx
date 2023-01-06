import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AccountScreen from '../screens/tabScreens/AccountScreen';
import MyProfile from '../screens/stackScreens/Account/MyProfile';
import EditProfile from '../screens/stackScreens/Account/EditProfile';
import ManageAddresses from '../screens/stackScreens/Account/ManageAddresses';
import OrderHistory from '../screens/stackScreens/Account/OrderHistory';
import MyWishlist from '../screens/stackScreens/Account/MyWishlist';
import AddAddresses from '../screens/stackScreens/Account/AddAddresses';

const TabAccountNavigator = () => {
  const MyAccount = createNativeStackNavigator();
  return (
    <MyAccount.Navigator>
      <MyAccount.Screen
        name="My Account"
        component={AccountScreen}
        options={{
          headerShown: true,
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => alert('bell ringing!')}>
                <Feather name={'bell'} size={25} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <MyAccount.Screen
        name="Profile"
        component={MyProfile}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Feather name={'edit'} size={25} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <MyAccount.Screen
        name="Edit Profile"
        component={EditProfile}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
      <MyAccount.Screen
        name="Manage Addresses"
        component={ManageAddressNavigator}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      />
      <MyAccount.Screen
        name="Order History"
        component={OrderHistory}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
      <MyAccount.Screen
        name="My Wishlist"
        component={MyWishlist}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
    </MyAccount.Navigator>
  );
};

const ManageAddressNavigator = () => {
  const Address = createNativeStackNavigator();
  return (
    <Address.Navigator>
      <Address.Screen
        name="Manage Addresses"
        component={ManageAddresses}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
      <Address.Screen
        name="AddAddresses"
        component={AddAddresses}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
    </Address.Navigator>
  );
};

export default TabAccountNavigator;
