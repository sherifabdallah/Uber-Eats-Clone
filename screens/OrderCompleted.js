import { View, Text, SafeAreaView, ScrollView, Image, ImageBackground, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import MenuItems from "../components/restaurantDetail/MenuItems";
import firebase from '../firebase';
import { ImageBackground } from "react-native-web";



export default function OrderCompleted() {
    const [lastOrder, setLastOrder] = useState({
        items: [],
    });

    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
    );

    useEffect(() => {

            const db = firebase.firestore();
            const username = "sherif";
            const unsubscribe = db
                .collection("orders")
                .orderBy("createdAt", "desc")
                .where("username", "==", username)
                .limit(1)
                .onSnapshot((snapshot) => {

                    snapshot.docs.map((doc) => {
                        setLastOrder(doc.data());
                    });

                });



            return () => unsubscribe();

    //     } catch (error) {
    //         console.log(error);
    //     }
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            {/* green checkmark */}
            <View
                style={{
                    margin: 15,
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <Image
                    style={{ height: 100, width: 100, alignSelf: "center", marginBottom: 30, marginTop: 30 }}
                    source={require("../assets/animations/check-mark.png")}
                />
                <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
                    Your order at {restaurantName} has been placed {/* for {totalUSD} */}
                </Text>

                <ImageBackground
                    style={{ height: 200, alignSelf: "center",  }}
                    source={require("../assets/animations/cooking.gif")}
                />
                
            </View>

        </SafeAreaView>
    );
}