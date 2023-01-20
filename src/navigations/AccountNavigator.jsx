import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AccountScreen from '../screens/tabScreens/AccountScreen';
import MyProfile from '../screens/Account/MyProfile';
import EditProfile from '../screens/Account/EditProfile';
import ManageAddresses from '../screens/Account/ManageAddresses';
import OrderHistory from '../screens/Account/OrderHistory';
import OrderHistoryDetails from '../screens/Account/OrderHistoryDetails';
import MyWishlist from '../screens/Account/MyWishlist';
import AddAddresses from '../screens/Account/AddAddresses';

const TabAccountNavigator = ({navigation}) => {
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
              <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
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
              <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')}>
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
      <MyAccount.Screen
        name="OrderHistoryDetails"
        component={OrderHistoryDetails}
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

// const OrderHistoryStack = () => {
//   const Orders = createNativeStackNavigator();
//   return (
//     <Orders.Navigator>
//       <Orders.Screen
//         name="Order History"
//         component={OrderHistory}
//         options={{
//           headerShown: true,
//           headerBackTitleVisible: false,
//         }}
//       />
//       <Orders.Screen
//         name="Order Detail"
//         component={OrderHistoryDetails}
//         options={{
//           headerShown: true,
//           headerBackTitleVisible: false,
//         }}
//       />
//     </Orders.Navigator>
//   );
// };

export default TabAccountNavigator;
