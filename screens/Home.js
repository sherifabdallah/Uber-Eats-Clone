import { View, Text, StatusBar, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import HeaderTabs from '../components/home/HeaderTabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import { RestaurantItem, SkeletonRestaurantItem } from '../components/home/RestaurantItem';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';

const LineBreak = ({ height }) => {
  return <View style={{ height: height }} />;
};


export default function Home({ navigation }) {

  const [restaurantData, setRestaurantData] = useState([]/*localRestaurants*/);
  const [ispendingrRestaurants, setIsPendingrRestaurants] = useState(true);

  const YELP_API_KEY = "1bEsO0nUS6Gd8UORNsQYfCzQ85ylHAO4B6NRA4loJ8UxZRvHEhNP6NKXmuMARDMGZH-fCPX40SL5XMWvVal5J2DW-NSY3FlI7bBhimW6ogZavuRKOKVmN3AWfqrBZHYx";

  const getResturantsFromYelp = () => {
    const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=San Deigo";

    const apiOptions = {
      headers: { 'Authorization': 'Bearer ' + YELP_API_KEY }
    }

    return fetch(yelpUrl, apiOptions).then((res) => res.json()).then((json) => {
      setRestaurantData(json.businesses)
      setIsPendingrRestaurants(false)

    })

  }

  useEffect(() => {
    getResturantsFromYelp();
  }, []);

  return (


    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <LineBreak height={18} />

      {/* Head Part */}
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>

      {/* Restaurant Items Part */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {ispendingrRestaurants &&
          <>
            <SkeletonRestaurantItem key="1" />
            <SkeletonRestaurantItem key="2" />
            <SkeletonRestaurantItem key="3" />
          </>
        }
        <RestaurantItem restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>

      <Divider width={1} />
      <BottomTabs />


      {/* Status Bar */}
      <StatusBar translucent={true} backgroundColor={"transparent"} barStyle={"dark-content"} />
    </SafeAreaView>

  )
}

