import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

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

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    // backgroundColor: '#fff',
    // borderRadius: 10,
    // marginBottom: 20,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // elevation: 2,
  },
  foodInfoContainer: {
    width: 240,
    justifyContent: "space-evenly",

  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "900",
    // marginBottom: 5,

  },
  // descriptionStyle: {
  //   fontSize: 14,
  //   color: '#555',
  //   marginBottom: 5,
  // },

  // priceStyle: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   color: '#007bff',
  // },

  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
  },
})

const MenuItems = () => {
  return (
    <ScrollView>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};



const FoodInfo = ({ food }) => (
  <View style={styles.foodInfoContainer}>
    <Text style={styles.titleStyle}>{food.title}</Text>
    <Text style={styles.descriptionStyle}>{food.description}</Text>
    <Text style={styles.priceStyle}>{food.price_currency}{food.price}</Text>
  </View>
);

const FoodImage = ({ food }) => (
  <View>
    <Image
      source={{ uri: food.image }}
      style={styles.foodImage}
    />
  </View>
);

export default MenuItems;
