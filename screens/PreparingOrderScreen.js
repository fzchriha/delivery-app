import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import { routes } from './routes';
import restaurantSlice, { selectRestaurant } from '../features/restaurantSlice';
import { useSelector } from 'react-redux';

export function PreparingOrderScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(routes.Delivery);
    }, 4000);
  });
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require('../assets/order_loading.gif')}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="my-10 text-white font-bold text-center text-lg"
        size={10}
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Bar size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
}
