import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../screens/tabScreens/CartScreen';
import CheckoutScreen from '../screens/stackScreens/Cart/CheckoutScreen';
import CheckoutSelectedAddress from '../screens/stackScreens/Cart/CheckoutSelectedAddress';
import CheckoutSelectDeliverySlot from '../screens/stackScreens/Cart/CheckoutSelectDeliverySlot';
import CheckoutPayment from '../screens/stackScreens/Cart/CheckoutPayment';

const TabCartNavigator = () => {
  const Cart = createNativeStackNavigator();
  return(
    <Cart.Navigator>
      <Cart.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
      <Cart.Screen
        name="Checkout"
        component={CheckoutScreen}
      />
      <Cart.Screen
        name="Address"
        component={CheckoutSelectedAddress}
      />
      <Cart.Screen
        name="DeliverySlot"
        component={CheckoutSelectDeliverySlot}
      />
      <Cart.Screen
        name="Payment"
        component={CheckoutPayment}
      />
    </Cart.Navigator>
  )
}

export default TabCartNavigator;