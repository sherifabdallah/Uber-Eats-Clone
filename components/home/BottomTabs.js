import { Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5 name={props.icon} size={25} style={{ marginBottom: 3, alignSelf: 'center' }} />
      <Text style={{ textAlign: 'center' }}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

export default function BottomTabs() {

  return (

    <SafeAreaView style={{ flexDirection: "row", margin: 10, marginHorizontal: 30, justifyContent: 'space-between' }}>
      <Icon icon='home' text='Home' />
      <Icon icon='search' text='Browse' />
      <Icon icon='shopping-bag' text='Grocery' />
      <Icon icon='receipt' text='Orders' />
      <Icon icon='user' text='Account' />
    </SafeAreaView>
  );
}
