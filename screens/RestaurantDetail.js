import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';


// Define the foods array here or import it from another source
const foods = [
  {
    "title": "Margherita Pizza",
    "description": "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
    "price_currency": "$",
    "price": 9.99,
    "image": "https://ohsweetbasil.com/wp-content/uploads/four-cheese-margherita-pizza-recipe-12-770x1155.jpg"
  },
  {
    "title": "Chicken Caesar Salad",
    "description": "Crisp romaine lettuce topped with grilled chicken, Parmesan cheese, croutons, and Caesar dressing.",
    "price_currency": "$",
    "price": 12.49,
    "image": "https://s23209.pcdn.co/wp-content/uploads/2023/01/220905_DD_Chx-Caesar-Salad_051-760x1140.jpg"
  },
  {
    "title": "Spaghetti Bolognese",
    "description": "Spaghetti pasta served with a rich meat sauce made with ground beef, tomatoes, and herbs.",
    "price_currency": "$",
    "price": 11.99,
    "image": "https://recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    "title": "Sushi Platter",
    "description": "Assorted sushi rolls including California rolls, tuna rolls, and salmon nigiri.",
    "price_currency": "$",
    "price": 15.99,
    "image": "https://theherdsman.com.au/wp-content/uploads/2016/07/60-scaled.jpg"
  },
  {
    "title": "Chocolate Brownie Sundae",
    "description": "Warm chocolate brownie topped with vanilla ice cream, whipped cream, and chocolate sauce.",
    "price_currency": "$",
    "price": 7.99,
    "image": "https://www.thereciperebel.com/wp-content/uploads/2022/05/brownie-sundae-TRR-1200-25-of-40.jpg"
  },
  {
    "title": "Chocolate Brownie Sundae",
    "description": "Warm chocolate brownie topped with vanilla ice cream, whipped cream, and chocolate sauce.",
    "price_currency": "$",
    "price": 7.99,
    "image": "https://www.thereciperebel.com/wp-content/uploads/2022/05/brownie-sundae-TRR-1200-25-of-40.jpg"
  }
]


export default function RestaurantDetail({ route, navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.name, // You can set the title here
      // Other options if needed
    });
  }, [navigation, route]);

  return (
    <>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuItems
          restaurantName={route.params.name}
          foods={foods}
        />
      </ScrollView>
      <ViewCart navigation={navigation} resturantName={route.params.name} />
    </>
  );
}