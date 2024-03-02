import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const SkeletonRestaurantItem = () => (
    <View style={styles.container}>
        <View style={styles.imageSkeleton} />
        <View style={styles.detailsContainer}>
            <View style={styles.skeletonText} />
            <View style={[styles.skeletonText, { width: '60%' }]} />
            <View style={styles.skeletonText} />
            <View style={[styles.skeletonText, { width: '40%' }]} />
        </View>
    </View>
);

export const RestaurantItem = ({ restaurantData, navigation }) => {
    return (
        <View>
            {restaurantData.map((restaurant, index) => (
                <RestaurantCard
                    navigation={navigation}
                    key={index}
                    image={restaurant.image_url}
                    name={restaurant.name}
                    type={"Sandwiches, Pizza"}
                    price={restaurant.price}
                    time={restaurant.time}
                    delivery_price={restaurant.delivery_price}
                    categories={restaurant.categories}
                    reviews={restaurant.review_count}
                    rating={restaurant.rating}

                />
            ))}
        </View>
    );
};

const RestaurantCard = ({ navigation, ...props }) => (
    <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("RestaurantDetail", {
            name: props.name,
            image: props.image,
            price: props.price,
            reviews: props.reviews,
            rating: props.rating,
            categories: props.categories,
            navigation: navigation,
        })}
    >
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: props.image }} style={styles.image} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{props.name}</Text>
                <View style={styles.descriptionContainer}>
                    <MaterialCommunityIcons name="food" size={16} color="#888" />
                    <Text style={styles.description}>{props.type}</Text>
                </View>
                <View style={styles.detailsRow}>
                    <MaterialCommunityIcons name="truck-delivery" size={16} color="#888" />
                    <Text style={styles.detailsText}>{props.price}{props.delivery_price}</Text>
                </View>
                <View style={styles.detailsRow}>
                    <MaterialCommunityIcons name="clock-outline" size={16} color="#888" />
                    <Text style={styles.detailsText}>Time: {props.time} mins</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.favoriteButton}>
                <MaterialCommunityIcons name="heart-outline" size={25} color="black" />
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 2,
        marginVertical: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        elevation: 2,
    },
    imageContainer: {
        flex: 1,
        width: 120,
        height: 120,
        overflow: 'hidden',
        borderRadius: 5,
        padding: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    detailsContainer: {
        flex: 2,
        padding: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    detailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    detailsText: {
        marginLeft: 5,
        fontSize: 14,
        color: 'black',
    },
    descriptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    description: {
        marginLeft: 5,
        fontSize: 14,
        color: 'black',
        fontStyle: 'italic',
    },
    favoriteButton: {
        position: "absolute",
        right: 15,
        top: 10,
    },
    imageSkeleton: {
        flex: 1,
        width: 120,
        height: 120,
        backgroundColor: '#f0f0f0',
        overflow: 'hidden',
        borderRadius: 5,
        marginRight: 10,
        margin: 5,
    },

    skeletonText: {
        width: '80%',
        height: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 4,
        marginBottom: 8,
    },
});

export {RestaurantCard};
