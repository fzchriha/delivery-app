import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './screens/HomeScreen';
import { RestaurantScreen } from './screens/RestaurantScreen';
import { BasketScreen } from './screens/BasketScreen';
import { routes } from './screens/routes';
import 'react-native-url-polyfill/auto';
import { Provider } from 'react-redux';
import { store } from './store';
import { PreparingOrderScreen } from './screens/PreparingOrderScreen';
import { DeliveryScreen } from './screens/DeliveryScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name={routes.home} component={HomeScreen} />
          <Stack.Screen name={routes.Restaurant} component={RestaurantScreen} />
          <Stack.Screen
            name={routes.Basket}
            component={BasketScreen}
            options={{ presentation: 'modal' }}
          />
          <Stack.Screen
            name={routes.PreparingOrder}
            component={PreparingOrderScreen}
            options={{ presentation: 'fullScreenModal' }}
          />
          <Stack.Screen
            name={routes.Delivery}
            component={DeliveryScreen}
            options={{ presentation: 'fullScreenModal' }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
