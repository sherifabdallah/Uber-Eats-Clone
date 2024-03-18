import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';

const MenuItems = ({
  restaurantName,
  foods,
  hideCheckbox,
  marginLeft,
}) => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);

  const selectItem = (item, checkboxValue) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item,
        restaurantName,
        checkboxValue,
      },
    });
  };

  const isFoodInCart = (food) => {
    return cartItems.some((item) => item.title === food.title);
  };

  return (
    <SafeAreaView style={styles.container}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            {!hideCheckbox && (
              <BouncyCheckbox
                style={{ borderRadius: 0 }}
                iconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
                fillColor="green"
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food)}
              />
            )}

            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
};

const FoodInfo = ({ food }) => (
  <View style={styles.foodInfoContainer}>
    <Text style={styles.titleStyle}>{food.title}</Text>
    <Text style={styles.descriptionStyle}>{food.description}</Text>
    <Text style={styles.priceStyle}>{food.price_currency}{food.price}</Text>
  </View>
);

const FoodImage = ({ food, marginLeft }) => (
  <View style={[styles.foodImageContainer, { marginLeft: marginLeft }]}>
    <Image
      source={{ uri: food.image }}
      style={styles.foodImage}
    />
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  foodInfoContainer: {
    flex: 1, // Adjusted to make it responsive
    justifyContent: "space-evenly",
    marginLeft: 10, // Added margin for better spacing
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "900",
  },
  foodImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
    overflow: 'hidden',
  },
  foodImage: {
    flex: 1, // Ensures image resizes correctly
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});

export default MenuItems;