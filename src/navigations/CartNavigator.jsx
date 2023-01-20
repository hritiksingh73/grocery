import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../screens/tabScreens/CartScreen';
import CheckoutScreen from '../screens/Cart/CheckoutScreen';
import CheckoutSelectedAddress from '../screens/Cart/CheckoutSelectedAddress';
import CheckoutSelectDeliverySlot from '../screens/Cart/CheckoutSelectDeliverySlot';
import CheckoutPayment from '../screens/Cart/CheckoutPayment';
import Thankyou from '../screens/Cart/Thankyou';

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
      <Cart.Screen
        name="Thankyou"
        component={Thankyou}
      />
    </Cart.Navigator>
  )
}

export default TabCartNavigator;