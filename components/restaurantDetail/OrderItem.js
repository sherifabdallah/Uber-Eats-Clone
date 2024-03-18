import { View, Text } from 'react-native'
import React from 'react'

export default function OrderItem({ item }) {

    const { title, price, price_currency } = item;

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#999',
        }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>{title}</Text>
            <Text style={{ opacity: 0.7, fontSize: 16 }}>{price_currency}{price}</Text>
        </View>
    )
}