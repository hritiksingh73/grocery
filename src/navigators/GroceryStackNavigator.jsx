import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import SuperFreshScreen from '../screens/SuperFreshScreen';
import PopularProductsScreen from '../screens/SuperFreshScreen/PopularProductsScreen';
import ProductDetails from '../screens/ProductDetails';
import NotificationScreen from '../screens/NotificationScreen';
import ManageAddress from '../screens/AddressScreen/ManageAddress';
import AddAddress from '../screens/AddressScreen/AddAddress';
import EditAddress from '../screens/AddressScreen/EditAddress';
import CheckoutScreen from '../screens/CheckoutScreen';
import ThankYou from '../screens/CheckoutScreen/ThankYou';
import OrderHistory from '../screens/OrdersScreen/OrderHistory';
import OrderDetails from '../screens/OrdersScreen/OrderDetails';
import Profile from '../screens/ProfileScreen/Profile';
import EditProfile from '../screens/ProfileScreen/EditProfile';

const Stack = createNativeStackNavigator();

const GroceryStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Super Fresh"
        component={SuperFreshScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Popular Products"
        component={PopularProductsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Product Details" component={ProductDetails} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="Manage Address" component={ManageAddress} />
      <Stack.Screen name="Add Address" component={AddAddress} />
      <Stack.Screen name="Edit Address" component={EditAddress} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="Thank you" component={ThankYou} />
      <Stack.Screen name="Order History" component={OrderHistory} />
      <Stack.Screen name="Order Detail" component={OrderDetails} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Edit Profile" component={EditProfile} />
    </Stack.Navigator>
  );
};
export default GroceryStackNavigator;
