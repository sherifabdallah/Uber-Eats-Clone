import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';


export default function RestaurantDetail({ route, navigation }) {
  return (
    <>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuItems />
      </ScrollView>
      <ViewCart navigation={navigation} resturantName={route.params.name} />
    </>
  )
}